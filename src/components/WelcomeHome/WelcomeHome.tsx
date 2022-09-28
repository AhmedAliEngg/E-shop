import React from 'react'
import { Box, Container, styled } from '@mui/material'
import welcomehome from '../../assets/WelcomeHome.gif';
const StyledContainer = styled(Container)({
  display: " flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1px 0",
  marginBottom:'20px',
  marginTop:'20px',
  '&.MuiContainer-root': {
      paddingLeft: 0,
      paddingRight: 0,
  },

})
const StyledBox = styled(Box)({

})
const WelcomeHome: React.FC = () => {
  return (
    <StyledBox>
    <StyledContainer>
        <img src={welcomehome} height="200px" width="1280px"/>
    </StyledContainer>
    </StyledBox>
  )
}

export default WelcomeHome