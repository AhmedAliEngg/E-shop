import { AddShoppingCart, CardGiftcard, KeyboardArrowDown } from '@mui/icons-material';
import { Box, Container, styled, Grid, Typography, Divider, Checkbox, Radio, InputBase, Button } from '@mui/material'
import React, { useState } from 'react'
import Image from '../../../assets/CarouselImage.webp'
import { ReactComponent as Star } from '../../../assets/star.svg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs, Zoom, Pagination } from "swiper";
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
const StyledContainerOne = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    marginTop: "20px",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
})
const StyledContainerTwo = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    marginTop: "20px",
    //padding: "1px 0",
    textTransform: "uppercase",
    '&.MuiContainer-root': {
        paddingLeft: "8px",
        paddingRight: 0,

    },
})
const StyledContainerThree = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    //marginTop: "20px",
    //padding: "1px 0",
    textTransform: "uppercase",
    '&.MuiContainer-root': {
        paddingLeft: "7px",
        paddingRight: 0,

    },
})
const StyledContainerFour = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    //marginTop: "20px",
    //padding: "1px 0",
    textTransform: "uppercase",
    '&.MuiContainer-root': {
        paddingLeft: "6px",
        paddingRight: 0,

    },
})
const StyledTypographyTwo = styled(Typography)({
    fontSize: ".65rem",
    fontFamily: "Termina Headline,Verdana,Geneva,sans-serif",
    fontWeight: 600,
    textDecoration: "underline",
    color: "#1377C9",
})
const StyledTypographyThree = styled(Typography)({
    fontWeight: 300,
    fontSize: "1.2rem",
    textTransform: "none",
    letterSpacing: "0.0005em"
})
const StyledTypographyFour = styled (Typography)({
    margin: "10px",
    textDecoration: "underline",
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
})
const StyledButton = styled(Button)({
    width: '280.88px',
    height: '50px'
})
const StyledTypography = styled(Typography)({
    margin: "10px"
})
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const VerticalCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <Box>
            <StyledContainerOne>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                    <Box component="span">
                        <StyledTypography variant='caption'>
                            Home
                        </StyledTypography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }} />
                    <Box component="span">
                        <StyledTypography variant='caption'>
                            Shops
                        </StyledTypography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }} />
                    <Box component="span">
                        <StyledTypography variant='caption'>
                            Fall Shop
                        </StyledTypography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }} />
                    <Box component="span">
                        <StyledTypography variant='caption'>
                            Fall Decor
                        </StyledTypography>
                    </Box>
                </Box>
            </StyledContainerOne>

            <StyledContainerTwo>
                <Box component="span">
                    <StyledTypographyTwo variant='caption'> shop Bee & Willow Home </StyledTypographyTwo>
                </Box>
            </StyledContainerTwo>

            <StyledContainerThree>
                <Box>
                    <StyledTypographyThree variant='h6' >
                        Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                    </StyledTypographyThree>
                </Box>
            </StyledContainerThree>

            <StyledContainerFour>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component="span">
                    <Star width="90" height="20"/>
                    </Box>
                    <Box component="span">
                    <StyledTypographyFour variant='caption' sx={{textTransform:"none"}}>
                        1036 Reviews
                    </StyledTypographyFour>
                    </Box>
                    <Divider orientation="vertical" flexItem  sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }}/>
                    <Box component="span">
                    <StyledTypographyFour  variant='caption' sx={{textTransform:"none"}}>
                        Write Review
                    </StyledTypographyFour>
                    </Box>
                    <Divider orientation="vertical" flexItem  sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }}/>
                    <Box component="span">
                    <StyledTypographyFour  variant='caption' sx={{textTransform:"none"}}>
                        Q&A
                    </StyledTypographyFour>
                    </Box>
                </Box>
            </StyledContainerFour>

            <StyledContainer>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Swiper
                            loop={true}
                            spaceBetween={1}
                            navigation={true}
                            zoom={true}
                            pagination={{
                                clickable: true,
                            }}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[Zoom, FreeMode, Navigation, Thumbs, Pagination]}
                        >
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box className="swiper-zoom-container">
                                    <img src={Image} alt="abc" width="524.19px" height="524.19px" />
                                </Box>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                        >
                            <SwiperSlide>
                                <img src={Image} alt="abc" width="88.83px" height="92px" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={Image} alt="abc" width="88.83px" height="92px" />
                            </SwiperSlide>
                        </Swiper>
                    </Grid>

                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h6'>
                                Dunkin' Donuts
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