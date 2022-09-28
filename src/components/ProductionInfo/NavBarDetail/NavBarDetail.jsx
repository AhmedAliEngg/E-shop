import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
const StyledContainer = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledBox = styled(Box)({
    backgroundColor: '#f7f7f8',
    marginTop:"2rem",
    paddingTop:'2.5rem'
})
const NavBarDetail = () => {
  return (
   <StyledBox>
       <StyledContainer>
       <Box component="span" sx={{padding:'2px',marginRight:'10px'}}>
            <Typography>
                bedding
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px',marginRight:'10px'}}>
            <Typography>
                bath
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px',marginRight:'10px'}}>
            <Typography>
                kitchen
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px',marginRight:'10px'}}>
            <Typography>
                dining
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                storage&cleaning
            </Typography>
        </Box>
       </StyledContainer>
   </StyledBox>
  )
}

export default NavBarDetail