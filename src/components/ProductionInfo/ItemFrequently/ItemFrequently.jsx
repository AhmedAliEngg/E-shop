import { AddShoppingCart } from '@mui/icons-material'
import { Box, Button, Checkbox, Container, Divider, Grid, Rating, styled, Typography } from '@mui/material'
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
    const [value, setValue] = React.useState(5)
    return (
        <StyledContainer>
            <Grid container spacing={4}>
                <Grid item xs={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <img src={Image} alt="abc" width="140px" height="140px" />
                        </Box>


                        <Box>
                            <Plus />
                        </Box>
                        {/* <Box>
                            <img src={Image} alt="abc" width="140px" height="140px" />
                        </Box>
                        <Box>
                            <Plus />
                        </Box>
                        <Box>
                            <img src={Image} alt="abc" width="140px" height="140px" />
                        </Box> */}
                    </Box>
                    <Box>
                        <Box sx={{ display: "flex", alignItems: 'baseline' }}>
                            <Box>
                                <Checkbox {...label} defaultChecked />
                            </Box>
                            <Box>
                                <Typography>
                                    $34.99
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ visibility: "hidden" }}>cdcsd</Box>
                            <Box>
                                <Typography>
                                    (Current Item):
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ visibility: "hidden" }}>cdcsd</Box>
                            <Box>
                                <Typography>
                                    Dunkin' Donuts®
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                            <Box sx={{ visibility: "hidden" }}>cdcsd</Box>
                            <Box>
                                <Typography sx={{
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    width: "106px",
                                    overflow: "hidden",
                                }}>
                                    Decaf Coffee Keurig® K-Cup® Pods 44-Count
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                        <Box sx={{ visibility: "hidden" }}>cdcsd</Box>
                        <Box>
                            <Rating name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }} />
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
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
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