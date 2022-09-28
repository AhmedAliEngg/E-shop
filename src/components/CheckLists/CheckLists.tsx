import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/CheckLists.webp'
const StyledBox = styled(Box)({

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
const CheckLists: React.FC = () => {
  return (
    <StyledBox>
        <StyledContainer>
        <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="628" height="355.2" />
                    </Box>
                    <Box component="span">
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="628" height="355.2"/>
                    </Box>
                    <Box component="span" >
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
        </StyledContainer>
    </StyledBox>
  )
}

export default CheckLists