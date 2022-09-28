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
                            <Box sx={{ marginBottom: '2rem' }}>
                                <Typography variant='h5'>
                                    about the product
                                </Typography>
                            </Box>
                            <Box component='div' sx={{ textAlign: 'justify' }}>
                                <Typography>
                                    Enjoy the bold flavor and enticing aroma of the Keurig K-Cup Dunkin' Donuts Original Blend Coffee.
                                    This medium roast, full-bodied blend offers a classic taste that rewards you sip after sip.
                                    Perfect for making in the comfort of your home.
                                </Typography>
                            </Box>
                            <Box>
                                <List sx={{ listStyleType: 'disc' }}>
                                    <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                    <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                    <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                    <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>

                                    {isReadMoreShown ?
                                        <>
                                            <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                            <ListItem sx={{ display: 'list-item' }}>Dark roast</ListItem>
                                        </>
                                        : null}

                                    <Button onClick={togglebtn}>Read More</Button>
                                </List>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </StyledContainer>
            <Container>
                <Divider />
            </Container>

        </StyledBox>
    )
}

export default AboutProduct