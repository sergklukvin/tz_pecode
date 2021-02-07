import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AddToQueueTwoToneIcon from '@material-ui/icons/AddToQueueTwoTone';
import PinDropTwoToneIcon from '@material-ui/icons/PinDropTwoTone';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import CharactersList from '../Characters/CharactersList';
import EpisodesList from '../Episodes/EpisodesList';
import LocationList from '../Locations/LocationList';
import MyWatchList from '../MyWatch/MyWatchList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    backgroundColor: 'black',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'black',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: 'black',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    color: 'red',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function NavigationPanel(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} style={{ backgroundColor: 'black' }}>
        <p
          style={{
            margin: 0,
            padding: '18px',
            color: 'white',
            fontSize: '20px',
          }}
        >
          THE BEST LOGO
        </p>
      </div>
      <Divider />
      <List>
        {[
          {
            id: 1,
            title: 'Characters',
            icon: <AccountCircleTwoToneIcon />,
            link: '/',
          },
          {
            id: 2,
            title: 'Episodes',
            icon: <AddToQueueTwoToneIcon />,
            link: 'episodes',
          },
          {
            id: 3,
            title: 'Locations',
            icon: <PinDropTwoToneIcon />,
            link: 'locations',
          },
          {
            id: 4,
            title: 'My watch list',
            icon: <FavoriteTwoToneIcon />,
            link: 'watch',
          },
        ].map((obj) => (
          <Link
            to={obj.link}
            key={obj.id}
            style={{ textDecoration: 'none', color: 'grey' }}
          >
            <ListItem button key={obj.id}>
              <ListItemIcon>{obj.icon}</ListItemIcon>
              <ListItemText primary={obj.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Rick and Morty TV series
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <nav className={classes.drawer} aria-label='mailbox folders'>
          <Hidden smUp implementation='css'>
            <Drawer
              container={container}
              variant='temporary'
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation='css'>
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant='permanent'
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route exact path='/' component={CharactersList} />
            <Route path='/locations' component={LocationList} />
            <Route path='/episodes' component={EpisodesList} />
            <Route path='/watch' component={MyWatchList} />
            <Redirect to='/' />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

NavigationPanel.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavigationPanel;
