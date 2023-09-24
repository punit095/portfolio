import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext';
import {styled} from '@mui/material/styles';
import LinearProgress, {linearProgressClasses} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

const AboutUs = (props) => {
  const {Container, Box, Typography, Fade, Divider, aboutRef, isMobile} = useContext(MyContext);
  
  const [progress, setProgress] = React.useState(0);
  const [fiftyProgress, setFiftyProgress] = React.useState(0);
  const [seventyProgress, setSeventyProgress] = React.useState(0);
  const [eightyProgress, setEightyProgress] = React.useState(0); 

  const boxes = [
    {'lang': 'HTML', 'count' : progress},
    {'lang': 'CSS', 'count' : progress},
    {'lang': 'Bootstrap', 'count' : progress},
    {'lang': 'Java Script', 'count' : eightyProgress},
    {'lang': 'jQuery', 'count' : eightyProgress},
    {'lang': 'Ajax', 'count' : eightyProgress},
    {'lang': 'PHP', 'count' : eightyProgress},
    {'lang': 'MySQL', 'count' : eightyProgress},
    {'lang': 'SEO', 'count' : seventyProgress},
    {'lang': 'React js', 'count' : fiftyProgress},
    {'lang': 'Material UI', 'count' : progress},
    {'lang': 'React Native', 'count' : fiftyProgress},
    {'lang': 'React Native Paper', 'count' : progress},
    {'lang': 'Node Js', 'count' : fiftyProgress},
    {'lang': 'Express Js', 'count' : fiftyProgress},
    {'lang': 'Wordpress - CMS', 'count' : fiftyProgress},
    {'lang': '.htaccess', 'count' : fiftyProgress},
  ];
  
  React.useEffect(() => {
    if(progress !== 100){
      const timer = setInterval(() => {
        setFiftyProgress((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 10));
        setSeventyProgress((prevProgress) => (prevProgress >= 70 ? 70 : prevProgress + 10));
        setEightyProgress((prevProgress) => (prevProgress >= 80 ? 80 : prevProgress + 10));
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 200);
      return () => {
        clearInterval(timer);
      };
    } 
  }, [progress]);

  return (
    <React.Fragment> 
      <Container ref={aboutRef} sx={{py: 10, backgroundColor: '#171923', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}} maxWidth='100%'>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'left'}} maxWidth="lg">
            <Typography sx={{color: '#ffffff'}} variant="h5" gutterBottom>
              {'# About'} 
            </Typography> 
            <Divider light sx={{borderColor: '#718096', mb: 1, opacity: 0.2}} />
            <Typography sx={{color: '#718096'}} variant="h6" gutterBottom>
              I'm a senior frontend developer with 4+ years of experience building websites, web apps & native apps for small and medium-sized businesses. I create websites & apps that help organizations address business challenges and meet their needs. My expertise lies within front-end websites, web apps & native apps, whether it is to be built using HTML/CSS/JS. 
            </Typography> 
            <Box sx={{mt: 6}}>
              <Typography sx={{color: '#ffffff'}} variant="h5" gutterBottom>
                {'# Key Skills'} 
              </Typography> 
              <Divider light sx={{borderColor: '#718096', mb: 1, opacity: 0.2}} />
              <Typography sx={{color: '#718096'}} variant="h6" gutterBottom>I'm here to help! And the main languages in my tech stack are as follows., 
              {/* HTML, CSS, Bootstrap, JavaScript, jQuery, Ajax, PHP, MySQL, React js, React Native, Node Js, Express Js. */}
              </Typography>
              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-around", flexFlow: isMobile ? 'no-wrap' : 'wrap', flexDirection: isMobile && "column"}}>
                {boxes.map((value, key) => (
                  <Box key={key} sx={{width: isMobile ? "100%" : "45%", mt: 2, textTransform: 'capitalize'}}>
                    <Box sx={{position: 'relative'}}>
                      <Typography variant="body1" sx={{mb: 1}} color="#ffffff">{value.lang}</Typography>
                      <Typography variant="body2" style={{position: 'absolute', right: 0, bottom: 14}} color="#ffffff">{value.count+' %'}</Typography>
                      <BorderLinearProgress variant="determinate" value={value.count} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </React.Fragment>
  );
}

export default AboutUs;
