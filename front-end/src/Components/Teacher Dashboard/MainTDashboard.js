import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Home,
  Notes,
  Category,
  MenuBook,
  PowerSettingsNew,
  Settings,
} from "@material-ui/icons";
import Dash from "./DrawerFragments/Dash";
import AssessStudents from "./DrawerFragments/AssessStudents";
import CourseMaterial from "./DrawerFragments/CourseMaterial";
import CreateLiveClass from "./DrawerFragments/CreateLiveClass";
import MyCourses from "./DrawerFragments/MyCourses";
import CreateNotes from "./DrawerFragments/CreateNotes";
import SettingsFrag from "../SettingsFrag";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <Link to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default function MainTDashboard() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#1a88ff" }}
          className={classes.appBar}
        >
          <Toolbar>
            <span class="material-icons" style={{ marginRight: "16px" }}>
              school
            </span>

            <Typography variant="h6" noWrap>
              Professor Profile
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <div className={classes.drawerContainer}>
            <List>
              <ListItemLink
                to={"/"}
                primary="Dashboard"
                className={classes.link}
                icon={<Home />}
              />

              <ListItemLink
                to={"/coursematerial"}
                primary="Course Material"
                className={classes.link}
                icon={<Category />}
              />

              <ListItemLink
                to={"/mycourses"}
                primary="My Courses"
                className={classes.link}
                icon={<MenuBook />}
              />

              <ListItemLink
                to={"/createnotes"}
                primary="Create Notes"
                className={classes.link}
                icon={<Notes />}
              />

              <ListItemLink
                to={"/assessstudents"}
                primary="Assess Students"
                className={classes.link}
                icon={<span class="material-icons">history_edu</span>}
              />

              <ListItemLink
                to={"/createliveclass"}
                primary="Create Live Class"
                className={classes.link}
                icon={<span class="material-icons">video_call</span>}
              />
            </List>

            <Divider />

            <List>
              <ListItemLink
                to={"/settings"}
                primary="Settings"
                className={classes.link}
                icon={<Settings />}
              />

              <ListItemLink
                to={"/logout"}
                primary="Logout"
                className={classes.link}
                icon={<PowerSettingsNew />}
              />
            </List>
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar />
          <Switch>
            <Route exact path="/" component={Dash} />
            <Route exact path="/coursematerial" component={CourseMaterial} />
            <Route exact path="/mycourses" component={MyCourses} />
            <Route exact path="/createnotes" component={CreateNotes} />
            <Route exact path="/assessstudents" component={AssessStudents} />
            <Route exact path="/createliveclass" component={CreateLiveClass} />
            <Route exact path="/settings" component={SettingsFrag} />
          </Switch>
          {/* <HomeFragment /> */}
        </main>
      </div>
    </Router>
  );
}
