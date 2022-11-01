import { AddShoppingCart, CardGiftcard, CreditCard, Info, KeyboardArrowDownSharp, LocalOfferOutlined, ShoppingBagOutlined, } from '@mui/icons-material';
import { Box, Container, styled, Grid, Typography, Divider, Checkbox, Button } from '@mui/material'
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
const StyledTypographyFour = styled(Typography)({
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
    marginTop: "5px",
    paddingTop: "5px"
})
const StyledButton = styled(Button)({
    width: '430.88px',
    height: '45px',
    marginTop: "4px"
})
const StyledTypography = styled(Typography)({
    margin: "10px"
})
const StyledBox = styled(Box)({
    display: "flex", 
    justifyContent: "space-evenly",
     marginTop: "10px"
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
                        <Star width="90" height="20" />
                    </Box>
                    <Box component="span">
                        <StyledTypographyFour variant='caption' sx={{ textTransform: "none" }}>
                            1036 Reviews
                        </StyledTypographyFour>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }} />
                    <Box component="span">
                        <StyledTypographyFour variant='caption' sx={{ textTransform: "none" }}>
                            Write Review
                        </StyledTypographyFour>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ borderColor: "rgba(0, 0, 0, 0.30)" }} />
                    <Box component="span">
                        <StyledTypographyFour variant='caption' sx={{ textTransform: "none" }}>
                            Q&A
                        </StyledTypographyFour>
                    </Box>
                </Box>
            </StyledContainerFour>

            <StyledContainer>
                <Grid container spacing={12} >
                    <Grid item xs={6}>
                        <Swiper
                            loop={true}
                            // spaceBetween={0.5}
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
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Box>
                                <Typography variant='h6' sx={{ color: "#e00000", fontSize: "1.325rem", fontFamily: "Termina Headline,Verdana,Geneva,sans-serif" }}>
                                    $40.00
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{ textDecoration: "line-through", fontSize: "0.85rem", margin: "5px" }}>
                                    $80.00
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption' sx={{ fontSize: "0.85rem", color: "#e00000" }}>
                                    Save $40.00 (50%)
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "end" }}>
                            <Box>
                                <LocalOfferOutlined />
                            </Box>

                            <Box component="span" >
                                <Typography variant='caption' sx={{ textDecoration: "underline", fontSize: "0.85rem" }} >
                                    Price Match Promise
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Divider />
                        </Box>
                        <Box>
                            <Typography variant='subtitle1' sx={{ fontWeight: "bolder", marginLeft: "10px" }}>
                                Sale!
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box>
                                <Typography variant='subtitle1' sx={{ marginLeft: "10px" }}>
                                    Excluded from coupons
                                </Typography>
                            </Box>
                            <Box>
                                <Info />
                            </Box>
                        </Box>

                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                            <Box>
                                <Checkbox {...label} />
                            </Box>
                            <Box>
                                <Typography variant='subtitle1' sx={{ fontWeight: "bolder" }}>
                                    Subscribe and earn 5% in My Funds
                                </Typography>
                            </Box>
                            <Box>
                                <Info />
                            </Box>
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Box sx={{ border: '1px solid #ddd', width: '160px', height: '150px' }}>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly", margin: "5px", padding: "5px" }}>
                                    <Box>
                                        <ShoppingBagOutlined />
                                    </Box>
                                    <Box>
                                        <Typography variant='caption' sx={{ fontSize: "0.85rem", fontWeight: "bolder" }}>
                                            FREE Store <Box>Pickup</Box>
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Typography variant='caption' sx={{ fontSize: "0.7rem" }}>
                                        <Box>Ready for Pickup</Box><Box>when store opens</Box>  <Box>at 10 AM</Box>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #ddd', width: '160px', height: '150px' }}>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly", margin: "5px", padding: "5px" }}>
                                    <Box>
                                        <ShoppingBagOutlined />
                                    </Box>
                                    <Box>
                                        <Typography variant='caption' sx={{ fontSize: "0.85rem", fontWeight: "bolder" }}>
                                            FREE Store <Box>Pickup</Box>
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Typography variant='caption' sx={{ fontSize: "0.7rem" }}>
                                        <Box>Ready for Pickup</Box><Box>when store opens</Box>  <Box>at 10 AM</Box>
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ border: '1px solid #ddd', width: '160px', height: '150px' }}>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly", margin: "5px", padding: "5px" }}>
                                    <Box>
                                        <ShoppingBagOutlined />
                                    </Box>
                                    <Box>
                                        <Typography variant='caption' sx={{ fontSize: "0.85rem", fontWeight: "bolder" }}>
                                            FREE Store <Box>Pickup</Box>
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                                    <Typography variant='caption' sx={{ fontSize: "0.7rem" }}>
                                        <Box>Ready for Pickup</Box><Box>when store opens</Box>  <Box>at 10 AM</Box>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ marginTop: "5px", paddingTop: "5px" }}>
                                <Typography variant='caption' sx={{ fontSize: "0.9rem", fontWeight: "bolder", marginLeft: "10px" }}>
                                    Shipping  to 07045
                                </Typography>
                            </Box>
                            <Box sx={{ marginTop: "5px", paddingTop: "5px" }}>
                                <Typography variant='caption' sx={{ fontSize: "0.7rem", textDecoration: "underline" }}>
                                    Change Zip Code
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ marginTop: "5px", paddingTop: "5px" }}>
                            <Divider />
                        </Box>
                        <StyledBoxThree component="span">
                            <Search>
                                <Button size="medium" variant="outlined" sx={{ height: '45px' }}>Qty<KeyboardArrowDownSharp /></Button>
                            </Search>
                            <Box>
                                <StyledButton variant="contained">Contained</StyledButton>
                            </Box>
                        </StyledBoxThree>
                        <StyledBox>
                            <Box>
                                <Button variant="outlined" sx={{ width: "258px", height: "50px" }}>Add to Registry</Button>
                            </Box>
                            <Box>
                                <Button variant="outlined" sx={{ width: "270px", height: "50px" }}>Add to Registry</Button>
                            </Box>
                        </StyledBox>
                        <Divider sx={{ marginTop: '15px' }} />
                        <Box sx={{display:"flex",marginTop:"10px"}}>
                            <Box>
                                <CreditCard />
                            </Box>
                            <Box>
                                <Typography variant="caption" sx={{fontWeight:"bolder",fontSize: "0.9rem"}}>
                                Get 20% off every time you shop & earn 10% back in points<Box variant="span">
                                   <Typography variant='caption'> when you are approved for Welcome Rewards credit card. No annual fee </Typography> 
                                </Box>
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Typography variant='caption' sx={{textDecoration:"underline",marginLeft:"20px"}}>
                                Apply Now
                            </Typography>
                        </Box>

                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    )
}

export default VerticalCarousel