const getAthleteData = (auth) => ({
    auth,
    type: 'GET_ATHLETE_DATA',
});

const setAthleteAuth = (data) => ({
    data,
    type: 'SET_ATHLETE_AUTH',
});

const getAthleteActivities = (auth) => ({
    auth,
    type: 'GET_ATHLETE_ACTIVITIES',
});

const setAthleteActivities = (data) => ({
    data,
    type: 'SET_ATHLETE_ACTIVITIES',
});

export {
    getAthleteData,
    setAthleteAuth,
    getAthleteActivities,
    setAthleteActivities,
}