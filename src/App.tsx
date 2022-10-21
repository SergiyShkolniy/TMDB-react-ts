import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, PeoplePage, TvShowsPage} from "./pages";
import {MoviesPopularPage} from "./pages/MoviesPopularPage/MoviesPopularPage";
import {MoviesUpcomingPage} from "./pages/MoviesUpcomingPage/MoviesUpcomingPage";
import {MoviesTopRatedPage} from "./pages/MoviesTopRatedPage/MoviesTopRatedPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";


const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>

                <Route path={'movie'} element={<MoviesPage/>}>
                    <Route path={'popular'} element={<MoviesPopularPage/>}/>
                    <Route path={'upcoming'} element={<MoviesUpcomingPage/>}/>
                    <Route path={'top-rated'} element={<MoviesTopRatedPage/>}/>
                </Route>
                <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>
                <Route path={'tv'} element={<TvShowsPage/>}/>
                <Route path={'person'} element={<PeoplePage/>}/>

            </Route>

        </Routes>
    );
};

export {App};