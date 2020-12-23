import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchAthleteData() {
    // get data strava;
    const headers = {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    }

    const body = JSON.stringify({
        client_id: 58116,
        client_secret: 'f7741e1da8a52f65fb099b24fcb09dc53cc299b0',
        refresh_token: '59783880dadb9cc85d6fda7a9cde0223a20ebc0a',
        grant_type: 'refresh_token',
    });

    const reauthorizeResponse = yield fetch('https://www.strava.com/oauth/token', {
        method: 'post',
        "headers": headers,
        "body": body
    });

    const reAuthJson = yield reauthorizeResponse.json();
    
    const userStats = yield fetch('https://www.strava.com/api/v3/athletes/22001130/stats?access_token=' + reAuthJson.access_token);
    const json = yield userStats.json();
    console.log(json);

    yield put({ type: "SET_ATHLETE_DATA", data: json});
}

function* actionWatcher() {
    yield takeLatest('GET_ATHLETE_DATA', fetchAthleteData)
}

export default function* rootSaga() {
    yield all([
      actionWatcher(),
    ]);
}