import * as React from "react";

interface ThemeContextInterface {
  theme: string;
}

const {
  Provider,
  Consumer,
} = React.createContext<ThemeContextInterface | null>(null);

export const ThemeProvider = Provider;

export const ThemeConsumer = Consumer;
