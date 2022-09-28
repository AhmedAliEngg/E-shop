import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from '../../assets/NewMailer.webp'
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: " flex",
    //flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledBoxTwo = styled(Box)({
    padding: '10px'
})
const StyledTypography = styled(Typography)({
    color: "#1A4E8A",
    font: "var(--story-tile-head-font-DSK)",
    fontWeight: 700,
    fontSize: '20px',
    marginLeft: '15px'
})
const NewMailerImages: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo >
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span">
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                    <Box component="span">
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span" >
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                    <Box component="span">
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default NewMailerImages