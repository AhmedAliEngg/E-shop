import React from 'react'
import { Box, Container, Divider, styled, Typography } from '@mui/material';
import Image from "../../../assets/CarouselImage.webp"
import { ReactComponent as Star } from '../../../assets/star.svg'
import { Link } from 'react-router-dom'
const StyledBox = styled(Box)({

})
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
const items = [
    { id: 1, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    { id: 2, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    { id: 3, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    { id: 4, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    { id: 5, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    //     { id: 6, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    //     { id: 7, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 },
    //     { id: 8, title: '$29,59', text1: ' Keurig® K-Cup® Pod', text2: 'Wood & Wire Carousel', rating: 257 }
]
const RecentlyView = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Typography variant='h4' align='center' mt={2} mb={2} sx={{ color: '#002855', fontWeight: 'bold' }}> sizzling kitchen deals </Typography>
            </StyledContainer>
            <StyledContainer>
                {items.map((item) => (
                    <Link to="/productinfo" style={{ textDecoration: "none" }}>
                        <Box sx={{
                            border: '0.5px solid #d6d6d6',
                            borderRadius: '0.5rem', padding: '5px', margin: '15px'
                        }} key={item.id}>
                            <Box>
                                <img src={Image} alt="abc" width="173px" height="173px" />
                            </Box>
                            <Box component="span" >
                                <Typography variant='h6'>{item.title}</Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption'> {item.text1} </Typography>
                            </Box>
                            <Box>
                                <Typography variant='caption'>{item.text2}</Typography>
                            </Box>
                            <Box >
                                <Star />
                                <Typography component="body1" variant='caption'>{item.rating}</Typography>
                            </Box>
                        </Box>
                    </Link>
                ))}
            </StyledContainer>
            <Container>
                <Divider />
            </Container>
        </StyledBox>
    )
}

export default RecentlyView