import { Box, Container, styled, Typography } from '@mui/material'
import React from 'react'
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
const ItemFrequentlyHeading = () => {
    return (
        <Box>
            <StyledContainer>
                <Typography variant='h4' align='center' mt={2} mb={2} sx={{ color: '#002855', fontWeight: 'bold' }}> frequently bought together </Typography>
            </StyledContainer>
        </Box>
    )
}

export default ItemFrequentlyHeading