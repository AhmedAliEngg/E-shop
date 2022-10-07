import { AddShoppingCart, CardGiftcard, KeyboardArrowDown } from '@mui/icons-material';
import { Box, Container, styled, Grid, Typography, Divider, Checkbox, Radio, InputBase, Button } from '@mui/material'
import React from 'react'
import Carousel, { consts } from 'react-elastic-carousel';
import Image from '../../../assets/CarouselImage.webp'
import { ReactComponent as Star } from '../../../assets/star.svg'
import { ReactComponent as Disabled } from '../../../assets/disable.svg'
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
const Search = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '5px 10px',
    display: 'flex',
    width: '30%',


}))
const StyledBoxThree = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    // width: '50%'
})
const StyledButton = styled(Button)({
    width: '280.88px',
    height: '50px'
})
const breakPoints = [
    { width: 1, itemsToShow: 4, itemsToScroll: 4 },
    // { width: 1200, itemsToShow: 4 }
];
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const VerticalCarousel = () => {
    return (
        <Box>
            <StyledContainer>
                <Grid container spacing={2} >
{/* 
                    <Carousel
                        pagination={false}
                        showArrows={false}
                        breakPoints={breakPoints}
                        verticalMode
                        itemPosition={consts.START} > */}
                        <Grid item xs={6}>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ marginTop: '5px' }}>
                                    <Box>
                                        <img src={Image} alt="abc" width="88.83px" height="92px" />
                                    </Box>
                                    <Box>
                                        <img src={Image} alt="abc" width="88.83px" height="92px" />
                                    </Box>
                                    <Box>
                                        <img src={Image} alt="abc" width="88.83px" height="92px" />
                                    </Box>
                                    <Box>
                                        <img src={Image} alt="abc" width="88.83px" height="92px" />
                                    </Box>
                                    <Box>
                                        <img src={Image} alt="abc" width="88.83px" height="92px" />
                                    </Box>
                                </Box>
                                <Box>
                                    <Box>
                                        <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    {/* </Carousel> */}

                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h6'>
                                Dunkin' Donuts
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                            <Star />
                            <Typography>
                                1036 Reviews
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Typography>
                                Write Review
                            </Typography>
                            <Divider orientation="vertical" flexItem />
                            <Typography>
                                Q&A
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom>
                                $19.99
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Typography variant='caption' gutterBottom>
                                Enjoy these
                            </Typography>
                            <Box component='span'>
                                <Typography variant='subtitle1' gutterBottom sx={{ lineHeight: 1.08 }}>
                                    $19.99
                                </Typography>
                            </Box>
                            <Typography variant='caption' gutterBottom>
                                payment options
                            </Typography>
                            <KeyboardArrowDown />
                        </Box>
                        <Box>
                            <Divider />
                        </Box>
                        <Box>
                            <Typography variant='subtitle1'>
                                $23 Keurig K-Cup Pods for 36-48ct value packs
                            </Typography>
                            {/* <Disabled/> */}
                        </Box>
                        <Box>
                            <Typography variant='subtitle1'>
                                Free Shipping on Orders Over $39
                            </Typography>
                            {/* <Disabled/> */}
                        </Box>
                        <Box sx={{ backgroundColor: '#f7f7f8' }}>
                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                <Checkbox {...label} />
                                <Typography variant='subtitle1'>
                                    Subscribe and earn 5% in My Funds
                                </Typography>
                            </Box>


                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                <Radio />
                                <Typography variant='subtitle1'>
                                    FREE Store Pickup  Nearby  Watchung
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>


                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                <Radio />
                                <Typography variant='subtitle1'>
                                    FREE Store Pickup  Nearby  Watchung
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>


                            <Box sx={{ display: "flex", alignItems: 'center' }}>
                                <Radio />
                                <Typography variant='subtitle1'>
                                    FREE Store Pickup  Nearby  Watchung
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', marginLeft: "2.499rem" }}>
                                <Typography variant='caption'>
                                    Ready for Pickup when store opens at 10 AM
                                </Typography>
                            </Box>
                            <StyledBoxThree component="span">
                                <Search>
                                    <Button>Qty</Button>
                                </Search>
                                <Box>
                                    <StyledButton variant="contained">Contained</StyledButton>
                                </Box>
                            </StyledBoxThree>
                            <Divider sx={{ marginTop: '15px' }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: '15px' }}>
                                <Box sx={{ display: "flex" }}>
                                    <CardGiftcard />
                                    <Typography>
                                        Add to Registry
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex" }}>
                                    <AddShoppingCart />
                                    <Typography>
                                        Add to Shopping List
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    )
}

export default VerticalCarousel