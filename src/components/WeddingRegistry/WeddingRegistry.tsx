import { Box, Container, styled } from '@mui/material'
import React from 'react'
import Image from "../../assets/WeddingRegistry.webp"
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
  display: " flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "1px 0",
  marginTop:'15px',
  '&.MuiContainer-root': {
      paddingLeft: 0,
      paddingRight: 0,
  },

})
const WeddingRegistry: React.FC = () => {
  return (
    <StyledBox>
    <StyledContainer>
        <Box>
            <img  src={Image} height="302px" width="1280px"/>
        </Box>
    </StyledContainer>
</StyledBox>
  )
}

export default WeddingRegistry