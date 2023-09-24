import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext';

const Contact = (props) => {
  const {Container, Box, Typography, Fade, Divider, Link, contactRef, NavigationIcon, Fab, Tooltip, FontAwesomeIcon, faEnvelope, faSkype, faLinkedin} = useContext(MyContext);

  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);
  
  return (
    <React.Fragment> 
      <Container ref={contactRef} sx={{py: 10, height: '40vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} maxWidth='100%'>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'center'}}>
            <Typography sx={{color: '#ffffff'}} variant="h4" gutterBottom>
              # Contact 
            </Typography> 
            <Divider light sx={{borderColor: '#718096', mb: 2, mx: 5, opacity: 0.2}} />
            <Typography sx={{color: '#ffffff'}} variant="h5" gutterBottom>
              Let's stay in touch!
            </Typography>
            <br />
            <Box sx={{display: 'flex', justifyContent: 'space-around', px: 5, alignItems: 'center'}}>
              <Link target="_blank" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" underline="none">
                <Tooltip title="LinkedIn">
                  <Typography sx={{color: '#ffffff'}} variant="h6">
                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize: 24}} />
                  </Typography>
                </Tooltip>
              </Link>
              <Typography sx={{color: '#718096', px: 2}} variant="body2">
                |
              </Typography>
              <Link target="_blank" href="mailto:punitpar95@gmail.com" underline="none">
                <Tooltip title="Gmail">
                  <Typography sx={{color: '#ffffff'}} variant="h6">
                    <FontAwesomeIcon icon={faEnvelope} style={{fontSize: 24}} />
                  </Typography>
                </Tooltip>
              </Link>
              <Typography sx={{color: '#718096', px: 2}} variant="body2">
                |
              </Typography>
              <Link target="_blank" href="https://join.skype.com/invite/qhAIatXHLXck" underline="none">
                <Typography sx={{color: '#ffffff'}} variant="h6">
                  <Tooltip title="Skype">
                    <FontAwesomeIcon icon={faSkype} style={{fontSize: 24}} />
                  </Tooltip>
                </Typography>
              </Link>

              {isVisible && <Fade in timeout={900}>
                <Fab variant="extended" sx={{position: 'fixed', zIndex: 1000, bottom: '1.5rem', right: '1.5rem', textTransform: 'capitalize', boxShadow: "0 0 2px 0 #000"}} onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>
                  <NavigationIcon sx={{ mr: 1 }} />Navigate
                </Fab>
              </Fade>}

            </Box>
          </Box>
        </Fade>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
