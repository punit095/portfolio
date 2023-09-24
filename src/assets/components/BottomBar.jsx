import React, {useContext} from 'react';
import {MyContext} from '../context/MyContext';

const BottomBar = () => {
const {Container, Box, Typography, Fade} = useContext(MyContext);
  return (
    <React.Fragment> 
      <Container maxWidth="100%" sx={{py: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#171923', transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'}}>
        <Fade in timeout={900}>
          <Box sx={{textAlign: 'center'}}> 
            <Typography sx={{color: '#718096'}} variant="body2">
              &copy; 2023 Punit Parmar. All rights reserved.
            </Typography> 
          </Box>
        </Fade>
      </Container>
    </React.Fragment>
  );
}

export default BottomBar;
