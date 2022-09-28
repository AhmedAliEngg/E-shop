import { Box, Container, Grid, styled } from '@mui/material'
import React from 'react'
import Image from '../../../assets/coffee.jpeg'
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
const GalleryImage = () => {
    return (
        <Box>
            <StyledContainer>
                <Grid container spacing={2} sx={{marginTop:'10px'}}>
                    <Grid item xs={8}>
                        <Box sx={{display:'flex',justifyContent:'space-around'}}>
                            <Box sx={{border:'1px solid #ddd', width:'190px' , height:'185px'}}>
                                <img src={Image} width='176px' height='176px' style={{paddingLeft:'7.8px'}} />
                            </Box>
                            <Box sx={{border:'1px solid #ddd', width:'190px' , height:'185px'}}>
                                <img src={Image} width='176px' height='176px'  style={{paddingLeft:'7.8px'}} />
                            </Box>
                            <Box sx={{border:'1px solid #ddd', width:'190px' , height:'185px'}}>
                                <img src={Image} width='176px' height='176px'  style={{paddingLeft:'7.8px'}} />
                            </Box>
                            <Box sx={{border:'1px solid #ddd', width:'190px' , height:'185px'}}>
                                <img src={Image} width='176px' height='176px'  style={{paddingLeft:'7.8px'}} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </Box>
    )
}

export default GalleryImage