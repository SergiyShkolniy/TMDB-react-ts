import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout, MovieLayout} from "./layouts";
import {
    MovieDetailsPage,
    MoviesByGenrePage, MoviesBySearchPage,
    MoviesNowPage,
    MoviesPage,
    MoviesTopRatedPage,
    MoviesUpcomingPage, NotFoundPage, PeopleDetailsPage,
    PeoplePage,
    TvShowsPage
} from "./pages";


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

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>

        </Routes>
    );
};

export {App};