import {AxiosError} from "axios";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IPeople, IPeopleDetails, IPeopleResponse} from "../../interfaces";
import {peopleService} from "../../services";

interface IState {
    peoples: IPeople[];
    people: IPeopleDetails | null;
    page: number;
    total_pages: number;
}

const initialState: IState = {
    peoples: [],
    people: null,
    page: 1,
    total_pages: 500,

};

const getAll = createAsyncThunk<IPeopleResponse, { pageTotal: number }>(
    'peopleSlice/getAll',
    async ({pageTotal}, {rejectWithValue}) => {
        try {
            const {data} = await peopleService.getAll(pageTotal);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getDetails = createAsyncThunk<IPeopleDetails, { id: string | undefined }>(
    'peopleSlice/getDetails',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await peopleService.getDetails(id);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const peopleSlice = createSlice({
    name: 'peopleSlice',
    initialState,
    reducers: {},

    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.peoples = action.payload.results;
                state.page = action.payload.page;
            })
            .addCase(getDetails.fulfilled, (state, action) => {
                state.people = action.payload;
            })

});

const {reducer: peopleReducer} = peopleSlice;

const peopleActions = {
    getAll,
    getDetails,
};

export {
    peopleReducer,
    peopleActions
}