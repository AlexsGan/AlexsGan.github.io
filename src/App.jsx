import { useContext } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experiences from "./components/experiences/experiences";
import Intro from "./components/intro/intro";
import Toggle from "./components/toggle/toggle";
import { ThemeContext } from "./context";

import { ThemeProvider, createTheme } from '@mui/material/styles';

const muiDarkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const muiLightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App = () => {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  const muiTheme = darkMode ? muiDarkTheme : muiLightTheme;

  return (
    <div 
      style={{
        backgroundColor: darkMode ? "#222932" : "white",
        color: darkMode && "white",
      }}
    >
    <ThemeProvider theme={muiTheme}>
      <Toggle />
      <Intro/>
      <About/>
      <Experiences/>
      <Contact/>
    </ThemeProvider>
    </div>
  );
};

export default App;