import React from 'react'
import { Box, Container, Divider, Grid, styled, Typography, CircularProgress, LinearProgress, Button } from '@mui/material'
import { ReactComponent as Star } from '../../../assets/star.svg'
import PropTypes from 'prop-types';
import { ReactComponent as Percent } from '../../../assets/percent.svg'
import { ReactComponent as PercentOne } from '../../../assets/percentOne.svg'
import { StarPurple500Sharp } from '@mui/icons-material'
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

const RatingReview = () => {
    const [progress, setProgress] = React.useState(85);


    return (
        <Box>
            <StyledContainer>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Box>
                            <Typography variant='h6'>
                                price match promise
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle1'>
                                Ratings Snapshot
                            </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                            <Box>
                                <Typography variant='h6' sx={{ fontSize: '3.25rem' }}>
                                    4.4
                                </Typography>
                            </Box>
                            <Box>
                                <Star />
                                <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <Box>
                                        <Typography>
                                            xsx
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            axsax
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Box display='flex' justifyContent='center' alignItems='center'>
                                <CircularProgress variant='determinate' value={85} style={{ width: "60px", height: '60px' }} />
                                <Typography position='absolute'>{85}%</Typography>
                            </Box>
                            <Box>
                                <Typography>
                                    cdefe
                                </Typography>
                                <Typography>
                                    cdefe
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ marginTop: '4.5pc' }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>5</Typography>
                            </Box>
                            <Box>
                                <StarPurple500Sharp fontSize='small' />
                            </Box>
                            <Box>
                                <LinearProgress variant="determinate" value={75} style={{ width: "250px", height: '20px' }} />
                            </Box>
                            <Box>
                                <Typography>732</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>5</Typography>
                            </Box>
                            <Box>
                                <StarPurple500Sharp fontSize='small' />
                            </Box>
                            <Box>
                                <LinearProgress variant="determinate" value={75} style={{ width: "250px", height: '20px' }} />
                            </Box>
                            <Box>
                                <Typography>732</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>5</Typography>
                            </Box>
                            <Box>
                                <StarPurple500Sharp fontSize='small' />
                            </Box>
                            <Box>
                                <LinearProgress variant="determinate" value={75} style={{ width: "250px", height: '20px' }} />
                            </Box>
                            <Box>
                                <Typography>732</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>5</Typography>
                            </Box>
                            <Box>
                                <StarPurple500Sharp fontSize='small' />
                            </Box>
                            <Box>
                                <LinearProgress variant="determinate" value={75} style={{ width: "250px", height: '20px' }} />
                            </Box>
                            <Box>
                                <Typography>732</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex' }}>
                            <Box>
                                <Typography>5</Typography>
                            </Box>
                            <Box>
                                <StarPurple500Sharp fontSize='small' />
                            </Box>
                            <Box>
                                <LinearProgress variant="determinate" value={75} style={{ width: "250px", height: '20px' }} />
                            </Box>
                            <Box>
                                <Typography>732</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ marginTop: '4.5pc' }}>
                        <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                <Typography position='absolute'>{85}%</Typography>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                <Typography position='absolute'>{85}%</Typography>
                            </Box>
                        </Box>
                        <Box  sx={{display:'flex',justifyContent:'space-evenly'}}>
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
                        </Box>
                        <Box sx={{display:"flex", justifyContent:'center'}}>
                        <Button variant="outlined" sx={{width:"80%",height:"45px"}}>Primary</Button>
                        </Box>

                    </Grid>
                </Grid>
            </StyledContainer>
            
        </Box>
    )
}

export default RatingReview