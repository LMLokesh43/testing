import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import gridItemStyles from "assets/jss/components/gridItemStyles"
import GridProps from "./GridProps"

const useStyles = makeStyles(gridItemStyles);

const GridItem: FC<GridProps> = ({ children, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

export default GridItem;