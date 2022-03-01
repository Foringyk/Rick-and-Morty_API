import CharactersPage from '../containers/CharactersPage';
import PersonagePage from '../containers/PersonagePage';
import HomePage from '../containers/HomePage';
import NotFoundPage from '../containers/NotFoundPage';
import FavoritePage from '../containers/FavoritePage/FavoritePage';
import ErrorMessage from '../components/ErrorMessage';
import UiLoading from '../components/UI-kit/UiLoading';



const routesConfig = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/api/character',
        element: <CharactersPage />
    },
    {
        path: '/api/character/:id',
        element: <PersonagePage />
    },
    {
        path: '/favorites',
        element: <FavoritePage />
    },
    {
        path: '/not-found',
        element: <NotFoundPage />
    },
    {
        path: '/loading',
        element: <UiLoading />
    },
    {
        path: '/fail',
        element: <ErrorMessage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
];

export default routesConfig;