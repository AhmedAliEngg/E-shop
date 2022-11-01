import { Box, Button, Container, Divider, Grid, List, ListItem, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
const StyledContainer = styled(Container)({
    display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledBox = styled(Box)({
    marginTop: "2rem",

})
const StyledListItem = styled (ListItem)({
    display: 'list-item',
    marginLeft:"15px",
    font: "0.9em/1.5 Effra, Arial Narrow, Arial, Helvetica, sans-serif",
    paddingTop:"0px"
})

const AboutProduct = () => {
    const [isReadMoreShown, setReadMoreShown] = useState(true)
    const togglebtn = () => {
        setReadMoreShown(prevState => !prevState)
    }
    return (
        <StyledBox>
            <StyledContainer>
                <Grid container>
                    <Grid item xs={6}>
                        <Box>
                            <Box sx={{
                                marginBottom: '2rem',
                                
                            }}>
                                <Typography variant='h5'sx={{fontWeight: 600,
                                fontFamily: "Termina Headline,Verdana,Geneva,sans-serif",
                                color: "#002955",
                                letterSpacing: 1.08}}>
                                    about the product
                                </Typography>
                            </Box>
                            <Box component='div' sx={{ textAlign: 'justify' }}>
                                <Typography sx={{ font: "0.9em/1.5 Effra, Arial Narrow, Arial, Helvetica, sans-serif",letterSpacing:"none" }}>
                                    A true classic, the Keurig K-Cup Pods Dunkin' Donuts Original Blend Coffee offers a rich, smooth,
                                    and flavorful taste that's perfect for starting any coffee lover's day.
                                    Enjoy your favorite recipe in the comfort of your home or office.
                                </Typography>
                            </Box>
                            <Box>
                                <List sx={{ listStyleType: 'disc' }}>
                                    <StyledListItem>Medium roast</StyledListItem>
                                    <StyledListItem>100% Arabica coffee</StyledListItem>
                                    <StyledListItem>For use with Keurig K-Cup Pod brewing systems</StyledListItem>
                                    <StyledListItem>Brewing process takes place inside the K-Cup Pod, so there are no coffee grinds or filters <Box sx={{font: "0.9em/1.5 Effra, Arial Narrow, Arial, Helvetica, sans-serif"}}>to clean up</Box></StyledListItem>

                                    {isReadMoreShown ?
                                        <>
                                            <StyledListItem>Makes 44 servings</StyledListItem>
                                            <StyledListItem>Serving size: 1 K-Cup</StyledListItem>
                                            <StyledListItem>Made in USA</StyledListItem>
                                            <StyledListItem>Manufactured by Keurig Green Mountain, Waterbury, VT</StyledListItem>
                                            <StyledListItem>skuId:45630903 </StyledListItem>
                                        </>
                                        : null}

                                    <Button onClick={togglebtn}variant="outlined" sx={{ width: "258px", height: "50px",textTransform:"capitalize" }}>{isReadMoreShown ? "Show less" : "Show more"}</Button>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </StyledContainer>
        </StyledBox>
    )
}

export default AboutProduct