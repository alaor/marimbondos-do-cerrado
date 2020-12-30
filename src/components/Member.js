import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

let Member = ({atleta, selectedAthleteData, loading}) => {
  const classes = useStyles();

  const handleStravaClick = (idClient, clientSecret, refreshToken, profileId) => {
    let link = 'https://www.strava.com/oauth/authorize?client_id='+idClient+'&response_type=code&redirect_uri=http://marimbondosdocerrado.netlify.app/?clientSecret='+idClient+'-'+clientSecret+'-'+refreshToken+'-'+profileId+'&approval_prompt=force&scope=activity:read_all,profile:read_all';
    window.open(link, "_self");
  };

  return (
    <>
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {atleta.name} {selectedAthleteData && atleta.nome === 'Alaor' ? '- ' + selectedAthleteData.biggest_ride_distance : ''}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {atleta.speciality}
        </Typography>
        <Typography variant="body2" component="p">
          {atleta.ridesWhere}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => {
          if(atleta.apiEnabled) {
            handleStravaClick(atleta.idClient, atleta.clientSecret, atleta.refreshToken, atleta.profileId)
          } else {
            window.open(atleta.profile, "_blank")
          }}}>
          Informações do Strava
        </Button>        
      </CardActions>
    </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedAthleteData: state.selectedAthleteData,
  loading: state.loading,
})

Member = connect(
  mapStateToProps,
  null
)(Member)

export default Member;
