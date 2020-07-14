import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer
} from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles";

import IconWrapper from "components/IconWrapper";
import defaultRoutes from "assets/defaultRoutes";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth
    }
  })
);
interface Props {
  window?: () => Window;
  mobileOpen: boolean;
  ClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomDrawer = (props: Props) => {
  const { window, mobileOpen, ClickHandler } = props;
  const theme = useTheme();
  const container =
    window !== undefined ? () => window().document.body : undefined;
  const classes = useStyles();
  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === "rtl" ? "right" : "left"}
      open={mobileOpen}
      onClose={ClickHandler}
      classes={{
        paper: classes.drawerPaper
      }}
      ModalProps={{
        keepMounted: true // Better open performance on mobile.
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {defaultRoutes.map((route, index) => (
          <ListItem button key={route.name}>
            <ListItemIcon>
              <IconWrapper Icon={route.icon} />
            </ListItemIcon>
            <ListItemText primary={route.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
