import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
import Image from "../../assets/TopCategories.webp"
import Hallo from '../../assets/Hallo.webp'
import Appliance from '../../assets/Appliance.webp'
const StyledBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    flexDirection: "column"
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
const StyledTypography = styled(Typography)({
    fontWeight: 300,
    fontSize: "0.85rem",

})
const StyledBoxTwo = styled(Box)({
    display: 'flex',
    flexDirection: "column",
    margin: '4px',
    padding: '15px'
})
const StyledBoxThree = styled(Box)({
    marginTop: '5px',
    textAlign: 'center'
})
const TopCategories: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo>
                    <Box>
                        <img src={Hallo} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>halloween</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo sx={{ display: 'flex', flexDirection: "column", margin: '4px' }}>
                    <Box>
                        <img src={Appliance} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>small appliance</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span">
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
            </StyledContainer>
            <StyledContainer>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo sx={{ display: 'flex', flexDirection: "column", margin: '4px' }}>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span">
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
            </StyledContainer>
            <StyledContainer>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo sx={{ display: 'flex', flexDirection: "column", margin: '4px' }}>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span" >
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Image} alt="abc" width="170.5" height="170.5" />
                    </Box>
                    <StyledBoxThree component="span">
                        <StyledTypography variant='caption'>father's day</StyledTypography>
                    </StyledBoxThree>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default TopCategories