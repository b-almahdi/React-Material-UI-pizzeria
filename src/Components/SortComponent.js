import React, { Component } from "react";
import {
  CardActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SortComponent() {
  const classes = useStyles();
  return (
    <div>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Trier Par:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="ASC">Prix croissant</MenuItem>
            <MenuItem value="DESC">Prix décroissant</MenuItem>
          </Select>
        </FormControl>
      </CardActions>
    </div>
  );
}
