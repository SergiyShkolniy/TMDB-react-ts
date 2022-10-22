import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, PeoplePage, TvShowsPage} from "./pages";
import {MoviesPopularPage} from "./pages/MoviesPopularPage/MoviesPopularPage";
import {MoviesUpcomingPage} from "./pages/MoviesUpcomingPage/MoviesUpcomingPage";
import {MoviesTopRatedPage} from "./pages/MoviesTopRatedPage/MoviesTopRatedPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage/MoviesByGenrePage";
import {MoviesBySearchPage} from "./pages/MoviesBySearchPage/MoviesBySearchPage";
import {MovieLayout} from "./layouts/MovieLayout/MovieLayout";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>

                <Route path={'movie'} element={<MovieLayout/>}>
                    <Route index element={<Navigate to={'all'}/>}/>
                        <Route path={'all'} element={<MoviesPage/>}/>
                        <Route path={'popular'} element={<MoviesPopularPage/>}/>
                        <Route path={'upcoming'} element={<MoviesUpcomingPage/>}/>
                        <Route path={'top-rated'} element={<MoviesTopRatedPage/>}/>
                        <Route path={'genre/:id'} element={<MoviesByGenrePage/>}/>
                </Route>
                <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>

                <Route path={'search'} element={<MoviesBySearchPage/>}/>
                <Route path={'tv'} element={<TvShowsPage/>}/>
                <Route path={'person'} element={<PeoplePage/>}/>

            </Route>

        </Routes>
    );
};

export {App};