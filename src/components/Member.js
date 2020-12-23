import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { connect } from 'react-redux'
import {getAthleteData} from '../actions';

import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import {DistanceFormat} from '../utilities/DistanceFormat';

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

let Member = ({atleta, getAthleteData, selectedAthleteData, loading}) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    if (!selectedAthleteData) {
      getAthleteData();
    }    
    setExpanded(!expanded);
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
        <Button size="small" onClick={() => window.open(atleta.profile, "_blank")}>
          Ver perfil no strava
        </Button>
        {atleta.name === 'Alaor' &&
          <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Ver detalhes">     
            <ExpandMoreIcon />
          </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {loading ?
            <Typography paragraph>CARREGANDO...</Typography> :
            <> 
              <Typography paragraph>Maior pedalada:</Typography>
              <Typography paragraph>
                {selectedAthleteData && DistanceFormat(selectedAthleteData.biggest_ride_distance)} km
              </Typography>
              <Typography paragraph>Maior escalada:</Typography>
              <Typography paragraph>
                {selectedAthleteData && selectedAthleteData.biggest_climb_elevation_gain.toFixed(2)} M
              </Typography>
            </>
          }
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
};

const mapStateToProps = (state) => ({
  selectedAthleteData: state.selectedAthleteData,
  loading: state.loading,
})

const mapDispatchToProps = {
  getAthleteData: getAthleteData,
};

Member = connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)

export default Member;
