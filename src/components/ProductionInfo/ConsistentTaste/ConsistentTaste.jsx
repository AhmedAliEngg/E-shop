import { CheckCircleOutlineOutlined } from '@mui/icons-material'
import { Box, CircularProgress, Container, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import { ReactComponent as Star } from '../../../assets/star.svg'
const StyledContainer = styled(Container)({
    // display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    padding: "1px 0",
    border: '2px solid #d6d6d6',
    borderRadius: '4px',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .currColor path': {
        fill: 'white',
    }
})
const ConsistentTaste = () => {
    return (
        <Box mt={3}>
            <StyledContainer>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Box p={1}>
                            <Typography variant='h6'>
                                Consistent taste and flavor
                            </Typography>
                        </Box>
                        <Box component='span' display='flex' p={1}>
                            <Typography>
                                Bobbyd
                            </Typography>
                            <Typography>
                                -
                            </Typography>
                            <Typography>
                                1 week ago
                            </Typography>
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
                            <Typography>
                                Been using Dunkin Donut coffee for years. Especially enjoy the original blend.
                            </Typography>
                        </Box>
                    </Box>
                    <Box display='flex' justifyContent='space-between'>
                        <Box>
                            <Box mr='15px'>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                    <Typography position='absolute'>{85}%</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>
                                    Quality
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Box display='flex' justifyContent='space-between' alignItems='center'>
                                    <CircularProgress variant='determinate' value={85} style={{ width: "40px", height: '52px' }} />
                                    <Typography position='absolute'>{85}%</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Typography>
                                    Quality
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                </Box>
                <Container>
                <Box>
                    <Divider />
                </Box>
                </Container>
                <Box p={1}>
                    <Typography>
                        Originally posted on keurig.com
                    </Typography>
                </Box>
            </StyledContainer>
        </Box>
    )
}

export default ConsistentTaste