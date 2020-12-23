const reducer = (state = {}, action) => {

    switch(action.type) {
        case 'GET_ATHLETE_DATA':
            return {...state, loading: true};
        case 'SET_ATHLETE_DATA':
            return {...state, selectedAthleteData: action.data, loading: false}
        default:
            return state;
    }

}

export default reducer;