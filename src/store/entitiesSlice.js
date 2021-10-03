import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    entities: [],
    status: 'idle',
    error: null,
    count: 0
}
export const fetchEntities = createAsyncThunk('entities/fetchPeople', async ([pageNumber, requestName]) => {
    try {
        const response = await axios.get(process.env.REACT_APP_API_PEOPLE + `${requestName}/?page=${pageNumber}`)
        return response.data
    } catch (e) {
        console.log(e)
    }

})

const entitiesSLice = createSlice({
    name: 'entities',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchEntities.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchEntities.fulfilled, (state, action) => {
                state.status = 'success'
                state.entities = []
                state.count = action.payload.count
                state.entities = state.entities.concat(action.payload.results)
            })
            .addCase(fetchEntities.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default entitiesSLice.reducer

export const selectAll = state => state.entities.entities
export const selectEntity = (state, name) => state.entities.entities.find(entity => entity.name ? entity.name : entity.title === name)

export const selectStatus = state => state.entities.status
export const selectError = state => state.entities.error
export const selectCount = state => state.entities.count