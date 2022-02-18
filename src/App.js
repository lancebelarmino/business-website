import { MantineProvider, Global } from '@mantine/core';
import Home from './components/Home';
import lightTheme from './styles/light';
import componentStyles from './styles/components';
import globalStyles from './styles/global';

function App() {
  return (
    <MantineProvider theme={lightTheme} styles={componentStyles}>
      <Global styles={globalStyles} />
      <Home />
    </MantineProvider>
  );
}

export default App;
