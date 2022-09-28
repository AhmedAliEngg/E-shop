import { ArrowRightAlt } from '@mui/icons-material'
import { Box, Container, Divider, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
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
const ShippingReturns = () => {
    return (
        <Box>
            <StyledContainer>
                <Grid container spacing={4}>
                    <Grid item xs={10}>
                        <Box>
                            <Typography variant='h6'>
                                shipping & returns
                            </Typography>
                        </Box>
                        <Box component='div' sx={{ textAlign: 'justify' }}>
                            <Typography>
                                Please be aware we've temporarily extended our delivery time frames due to Covid 19 precautions at our facilities.
                                The extended time frames will be reflected in the estimated delivery date shown at checkout.
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='h6'>
                                Free Standard Shipping on Orders Over $39
                            </Typography>
                        </Box>
                        <Box component='div' sx={{ textAlign: 'justify' }}>
                            <Typography>
                                Free Standard Shipping with any online purchase of $39 excluding gift cards and store pick up items (merchandise subtotal is calculated before sales tax, gift wrap charges, and after any discounts or coupons).
                                Truck delivery and shipping surcharges on over-sized or extremely heavy items will still apply (these charges are indicated on the appropriate product information pages and will be displayed in the shipping subtotal of your order).
                                Products qualifying for Free Shipping will be identified with "Standard – free”.
                                If you select a shipping method other than Standard, shipping charges will apply.
                            </Typography>
                        </Box>
                    
                        <Link to="/fullshipping" >
                            <Box component="span" >
                                <Box>
                                <Typography >
                                    See Full Shipping & Returns Policy
                                </Typography>
                                </Box>
                                <Box>
                                <ArrowRightAlt/>
                                </Box>
                            </Box>
                        </Link>
                    </Grid>
                </Grid>
            </StyledContainer>
            <Container>
                <Divider/>
            </Container>
        </Box>
    )
}

export default ShippingReturns