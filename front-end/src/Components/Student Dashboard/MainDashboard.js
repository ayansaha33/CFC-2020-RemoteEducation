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
import PropTypes from "prop-types";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home,
  Notes,
  Category,
  MenuBook,
  PowerSettingsNew,
  Settings,
} from "@material-ui/icons";
import SvgIcon from "@material-ui/core/SvgIcon";
import HomeFrag from "./DrawerFragments/HomeFragment/HomeFrag";
import AssessmentsFrag from "./DrawerFragments/AssessmentsFrag";
import CoursesFrag from "./DrawerFragments/CoursesFrag";
import JoinFrag from "./DrawerFragments/JoinFrag";
import MyCoursesFrag from "./DrawerFragments/MyCoursesFrag";
import NotesFrag from "./DrawerFragments/NotesFrag";
import SettingsFrag from "../SettingsFrag";
import Avatar from "@material-ui/core/Avatar";
// import App from "../../App";
// import Homepage from "../HomePage/HomePage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
    hover: theme.palette.text.primary,
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

export default function MainDashboard() {
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
            <SvgIcon style={{ marginRight: "16px" }}>
              <path
                fill="currentColor"
                d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
              />
              {"  "}
            </SvgIcon>

            <Typography variant="h6" noWrap>
              Student Profile
            </Typography>
            {/* <div style={{ marginLeft:  }}>
              <Avatar className={classes.orange}>N</Avatar>
            </div> */}
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
                to={"/courses"}
                primary="Explore Courses"
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
                to={"/notes"}
                primary="Notes"
                className={classes.link}
                icon={<Notes />}
              />

              <ListItemLink
                to={"/assessments"}
                primary="Assessments"
                className={classes.link}
                icon={<span class="material-icons">history_edu</span>}
              />

              <ListItemLink
                to={"/joinclass"}
                primary="Join Live Class"
                className={classes.link}
                icon={<span class="material-icons">ondemand_video</span>}
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
            <Route exact path="/" component={HomeFrag} />
            <Route exact path="/courses" component={CoursesFrag} />
            <Route exact path="/mycourses" component={MyCoursesFrag} />
            <Route exact path="/notes" component={NotesFrag} />
            <Route exact path="/assessments" component={AssessmentsFrag} />
            <Route exact path="/joinclass" component={JoinFrag} />
            <Route exact path="/settings" component={SettingsFrag} />
            {/* <Route exact path="/logout" component={App} /> */}
          </Switch>
          {/* <HomeFragment /> */}
        </main>
      </div>
    </Router>
  );
}
