import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
const StyledContainer = styled(Container)({
    display: 'flex',
    justifyContent: 'space-between',
    background:'white',
  
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop:'5px',
        paddingBottom:'5px'
    },

})
const StyledBox = styled(Box)({
    borderBottom:'1px solid ',
    // position:'fixed'
})
const NavBarBottom: React.FC = () => {
  return (
      <StyledBox>
    <StyledContainer>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                bedding
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                bath
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                kitchen
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                dining
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                storage&cleaning
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                curtains&window
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                home decor
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}} >
            <Typography>
                baby & kids
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                outdoor
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                furniture
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                luggage pet & more
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                health & beauty
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                gifts
            </Typography>
        </Box>
        <Box component="span" sx={{padding:'2px'}}>
            <Typography>
                shop by brand
            </Typography>
        </Box>
    </StyledContainer>
    </StyledBox>
  )
}

export default NavBarBottom