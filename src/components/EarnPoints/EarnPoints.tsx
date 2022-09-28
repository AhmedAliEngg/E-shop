import React from 'react'
import { Box, Container, styled } from '@mui/material'
import Earn from '../../assets/Earn.webp'
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
const EarnPoints: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    <img src={Earn} height="130px" width="1280px" />
                </Box>
            </StyledContainer>
        </StyledBox>
    )
}

export default EarnPoints