import React, { createContext } from 'react';

export const ThemeContext = createContext({});

export default class ThemeContextProvider extends React.Component {
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '282c34' }
  }

  render() {
    return (
      <ThemeContext.Provider>

      </ThemeContext.Provider>
    );
  }
}
