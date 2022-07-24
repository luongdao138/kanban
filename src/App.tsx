import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const App = () => {
    const theme = createTheme({
        palette: { mode: 'dark' },
    });
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div>App</div>
        </ThemeProvider>
    );
};

export default App;
