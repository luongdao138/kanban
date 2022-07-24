import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from '~/pages/NotFoundPage';
import HomePage from '~/pages/HomePage';
import BoardDetailPage from '~/pages/BoardDetailPage';
import MainLayout from '~/layout/MainLayout';

const App = () => {
    const theme = createTheme({
        palette: { mode: 'dark' },
    });
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="boards" element={<HomePage />} />
                    <Route path="boards/:boardId" element={<BoardDetailPage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <CssBaseline />
        </ThemeProvider>
    );
};

export default App;
