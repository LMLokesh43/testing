import React, { FC } from "react";
import { makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import gridContainerStyles from "assets/jss/components/gridContainerStyles"
import GridProps from "./GridProps"

const useStyles = makeStyles(gridContainerStyles);

const GridContainer: FC<GridProps> = ({ children, className, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

export default GridContainer;