import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from "../../assets/HomeGlossary.jpeg"
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: " flex",
    // flexDirection: "column",
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
const HomeGlossary: React.FC = () => {
  return (
    <StyledBox>
            <StyledContainer>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="203.33" height="203.33"/>
                    </Box>
                    <Box component="span" sx={{width:'50%', }}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="203.33" height="203.33"/>
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="203.33" height="203.33"/>
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc"width="203.33" height="203.33" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="203.33" height="203.33" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="203.33" height="203.33" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <Typography variant='h6'>select Ninja® appliances</Typography>
                    </Box>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
  )
}

export default HomeGlossary