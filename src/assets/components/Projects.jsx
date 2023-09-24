import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext';
import '../components/components.css';

import TempMailImg from '../imgs/projects/tempmail.png';
import BusinessImg from '../imgs/projects/business.png';
import LoginPanelImg from '../imgs/projects/loginpanel.png';
import GamingImg from '../imgs/projects/gaming.png';
import MovieImg from '../imgs/projects/movie.png';

const itemData = [
  {
    img: BusinessImg,
    title: 'Business Profile',
    author: '#mybusinessprofile',
    link: 'https://www.mybusinessprofile.org/Punit_parmar-7679',
    tooltip: 'My Business Profile', 
  },
  {
    img: TempMailImg,
    title: 'Create & receive email in only 1 second',
    author: '#tempmail', 
    link: 'https://tempmail-testing.000webhostapp.com/',
    tooltip: 'Tempmail Generator',
  },
  {
    img: LoginPanelImg,
    title: 'Login Panel',
    author: '#loginpanel',
    link: 'https://punittask.000webhostapp.com/',
    tooltip: 'Login Panel', 
  },
  {
    img: GamingImg,
    title: 'Gaming',
    author: '#comingsoon',
    // link: 'https://punittask.000webhostapp.com/',
    tooltip: 'Coming Soon',
  },
  {
    img: MovieImg,
    title: 'Movies',
    author: '#comingsoon',
    // link: 'https://punittask.000webhostapp.com/',
    tooltip: 'Coming Soon',
  },
];

const Projects = (props) => {
  const {Container, Box, Typography, Fade, Divider, projectRef, Link, Tooltip, isMobile, ImageList, ImageListItem, ImageListItemBar, ListSubheader, InfoIcon, IconButton} = useContext(MyContext);

  return (
    <React.Fragment> 
      <Container ref={projectRef} sx={{py: 10, backgroundColor: '#171923', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}} maxWidth='100%'>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'left', flex: 1}} maxWidth="lg">
            <Typography sx={{color: '#ffffff'}} variant="h5" gutterBottom>
              {'# Projects'} 
            </Typography>  
            <Divider light sx={{borderColor: '#718096', mb: 1, opacity: 0.2}} />
            
            <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8} sx={{width: '100%', cursor: "pointer"}}>
              {/* <ImageListItem key="Subheader" cols={2}>
                <ListSubheader component="div"></ListSubheader>
              </ImageListItem> */}
              {itemData.map((item, key) => (
                <Link key={key} target="_blank" href={item.link} underline="none">
                  <Tooltip title={item.tooltip}>
                    <ImageListItem className='imgStyle'>
                      <img
                        srcSet={`${item.img}`}
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={item.author}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  </Tooltip>
                </Link>
              ))}
            </ImageList>

          </Box>
        </Fade>
      </Container>
    </React.Fragment>
  );
}

export default Projects;
