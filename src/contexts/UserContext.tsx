import * as React from 'react';

interface IUserContextInterface {
  currentUser: User;
}

type User = {
  loading: boolean;
  currentPage: number;
  name: string;
};

type Props = {
  children: React.ReactNode;
};

const { Provider, Consumer } = React.createContext<IUserContextInterface | null>(null);

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [user] = React.useState<IUserContextInterface | null>(null);

  return <Provider value={user}>{children}</Provider>;
};

export const UserConsumer = Consumer;
