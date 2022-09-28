import React from 'react'
import { Box, Container, styled, Typography } from '@mui/material'
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
    textAlign:"center",
    display:'block,'
})
const StyledTypography = styled(Typography)({
    
})
const ExculsiveInfo: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <StyledBoxTwo>
                    <StyledTypography variant='body2'>
                        Exclusions apply. Welcome Rewards™+ is not available in AK, HI, or PR. Valid at Bed Bath & Beyond®, buybuy BABY®, Harmon® stores, and online. Welcome Rewards™+ membership will auto-renew annually for $29.
                    </StyledTypography>
                </StyledBoxTwo>
            </StyledContainer>
        </StyledBox>
    )
}

export default ExculsiveInfo