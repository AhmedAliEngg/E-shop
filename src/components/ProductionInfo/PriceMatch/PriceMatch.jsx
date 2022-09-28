import React from 'react'
import { Box, Container, Divider, Grid, styled, Typography } from '@mui/material'
const StyledContainer = styled(Container)({
    display: " flex",
    justifyContent: 'center',
    alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const PriceMatch = () => {
  return (
    <Box>
    <StyledContainer>
        <Grid container spacing={4}>
            <Grid item xs={10}>
                <Box>
                    <Typography variant='h6'>
                             price match promise
                    </Typography>
                </Box>
                <Box component='div' sx={{ textAlign: 'justify' }}>
                    <Typography>
                        Please be aware we've temporarily extended our delivery time frames due to Covid 19 precautions at our facilities.
                        The extended time frames will be reflected in the estimated delivery date shown at checkout.
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </StyledContainer>
    <Container>
        <Divider/>
    </Container>
</Box>
  )
}

export default PriceMatch