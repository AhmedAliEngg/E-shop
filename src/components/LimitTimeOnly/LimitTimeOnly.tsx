import React from 'react'
import { Box, Container, styled } from '@mui/material'
import LimitTime from '../../assets/LimitTime.webp'
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
const LimitTimeOnly: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    <img src={LimitTime} height="350px" width="1280px" />
                </Box>
            </StyledContainer>
        </StyledBox>
    )
}

export default LimitTimeOnly