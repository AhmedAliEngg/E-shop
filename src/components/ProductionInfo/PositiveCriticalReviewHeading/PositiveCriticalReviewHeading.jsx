import { CheckCircle, CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Box, CircularProgress, Container, Divider, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Star } from '../../../assets/star.svg'
const StyledContainer = styled(Container)({
    display: " flex",
    justifyContent: 'center',
    alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .currColor path': {
        fill: 'white',
    }
})
const PositiveCriticalReviewHeading = () => {
    return (
        <Box>
            <StyledContainer>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h6'>
                                Most Helpful Positive Review
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography variant='h6'>
                                Most Helpful Positive Review
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ backgroundColor: '#f7f7f8' }} maxHeight="310px">
                            <Box>
                                <Typography variant='h6'>
                                    This is my favorite!
                                </Typography>
                            </Box>
                            <Box display="flex">
                                <Box component='span' p={1}>
                                    <Typography>
                                        Momatree48
                                    </Typography>
                                </Box>
                                <Box component='span' p={1}>
                                    <Typography>
                                        4 years ago
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box component='span' p={1}>
                                    <Star />
                                </Box>
                                <Box component='span' p={1}>
                                    <Box display='flex' alignItems='center'>
                                        <CheckCircleOutlineOutlined />
                                        <Typography>
                                            4 years ago
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box p={1}>
                                <Typography textAlign='justify'>
                                    I have tried many different blends of coffee and this one is definitely my favorite!
                                    It has a great smooth flavor and I drink it throughout the day.
                                    Yes I am a real coffee lover!
                                </Typography>
                            </Box>
                            {/* <Box padding='15px'>
                                <Divider />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                    <Typography position='absolute'>{85}%</Typography>
                                </Box>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                    <Typography position='absolute'>{85}%</Typography>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Box>
                                    <Typography>
                                        assasa
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography>
                                        assasa
                                    </Typography>
                                </Box>
                            </Box> */}
                        </Box>
                    </Grid>
                    <Grid item xs={6} >
                        <Box sx={{ backgroundColor: '#f7f7f8' }} maxHeight="310px">
                            <Box>
                                <Typography variant='h6'>
                                    This is my favorite!
                                </Typography>
                            </Box>
                            <Box display="flex">
                                <Box component='span' p={1}>
                                    <Typography>
                                        Momatree48
                                    </Typography>
                                </Box>
                                <Box component='span' p={1}>
                                    <Typography>
                                        4 years ago
                                    </Typography>
                                </Box>
                            </Box>
                            <Box display="flex">
                                <Box component='span' p={1}>
                                    <Star />
                                </Box>
                                <Box component='span' p={1}>
                                    <Box display='flex' alignItems='center'>
                                        <CheckCircleOutlineOutlined />
                                        <Typography>
                                            4 years ago
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box p={1}>
                                <Typography textAlign='justify'>
                                    I have tried many different blends of coffee and this one is definitely my favorite!
                                    It has a great smooth flavor and I drink it throughout the day.
                                    Yes I am a real coffee lover!
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </StyledContainer>
        </Box>
    )
}

export default PositiveCriticalReviewHeading