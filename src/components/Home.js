import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Background from "../img/bikers2.jpg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  image: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
  },
  button: {
    position: "absolute",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <img alt="" src={Background} className={classes.image} />
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          onClick={() =>
            window.open(
              "https://www.strava.com/clubs/marimbondosdocerrado",
              "_blank"
            )
          }
        >
          Saiba mais
        </Button>
      </div>
    </>
  );
};

export default Home;
