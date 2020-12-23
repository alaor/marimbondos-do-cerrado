import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux'
import {getAthleteData} from '../actions';


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

let Home = ({getAthleteData}) => {
  const classes = useStyles();

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
              // getAthleteData()
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
};

Home = connect(
  null,
  mapDispatchToProps,
)(Home);

export default Home;
