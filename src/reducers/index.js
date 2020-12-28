const reducer = (state = {}, action) => {

    switch(action.type) {
        case 'GET_ATHLETE_DATA':
            return {...state, loading: true};
        case 'SET_ATHLETE_DATA':
            return {...state, selectedAthleteData: action.data, loading: false}
        case 'SET_CODE_CALLBACK_AUTH_STRAVA':
            return {...state, codeAuth: action.data}
        case 'GET_ATHLETE_ACTIVITIES':
            return {...state, loading: true};
        case 'SET_ATHLETE_ACTIVITIES':
            return {...state, selectedAthleteActivities: action.data, loading: false}
        case 'SET_ATHLETE_AUTH':
            return {...state, athleteAuth: action.data}
        default:
            return state;
    }

}

export default reducer;