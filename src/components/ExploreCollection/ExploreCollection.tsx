import { Box, Container, styled } from '@mui/material'
import React from 'react'
import Image from "../../assets/ExploreCollection.webp"
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: " flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
  
  })
const ExploreCollection: React.FC = () => {
  return (
    <StyledBox>
            <StyledContainer>
                <Box>
                    <img  src={Image} height="392px" width="1280px"/>
                </Box>
            </StyledContainer>
        </StyledBox>
  )
}

export default ExploreCollection