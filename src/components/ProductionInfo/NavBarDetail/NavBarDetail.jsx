import { Box, Container, Rating, styled, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
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
    backgroundColor: '#f7f7f8',
    marginTop: "2rem",
    paddingTop: '2.5rem'
})
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const NavBarDetail = () => {
    const [value, setValue] = React.useState(0);
    const [rate,setRate] = React.useState(5);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="details" {...a11yProps(0)} sx={{ textTransform: "lowercase" }}></Tab>
                        <Tab label="shipping&returns" {...a11yProps(1)} sx={{ textTransform: "lowercase" }}></Tab>
                        <Tab label="q&a(9)" {...a11yProps(2)} sx={{ textTransform: "lowercase" }}></Tab>
                    </Tabs>
                </Box>
                <Box component="span" sx={{ padding: '2px', marginRight: '10px',display:"flex",alignItems:"center" }}>
                    <Box>
                        <Typography sx={{fontFamily:"Roboto,Helvetica,Arial,sans-serif",
                                        fontWeight:500,
                                        fontSize:"0.875rem",
                                        lineHeight:1.25,
                                        letterSpacing:"0.02857em",
                                        whiteSpace:"normal"}}>
                            reviews
                        </Typography>
                    </Box>
                    <Box>
                        <Rating
                        name="simple-controlled"
                        value={rate}
                        onChange={(event, newValue) => {
                          setRate(newValue);
                        }}/>
                    </Box>
                    <Box>
                        <Typography sx={{fontFamily:"Roboto,Helvetica,Arial,sans-serif",
                                        fontWeight:400,
                                        fontSize:"0.775rem",
                                        lineHeight:1.25,
                                        letterSpacing:"0.02857em",
                                        whiteSpace:"normal"}}>
                            (3683)
                        </Typography>
                    </Box>
                </Box>
            </StyledContainer>
        </StyledBox>
    )
}

export default NavBarDetail