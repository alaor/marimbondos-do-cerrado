import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchAthleteData({auth}) {
    const reAuthJson = yield authorize(auth, 'refresh_token');
    const userStats = yield fetch('https://www.strava.com/api/v3/athletes/22001130/stats?access_token=' + reAuthJson.access_token);
    const json = yield userStats.json();
    yield put({ type: "SET_ATHLETE_DATA", data: json});
}

function *getAthleteActivities({auth}) {
    const reAuthJson = yield authorize(auth, 'authorization_code');
    var bearer = 'Bearer ' + reAuthJson.access_token;
    const activities = yield fetch('https://www.strava.com/api/v3/athlete/activities', {
        method: 'GET',
        headers: {
            'Authorization': bearer,
        }
    });
    const response = yield activities.json();
    console.log(response);
    yield put({ type: "SET_ATHLETE_ACTIVITIES", data: response});

}

function *authorize(auth, grantType) { 
    // grandType can be: refresh_token, authorization_code
    
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
        client_id: auth.idClient,
        client_secret: auth.secret,
        refresh_token: auth.refresh,
        grant_type: grantType,
        code: grantType === 'authorization_code' ? auth.code : null,
    });
    
    const reauthorizeResponse = yield fetch('https://www.strava.com/api/v3/oauth/token', {
        method: 'post',
        "headers": headers,
        "body": body
    });

    const reAuthJson = yield reauthorizeResponse.json();
    return reAuthJson;
}

function* actionWatcher() {
    yield takeLatest('GET_ATHLETE_DATA', fetchAthleteData);
    yield takeLatest('GET_ATHLETE_ACTIVITIES', getAthleteActivities);
}

export default function* rootSaga() {
    yield all([
      actionWatcher(),
    ]);
}