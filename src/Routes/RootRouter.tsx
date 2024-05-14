import React, { Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from '../Components/Loader/Loader';
import { ROUTES } from './routes';
import LayoutWithHeader from 'src/Layouts/LayoutWithHeader/LayoutWithHeader';
import LayoutWithoutHeader from 'src/Layouts/LayoutWithoutHeader/LayoutWithoutHeader';
import { useAppDispatch } from '@src/redux/store';
import { setModalByName } from '@src/redux/reducers/modalReducer/modalReducer';
import { useCookies } from 'react-cookie';
import AuthSocialPage from '@src/Pages/AuthSocialPage/AuthSocialPage';

const HomePage = React.lazy(() => import('@pages/HomePage/HomePage'));
const RegistrationPage = React.lazy(() => import('@pages/StepRegistraion/RegistrationPage/RegistrationPage'));
const ConfirmationPage = React.lazy(() => import('@pages/StepRegistraion/ConfirmationPage/ConfirmationPage'));
const CatalogPage = React.lazy(() => import('@pages/CatalogPage/CatalogPage'));
const BlogPage = React.lazy(() => import('@pages/BlogPage/BlogPage'));
const BlockPageById = React.lazy(() => import('src/Pages/BlogPageById/BlogPageById'));
const FavoritesPage = React.lazy(() => import('@pages/FavoritesPage/FavoritesPage'));
const BasketPage = React.lazy(() => import('@pages/BasketPage/BasketPage'));
const CatalogById = React.lazy(() => import('@pages/CatalogById/CatalogById'));
const PersonalProfilePage = React.lazy(() => import('@pages/PersonalProfilePage/PersonalProfilePage'));

function RootRoute() {

    const dispatch = useAppDispatch();
    const [currentCityCookie] = useCookies(['currentCity']);
    const [cookiesAccept] = useCookies(['cookieAccepted']);

    useEffect(() => {
        if(!currentCityCookie?.currentCity && cookiesAccept?.cookieAccepted) {
            dispatch(setModalByName({ isModalActive: true, modalName: 'modal-confirm-country', withDarkOverlay: true }));
        }
    }, [cookiesAccept]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route element={ <LayoutWithHeader/> }>
                    <Route path={ROUTES.home} element={<HomePage />} />
                    <Route path={ROUTES.catalog} element={<CatalogPage />} />
                    <Route path={ROUTES.blog} element={<BlogPage />} />
                    <Route path={ROUTES.blogById} element={<BlockPageById />} />
                    <Route path={ROUTES.favorites} element={<FavoritesPage />} />
                    <Route path={ROUTES.basket} element={<BasketPage />} />
                    <Route path={ROUTES.catalogById} element={<CatalogById />} />
                    <Route path={ROUTES.profile} element={<PersonalProfilePage />} />
                </Route>
                <Route element={ <LayoutWithoutHeader/> }>
                    <Route path={ROUTES.registration} element={<RegistrationPage />} />
                    <Route path={ROUTES.verification} element={<ConfirmationPage />} />
                    <Route path={ROUTES.authSocial} element={<AuthSocialPage />} />
                </Route>
                <Route path='*' element={<Navigate to={ROUTES.home}/>} />
            </Routes>
        </Suspense>
    )
}

export default RootRoute;
