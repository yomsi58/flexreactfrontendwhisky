import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        brand: 'Brands',
        proof: 'Proof',
        aged: 'Aged',
        grain: 'grain',
    },
    reducers: {
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseProof: (state, action) => { state.proof = action.payload},
        chooseAged: (state, action) => { state.aged = action.payload},
        chooseGrain: (state, action) => { state.grain = action.payload},
    }
})


export const reducer = rootSlice.reducer;
export const { chooseBrand, chooseProof, chooseAged, chooseGrain } = rootSlice.actions;