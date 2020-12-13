import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
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
});

const Member = (props) => {
  const { name, speciality, ridesWhere, profile } = props;
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {speciality}
        </Typography>
        <Typography variant="body2" component="p">
          {ridesWhere}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => window.open(profile, "_blank")}>
          Ver perfil no strava
        </Button>
      </CardActions>
    </Card>
  );
};

export default Member;
