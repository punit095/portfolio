import React, {useRef} from 'react';
import {MyContext} from './context/MyContext';

import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect';
// MUI 
import Container from '@mui/material/Container'; 
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu'; 
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Fab from '@mui/material/Fab';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import InfoIcon from '@mui/icons-material/Info';
import ListItemIcon from '@mui/material/ListItemIcon';

// icons 
import MenuIcon from '@mui/icons-material/Menu';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import Settings from '@mui/icons-material/Settings';
import NavigationIcon from '@mui/icons-material/Navigation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faSkype, faLinkedin} from '@fortawesome/free-brands-svg-icons';

// Components
import Header from './components/Header';
import Overview from './components/Overview';
import AboutUs from './components/AboutsUs';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BottomBar from './components/BottomBar';

// imgs
import Logo from './imgs/logo.png';

const Main = () => {

  const aboutRef = useRef(null);
  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const expRef = useRef(null);
  const expClick = () => {
    expRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const projectRef = useRef(null);
  const projectClick = () => {
    projectRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const contactRef = useRef(null);
  const contactClick = () => {
    contactRef.current?.scrollIntoView({behavior: 'smooth'});
  };

  const handelRightClick = (event) => {
    event.preventDefault();
  }

  React.useEffect(() => {
    return () => {
      document.addEventListener('contextmenu', handelRightClick);      
    };
  },[]);

  return (
    <MyContext.Provider value={{Container, Box, AppBar, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem, Fade, Logo, Divider, Link, MenuIcon, SchoolOutlinedIcon, TaskAltOutlinedIcon, BusinessCenterOutlinedIcon, OpenInNewOutlinedIcon, NavigationIcon, Timeline, TimelineItem, timelineItemClasses, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, Fab, aboutRef, expRef, projectRef, contactRef, FontAwesomeIcon, faEnvelope, faSkype, faLinkedin, BrowserView, MobileView, isBrowser, isMobile, ImageList, ImageListItem, ImageListItemBar, ListSubheader, InfoIcon, ListItemIcon, Settings}}>
      <Header aboutClick={aboutClick} expClick={expClick} projectClick={projectClick} contactClick={contactClick} />
      <Overview 
        title="Hi, my name is Punit Parmar." 
        subtitle="I'm a software engineer."  
        description="Self-motivated team player with 4 years of experience seeking a position as a lead web developer with Next Generation Web Development where I can apply my advanced knowledge of web design with my leadership abilities to meet clients expectations." 
      />
      <AboutUs />
      <Experience />
      <Projects />
      <Contact />
      <BottomBar />
    </MyContext.Provider>
  );
}

export default Main;
