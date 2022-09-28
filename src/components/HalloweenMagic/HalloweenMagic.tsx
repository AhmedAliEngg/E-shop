import React from 'react'
import { Box, Container, styled } from '@mui/material'
import Magic from "../../assets/Magic.webp"
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
const HalloweenMagic: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    <img src={Magic} height="300px" width="1280px" />
                </Box>
            </StyledContainer>
        </StyledBox>
    )
}

export default HalloweenMagic