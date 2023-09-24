import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext';
import './BgAnimate.css';

const Overview = (props) => {
  const {Container, Box, Typography, Button, Fade, OpenInNewOutlinedIcon, isMobile} = useContext(MyContext);

  return (
    <React.Fragment> 
      <Container className="area" sx={{py: 10, height: {xs: '100vh', md: '100vh'}, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'center'}}>
            <Typography sx={{color: '#ffffff'}} variant={isMobile ? "h5" : "h2"}>
              {props.title}
            </Typography>
            <Typography sx={{color: '#38b2ac'}} variant={isMobile ? "h5" : "h2"} gutterBottom>
              {props.subtitle}
            </Typography>
            <Typography sx={{color: '#718096'}} variant={isMobile ? "body1" : "h6"} gutterBottom>
              {props.description}
            </Typography>
            <br/>
            <Button target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" variant="outlined" style={{textTransform: 'capitalize', borderColor: '#38b2ac', color: '#38b2ac'}} endIcon={<OpenInNewOutlinedIcon />}>Let's Connect!</Button>
          </Box>
        </Fade>
        {/* bg animation */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li> 
          <li></li> 
          <li></li> 
          <li></li>
        </ul>
      </Container>
    </React.Fragment>
  );
}

export default Overview;
