import { onError } from '@apollo/client/link/error';
import { ApolloLink, Observable, from, HttpLink } from '@apollo/client';

const { log } = console;

const connections: { [key: string]: any } = {};

export const cancelRequestLink = new ApolloLink(
  (operation, forward) =>
    new Observable((observer) => {
      const context = operation.getContext();
      const connectionHandle = forward(operation).subscribe({
        next: (...arg) => observer.next(...arg),
        error: (...arg) => {
          cleanUp();
          observer.error(...arg);
        },
        complete: (...arg) => {
          cleanUp();
          observer.complete(...arg);
        },
      });

      const cleanUp = () => {
        connectionHandle?.unsubscribe();
        delete connections[context.requestTrackerId];
      };

      if (context.requestTrackerId) {
        const controller = new AbortController();
        controller.signal.onabort = cleanUp;
        operation.setContext({
          ...context,
          fetchOptions: {
            signal: controller.signal,
            ...context?.fetchOptions,
          },
        });

        if (connections[context.requestTrackerId]) {
          connections[context.requestTrackerId]?.abort();
        }
        connections[context.requestTrackerId] = controller;
      }
      return connectionHandle;
    }),
);

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }
  if (networkError) log(`[Network error]: ${networkError}`);
});

export const link = from([errorLink, cancelRequestLink, new HttpLink({ uri: process.env.REACT_APP_BACKEND_JOBS_API })]);
