import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, PeoplePage, TvShowsPage} from "./pages";
import {MoviesNowPage} from "./pages/MoviesNowPage/MoviesNowPage";
import {MoviesUpcomingPage} from "./pages/MoviesUpcomingPage/MoviesUpcomingPage";
import {MoviesTopRatedPage} from "./pages/MoviesTopRatedPage/MoviesTopRatedPage";
import {MovieDetailsPage} from "./pages/MovieDetailsPage/MovieDetailsPage";
import {MoviesByGenrePage} from "./pages/MoviesByGenrePage/MoviesByGenrePage";
import {MoviesBySearchPage} from "./pages/MoviesBySearchPage/MoviesBySearchPage";
import {MovieLayout} from "./layouts/MovieLayout/MovieLayout";
import {PeopleDetailsPage} from "./pages/PeopleDetailsPage/PeopleDetailsPage";



const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>

                <Route path={'movie'} element={<MovieLayout/>}>
                    <Route index element={<Navigate to={'all'}/>}/>
                        <Route path={'all'} element={<MoviesPage/>}/>
                        <Route path={'now'} element={<MoviesNowPage/>}/>
                        <Route path={'upcoming'} element={<MoviesUpcomingPage/>}/>
                        <Route path={'top-rated'} element={<MoviesTopRatedPage/>}/>
                        <Route path={'genre/:id'} element={<MoviesByGenrePage/>}/>
                </Route>
                <Route path={'movie/:id'} element={<MovieDetailsPage/>}/>

                <Route path={'/tv'} element={<TvShowsPage/>}/>
                <Route path={'people'} element={<PeoplePage/>}/>
                <Route path={'people/:id'} element={<PeopleDetailsPage/>}/>
                <Route path={'search'} element={<MoviesBySearchPage/>}/>



            </Route>

        </Routes>
    );
};

export {App};