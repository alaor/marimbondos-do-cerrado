import React from "react";
import Member from "./Member";
import members from "../members";
import Grid from "@material-ui/core/Grid";

const Members = () => {
  
  const getMemberCard = (memberObj) => {
    return (
      <Grid item xs={12} sm={4} key={memberObj.name}>
        <Member atleta={memberObj}/>
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {members.map((memberObj) => getMemberCard(memberObj))}
    </Grid>
  );
};

export default Members;
