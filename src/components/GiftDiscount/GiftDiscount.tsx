import { Box, Container, styled } from '@mui/material'
import React from 'react'
import Image from '../../assets/GiftDiscount.webp'
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
const GiftDiscount: React.FC = () => {
  return (
    <StyledBox>
    <StyledContainer>
        <Box >
            <Box>
                <img src={Image} alt="abc" />
            </Box>
        </Box>
        <Box >
            <Box>
                <img src={Image} alt="abc" />
            </Box>
        </Box>
        <Box >
            <Box>
                <img src={Image} alt="abc" />
            </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: "column", margin: '4px' }}>
            <Box>
                <img src={Image} alt="abc" />
            </Box>
        </Box>
    </StyledContainer>
</StyledBox>
  )
}

export default GiftDiscount