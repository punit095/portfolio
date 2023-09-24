import React, {useContext} from 'react'
import {MyContext} from '../context/MyContext';

const Experience = (props) => {
  const {Container, Box, Typography, Fade, Divider, expRef, SchoolOutlinedIcon, TaskAltOutlinedIcon, BusinessCenterOutlinedIcon, Timeline, TimelineItem, timelineItemClasses, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, isMobile} = useContext(MyContext);

  const education = [
    {'icon': <SchoolOutlinedIcon />, 'color': 'primary', 'title': 'University of Mumbai - IDOL', 'des': 'Master of Computer Applications - MCA', 'date': 'Sep 2023 - Nov 2025 (2 years)'},
    {'icon': <SchoolOutlinedIcon />, 'color': 'secondary', 'title': 'St. Francis Institute Of Technology - ITI', 'des': 'Diploma in software engineering, Information Technology', 'date': 'Sep 2015 - Aug 2017 (2 years)'},
    {'icon': <SchoolOutlinedIcon />, 'color': 'secondary', 'title': "MKCL's Digital University", 'des': 'KLIC Certificate In C Programming, Information Technology', 'date': 'Sep 2015 - Feb 2016 (6 months)'},
    {'icon': <SchoolOutlinedIcon />, 'color': 'secondary', 'title': "MKCL's Digital University", 'des': 'KLIC Certificate In C++ Programming, Information Technology', 'date': 'Jun 2016 - Sep 2016 (4 months)'},
    {'icon': <SchoolOutlinedIcon />, 'color': 'secondary', 'title': 'MPVV College of Commerce', 'des': 'Bachelor of Commerce - BCom', 'date': 'Apr 2013 - Feb 2017 (3 years)'}
  ];

  const experience = [
    {'icon': <BusinessCenterOutlinedIcon />, 'color': 'primary', 'title': 'Senior Software Engineer', 'des': 'RABS Net Solutions Pvt Ltd', 'date': 'Jul 2019 to Present (4 years 3 months)'},
    {'icon': <BusinessCenterOutlinedIcon />, 'color': 'secondary', 'title': 'Front End Developer - Trainee', 'des': 'RABS Net Solutions Pvt Ltd', 'date': 'Jul 2019 to Oct 2019 (3 months)'},
    {'icon': <BusinessCenterOutlinedIcon />, 'color': 'secondary', 'title': 'Accountant & Supervisor', 'des': 'Dishant Marble & Stone', 'date': 'Feb 2018 to Apr 2019 (1 year 3 months)'},
  ];

  return (
    <React.Fragment> 
      <Container ref={expRef} sx={{py: 10, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}} maxWidth='100%'>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'left', flex: 1}} maxWidth="lg">
            <Typography sx={{color: '#ffffff'}} variant="h5" gutterBottom>
              {'# Experience'} 
            </Typography> 
            <Divider light sx={{borderColor: '#718096', mb: 1, opacity: 0.2}} />
            <Typography sx={{color: '#718096'}} variant="h6" gutterBottom>
              Education Sumary & Professional Experience
            </Typography>

            <Box sx={{display: "flex", alignItems: "flex-start", justifyContent: "space-around", flexFlow: isMobile ? 'no-wrap' : 'wrap', flexDirection: isMobile && "column"}}>
              <Box sx={{mt: 1, textTransform: 'capitalize'}} maxWidth={isMobile ? '100%' : '50%'}>
                <Timeline 
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <Typography sx={{color: '#718096'}} variant="h6" gutterBottom>
                    <TaskAltOutlinedIcon sx={{position: 'relative', top: 5, left: 5}} />
                    &nbsp;&nbsp;&nbsp;Education 
                  </Typography>
                  {education.map((value, key) => (
                    <TimelineItem key={key}> 
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color={value.color}>
                          {value.icon}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="body1" sx={{color: '#718096'}}>
                          {value.title}
                        </Typography>
                        <Typography variant="body1" sx={{color: '#718096'}}>{value.des}</Typography>
                        <Typography variant="body2" sx={{color: '#718096'}}>{value.date}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
              <Box sx={{mt: 1, textTransform: 'capitalize'}} maxWidth={isMobile ? '100%' : '50%'}>
                <Timeline 
                  sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                      flex: 0,
                      padding: 0,
                    },
                  }}
                >
                  <Typography sx={{color: '#718096'}} variant="h6" gutterBottom>
                    <TaskAltOutlinedIcon sx={{position: 'relative', top: 5, left: 5}} />
                    &nbsp;&nbsp;&nbsp;Professional Experience 
                  </Typography>
                  {experience.map((value, key) => (
                    <TimelineItem key={key}> 
                      <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color={value.color}>
                          {value.icon}
                        </TimelineDot>
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="body1" sx={{color: '#718096'}}>
                          {value.title}
                        </Typography>
                        <Typography variant="body1" sx={{color: '#718096'}}>{value.des}</Typography>
                        <Typography variant="body2" sx={{color: '#718096'}}>{value.date}</Typography>
                      </TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Container>
    </React.Fragment>
  );
}

export default Experience;
