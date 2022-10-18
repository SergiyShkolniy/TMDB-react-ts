import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage, PeoplePage, TvShowsPage} from "./pages";

const App: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movie'}/>}/>

                <Route path={'movie'} element={<MoviesPage/>}/>
                <Route path={'tv'} element={<TvShowsPage/>}/>
                <Route path={'person'} element={<PeoplePage/>}/>

            </Route>

        </Routes>
    );
};

export {App};