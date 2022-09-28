import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/DeliveryDuration.jpeg'
const StyledBox = styled(Box)({
    // display:"flex",
    // justifyContent:"center",
   
})
const StyledContainer = styled(Container)({
    display: " flex",
  //flexDirection: "column",
  justifyContent:'center',
  alignItems: "center",
  padding: "1px 0",
  '&.MuiContainer-root': {
      paddingLeft: 0,
      paddingRight: 0,
  },

})
const StyledBoxTwo = styled(Box)({
    padding:'10px'
})
const DeliveryDuration: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo  >
                    <Box>
                        <img src={Image} alt="abc" width="410.67px" height="107.8px"/>
                    </Box>
                    <Box component="span">
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo >
                <StyledBoxTwo  >
                    <Box>
                        <img src={Image} alt="abc" width="410.67px" height="107.8px"/>
                    </Box>
                    <Box component="span">
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo >
                <StyledBoxTwo  >
                    <Box>
                        <img src={Image} alt="abc" width="410.67px" height="107.8px"/>
                    </Box>
                    <Box component="span">
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo >
            </StyledContainer>
        </StyledBox>
    )
}

export default DeliveryDuration