import { Box, Button, Checkbox, Container, Divider, styled, Typography } from '@mui/material'
import React from 'react'
const StyledContainer = styled(Container)({
    // display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .currColor path': {
        fill: 'white',
    }
})
const CustomerReview = () => {
    return (
        <Box>
            <StyledContainer>
                <Box display='flex' justifyContent='space-between'>
                    <Box>
                        <Box>
                            <Typography variant='h6'>
                                Customer Reviews
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>
                                Showing 8 out of 948 reviews
                            </Typography>
                        </Box>
                    </Box>
                    
                        <Box display="flex" alignItems="center">
                            <Box>
                                <Checkbox />
                            </Box>
                            <Box>
                                <Typography>
                                    ceefc
                                </Typography>
                            </Box>
                            <Box>
                                <Button variant="outlined">sadsa</Button>
                            </Box>
                            <Box>
                                <Button variant="outlined">sadsa</Button>
                            </Box>
                        </Box>
                </Box>
            </StyledContainer>
            <StyledContainer>
                <Divider/>
            </StyledContainer>
        </Box>
    )
}

export default CustomerReview