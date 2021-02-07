import * as React from 'react';

interface IUserContextInterface {
  currentUser: User;
}

type User = {
  loading: boolean;
  currentPage: string;
  username: string | undefined;
};

type Props = {
  children: React.ReactNode;
};

const { Provider, Consumer } = React.createContext<IUserContextInterface | null>(null);

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [user] = React.useState<IUserContextInterface | null>({
    currentUser: {
      username: undefined,
      loading: false,
      currentPage: 'timeline',
    },
  });

  return <Provider value={user}>{children}</Provider>;
};

export const UserConsumer = Consumer;
