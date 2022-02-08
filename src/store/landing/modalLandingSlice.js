import {createSlice} from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'modalLanding',
    initialState: {
        modalOpened: false,
        placeSelected: {}
    },
    reducers: {
        setModalState: (state, action) => {
            state.modalOpened = action.payload;
        },
        setPlaceSelected: (state, action) => {
            console.log('PLACE SELECTED', action.payload);
            state.placeSelected = action.payload;
        }
    }
})

export const { setModalState, setPlaceSelected } = slice.actions;

export const selectPlace = state => {
    return state.modalLanding.placeSelected
}

export const selectModalOpened = state => {
    return state.modalLanding.modalOpened
}

export const openModal  = (place) => (dispatch) => {
    dispatch(setPlaceSelected(place))
    dispatch(setModalState(true))
}

export const closeModal = () => dispatch => dispatch(setModalState(false))

export default slice.reducer;