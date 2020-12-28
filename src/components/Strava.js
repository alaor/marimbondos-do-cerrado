import React, {useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CircularProgress from '@material-ui/core/CircularProgress';


import {getAthleteData, getAthleteActivities} from '../actions';

import { connect } from 'react-redux'

import {DistanceFormat} from '../utilities/DistanceFormat';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    accordion: {
        marginTop: 15,
    }
}));

let Strava = ({loading, athleteAuth, selectedAthleteData, selectedAthleteActivities, getAthleteData, getAthleteActivities}) => {

    const classes = useStyles();

    useEffect(()=> {
        if(athleteAuth) {
            getAthleteData(athleteAuth);
            getAthleteActivities(athleteAuth);
        }
    }, []);

    return (
        <Container maxWidth="lg" className={classes.accordion}>
            {loading ? <CircularProgress color="secondary" /> : <>
                {selectedAthleteData && <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Informações</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>                            
                                Maior Pedalada: {DistanceFormat(selectedAthleteData.biggest_ride_distance)} km
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>                            
                                Maior subida: {selectedAthleteData.biggest_climb_elevation_gain.toFixed(2)} M
                            </Typography>
                        </AccordionDetails>
                    </Accordion> </>
                }
                {selectedAthleteActivities && <>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <Typography className={classes.heading}>Última atividade</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>                            
                                Descrição: {selectedAthleteActivities[0].name}
                            </Typography>
                        </AccordionDetails>
                        <AccordionDetails>
                            <Typography>                            
                                Distância: {DistanceFormat(selectedAthleteActivities[0].distance)} km
                            </Typography>
                        </AccordionDetails>
                    </Accordion> </>
                }
            </>
            }
        </Container>
    )
}

const mapStateToProps = (state) => ({
    selectedAthleteData: state.selectedAthleteData,
    selectedAthleteActivities: state.selectedAthleteActivities,
    athleteAuth: state.athleteAuth,
    loading: state.loading,
  })
  
  const mapDispatchToProps = {
    getAthleteData: getAthleteData,
    getAthleteActivities: getAthleteActivities,
  };
  
  Strava = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Strava)
  
  export default Strava;