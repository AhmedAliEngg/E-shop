import { Box, Container, styled, Typography } from '@mui/material';
import React from 'react'
import Image from "../../../assets/CarouselImage.webp"
import { ReactComponent as Star } from '../../../assets/star.svg'
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom'
const StyledBox = styled(Box)({

})
const StyledContainer = styled(Container)({
    display: " flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: '#f7f7f8',
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledContainerOne = styled(Container)({
    display: " flex",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: '#f7f7f8',
    paddingBottom: "20px",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledImageBox = styled(Box)({
    display: "flex",
    justifyContent: "center",
    paddingTop: "15px",

})
const StyledTypography = styled (Typography)({
    fontSize: "16px",
    lineHeight: "1.2",
    fontFamily: "Effra,Arial Narrow,Arial,Helvetica,sans-serif",
    fontWeight: 600,
    color: "black",
    marginTop:"10px"
})
const items = [
    { id: 1, title: '$34.99', text1: ' Dunkin Donuts® Decaf ',text2:"Coffee Value Pack Keurig® K-Cup® Pods 44-Count"},
    { id: 2, title: '$34.99', text1: ' Dunkin Donuts® Decaf ',text2:"Coffee Value Pack Keurig® K-Cup® Pods 44-Count"},
    { id: 3, title: '$22.99', text1: ' Dunkin Donuts® Decaf ',text2:"Coffee Value Pack Keurig® K-Cup® Pods 44-Count"},
    { id: 4, title: '$22.99', text1: ' Dunkin Donuts® Decaf ',text2:"Coffee Value Pack Keurig® K-Cup® Pods 44-Count" },

]
const Rated4Stars = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    
                    <Typography variant='h4'
                     align='center' 
                     mt={2} mb={2} 
                     sx={{ color: '#002855', fontWeight: 'bold', textTransform: "lowercase" }}> 
                     Part of a Collection (4 items) 
                     </Typography>
                     </Box>
                     <Box>
                    <Typography align='right' sx={{
                        fontWeight: 600,
                        fontFamily: "Termina Headline,Verdana,Geneva,sans-serif",
                        color: "#002955",
                        letterSpacing: 1
                    }}>Shop the Collection
                    </Typography>
                    
                </Box>
            </StyledContainer>
            <StyledContainerOne>

                {items.map((item) => (
                    <Link to="/productinfo" style={{ textDecoration: "none" }}>
                        <Box sx={{
                            border: '0.5px solid #d6d6d6',
                            borderRadius: '0.5rem', padding: '5px', margin: '2px',
                            backgroundColor: "white",
                            padding: "0px 16px 16px",
                            backgroundColor: "#ffffff",
                            margin: "15px"
                        }} key={item.id}>
                            <StyledImageBox>
                                <img src={Image} alt="abc" width="173px" height="173px" />
                            </StyledImageBox>
                            <Box>
                                <StyledTypography variant='h6'>{item.title}</StyledTypography>
                            </Box>
                            <Box>
                                <Typography variant='caption'> {item.text1} </Typography>
                            </Box>
                            <Box sx={{
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                width: "175px",
                                overflow: "hidden",
                                marginBottom: "30px"
                            }}>
                                <Typography variant='caption'>{item.text2}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </StyledContainerOne>
        </StyledBox>
    )
}

export default Rated4Stars