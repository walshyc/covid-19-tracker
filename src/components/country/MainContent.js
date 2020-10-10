import React from "react";
import { Global } from "../global/Global";
import {Country} from '../country/Country'
import { makeStyles } from "@material-ui/core/styles";

export const MainContent = () => {
  const useStyles = makeStyles((theme) => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginTop: "70px"
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Country></Country>
      <Global></Global>
    </div>
  );
};
