import React, { FC, useRef } from "react";
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import buttonStyle from "assets/jss/components/buttonStyle";
// import ButtonProps from "./ButtonProps"
import { ButtonProps } from "components/customButtons/ButtonProps"
const useStyles = makeStyles(buttonStyle);
const RegularButton: FC<ButtonProps> = (props) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const classes = useStyles();

  const ref = useRef<HTMLButtonElement>(null);

  const btnClasses = classNames({
    [classes.button]: true,
    // [classes[size]]: size,
    // [classes[color]]: color,
    [classes.round]: round,
    [classes.fullWidth]: fullWidth,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    // [className]: className
  });
  return (
    <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
      {children}
    </Button>
  );
};

export default RegularButton;
