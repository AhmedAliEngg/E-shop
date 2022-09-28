import React from 'react'
import { Box, Container, styled } from '@mui/material'
import Welcome from '../../assets/Welcome.webp'
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
const WelcomeRewards:React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo >
                    <Box>
                        <img src={Welcome} alt="abc" />
                    </Box>
                </StyledBoxTwo>
                <StyledBoxTwo>
                    <Box>
                        <img src={Welcome} alt="abc" />
                    </Box>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default WelcomeRewards