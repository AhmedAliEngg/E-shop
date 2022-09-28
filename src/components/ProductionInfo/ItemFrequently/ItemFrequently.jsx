import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, Divider, Grid, styled, Typography } from '@mui/material'
import React from 'react'
import Image from '../../../assets/CarouselImage.webp'
import { ReactComponent as Plus } from "../../../assets/plus.svg"
const StyledContainer = styled(Container)({
    display: " flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const ItemFrequently = () => {
    return (
        <StyledContainer>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <img src={Image} alt="abc" width="95px" height="95px" />
                        </Box>
                        <Box>
                            <Plus />
                        </Box>
                        <Box>
                            <img src={Image} alt="abc" width="95px" height="95px" />
                        </Box>
                        <Box>
                            <Plus />
                        </Box>
                        <Box>
                            <img src={Image} alt="abc" width="95px" height="95px" />
                        </Box>
                        <Box>
                            <Plus />
                        </Box>
                        <Box>
                            <img src={Image} alt="abc" width="95px" height="95px" />
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'baseline' }}>
                        <Box>
                            <Checkbox {...label} defaultChecked />
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'baseline' }}>
                        <Box>
                            <Checkbox {...label} defaultChecked />
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'baseline' }}>
                        <Box>
                            <Checkbox {...label} defaultChecked />
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: 'baseline' }}>
                        <Box>
                            <Checkbox {...label} defaultChecked />
                        </Box>
                        <Box>
                            <Typography variant='body1' gutterBottom>
                                Dunkin' Donuts® Original Blend Coffee Keurig® K-Cup® Pods 22-Count
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Divider sx={{ width: "340px" }} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'space-around' }}>
                        <Box>
                            <Typography variant='caption'>
                                Subtotal
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle2'>
                                $85.96
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Button sx={{ width: '340px', height: "50px", background: 'blue', color: 'white' }}>Add To Cart</Button>
                    </Box>
                    <Box sx={{ display: "flex",justifyContent: "center"}}>
                        <AddShoppingCart />
                        <Typography>
                            Add to Shopping List
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </StyledContainer>
    )
}

export default ItemFrequently