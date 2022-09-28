import { AllInboxOutlined, ArrowDropDown, KeyboardArrowDown, LocalMallOutlined } from '@mui/icons-material'
import { Box, Button, Container, Menu, styled } from '@mui/material'
import React from 'react'
const StyledContainer = styled(Container)({

    display: 'flex',
    justifyContent: 'space-between',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const Icon = styled(Box)({
    color:'white'
})
const DropDownMenu = () => {
    return (
        <StyledContainer >
            <Box sx={{width:'60%'}}>
                <Button variant='text' sx={{ color: 'white', marginLeft: '10px' }}>
                    deals<KeyboardArrowDown />
                </Button>
                <Button variant='text' sx={{ color: 'white' }}>
                    deals<KeyboardArrowDown />
                </Button>
                <Button variant='text' sx={{ color: 'white' }}>
                    deals<KeyboardArrowDown />
                </Button>
                <Button variant='text' sx={{ color: 'white' }}>
                    deals<KeyboardArrowDown />
                </Button>
                <Button variant='text' sx={{ color: 'white' }}>
                    deals<KeyboardArrowDown />
                </Button>
                <Menu>

                </Menu>
            </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Icon> <LocalMallOutlined /> </Icon>
                        <Box sx={{ marginLeft: "5px" }}>
                            <Box sx={{ color: "white" }}>
                                <Box component="span" sx={{ display: "flex" }} >
                                    <Box component="span" >
                                        store & curbside pickup
                                    </Box>
                                    <ArrowDropDown />
                                </Box>
                            </Box>
                            <Box component="span"  sx={{ color: "white" }}>
                                Springfield
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Icon> <AllInboxOutlined /> </Icon>
                        <Box sx={{ marginLeft: "5px" }}>
                            <Box sx={{ color: "white" }}>
                                <Box component="span" sx={{ display: "flex", alignItems: "center" }} >
                                    <Box component="span" >
                                        same day delivery
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                

        </StyledContainer>
    )
}

export default DropDownMenu