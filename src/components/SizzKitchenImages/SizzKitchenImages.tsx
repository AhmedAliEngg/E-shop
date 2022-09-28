import { styled, Box, Container, Typography } from '@mui/material'
import React from 'react'
import Image from "../../assets/HelloIMG1654582411132.jpeg"
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: 'flex',
    alignItems: "center",
    paddingTop: '5px',
    // flexDirection: "column",
    justifyContent:"center",
    //margin:'4px',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
        padding:0
    },
})
const StyledTypography = styled(Typography)({
    color: "#1A4E8A",
    font: "var(--story-tile-head-font-DSK)",
    fontWeight: 700,
    fontSize:'20px',
    marginLeft:'15px'
})
const SizzKitchenImages: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box >
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}} >
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </Box>
                <Box >
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </Box>
                <Box >
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <img src={Image} alt="abc" />
                    </Box>
                    <Box component="span" sx={{width:'50%',}}>
                        <StyledTypography variant='h6'>select Ninja® appliances</StyledTypography>
                    </Box>
                </Box>
            </StyledContainer>
        </StyledBox>
    )
}

export default SizzKitchenImages