import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/HomeItems.webp'
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: "center",
    paddingTop: '5px',
    // flexDirection: "column",
    justifyContent: "center",
    //margin:'4px',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
        padding: 0
    },
})
const StyledBoxTwo = styled(Box)({
    padding: '12px'
})
const StyledTypography = styled(Typography)({
    color: "#1A4E8A",
    font: "var(--story-tile-head-font-DSK)",
    fontWeight: 700,
    fontSize:'20px',
    marginLeft:'15px'
})
const HomeItems: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="302" height="302" />
                    </Box>
                    <Box component="span" >
                        <StyledTypography variant='h6'>select small appliances</StyledTypography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="302" height="302" />
                    </Box>
                    <Box component="span" >
                        <StyledTypography variant='h6'>select cookware</StyledTypography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="302" height="302" />
                    </Box>
                    <Box component="span" >
                        <StyledTypography variant='h6'>select food storage</StyledTypography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" width="302" height="302" />
                    </Box>
                    <Box component="span" >
                        <StyledTypography variant='h6'>select food storage</StyledTypography>
                    </Box>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default HomeItems