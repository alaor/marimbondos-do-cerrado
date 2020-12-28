import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import {getAthleteData, setAthleteAuth} from '../actions';
import qs from "qs";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

let Home = ({getAthleteData, setAthleteAuth, history, location}) => {
  const classes = useStyles();

  useEffect(() => {
    let params = qs.parse(window.location.search.replace("?", ""), {
      ignoreQueryPrefix: false,
    });
    let codeAuthStrava = params.code;
    if (codeAuthStrava) {
      const [id, secret, refresh] = params.clientSecret.split("-");
      let athleteAuth = {
        code: codeAuthStrava,
        idClient: id,
        secret: secret,
        refresh: refresh,
      }
      setAthleteAuth(athleteAuth);
      history.push({
        pathname: '/strava',
        state: {
            prev: true,
            url: location.pathname,
        },
    });
    }
  }, []);

  return (
    <div>
      <Grid className={classes.root} container alignItems="center" justify="center">
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              window.open(
                "https://www.strava.com/clubs/marimbondosdocerrado",
                "_blank"
              )
            }
          >
            Junte-se a nós
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDispatchToProps = {
  getAthleteData: getAthleteData,
  setAthleteAuth: setAthleteAuth,
};

Home = connect(
  null,
  mapDispatchToProps,
)(Home);

export default Home;
