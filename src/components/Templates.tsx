import React from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import "./Templates.scss"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "2rem",
    },
    paper: {
      color: theme.palette.text.secondary,
    },
  })
);

export default function Templates() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className="paper add-new-template">
            <Link to={"/new-layout"}>
              <div>
                <i className="material-icons">add</i>
                <div>Create new template</div>
              </div>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className="paper">xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className="paper">xs</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className="paper">xs</Paper>
        </Grid>
        <Grid item xs>
          <Paper className="paper">xs=6</Paper>
        </Grid>
        <Grid item xs>
          <Paper className="paper">xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
