import * as React from 'react';

export interface IContextInterface {
  currentUser: User;
  loading: boolean;
  currentPage: string;
}

type theme = {
  background: string;
  text: string;
  grade4: string;
  grade3: string;
  grade2: string;
  grade1: string;
  grade0: string;
}

type colorTheme = theme | undefined;

type User = {
  username: string | undefined;
  theme: colorTheme;
  // blockSize: number;
};

type Props = {
  children: React.ReactNode;
};

export const UserContext = React.createContext<IContextInterface | null>(null);

const { Provider } = UserContext;

export const UserProvider: React.FC<Props> = ({ children }: Props) => {
  const [user] = React.useState<IContextInterface | null>({
    loading: false,
    currentPage: 'timeline',
    currentUser: {
      username: 'kleva-j',
      theme: {
        background: 'transparent',
        text: '#9CA3AF',
        grade4: 'hsl(338, 78%, 30%)',
        grade3: 'hsl(338, 78%, 44%)',
        grade2: 'hsl(338, 78%, 58%)',
        grade1: 'hsl(338, 78%, 72%)',
        grade0: '#eee',
      },
      // blockSize: 10,
    },
  });

  return <Provider value={user}>{children}</Provider>;
};
