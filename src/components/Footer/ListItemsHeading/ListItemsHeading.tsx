import { Box, Container, styled, Typography, List, ListItem, ListItemText } from '@mui/material'
import { FacebookOutlined, Instagram, Pinterest, Twitter, YouTube } from '@mui/icons-material'
import React from 'react'
import { ReactComponent as Apple } from '../../../assets/downloadIos.svg'
import { ReactComponent as GooglePlay } from '../../../assets/downloadAndroid.svg'
const StyledContainer = styled(Container)({

})
const menuItems = [
    {
        id: 1,
        text: 'Help'
    },
    {
        id: 2,
        text: 'Update Your Email Preference'
    }
]
const menuItemsTwo = [
    {
        id: 1,
        textOne: 'Help'
    },
    {
        id: 2,
        textOne: 'Help'
    },
    {
        id: 3,
        textOne: 'Help'
    },
    {
        id: 4,
        textOne: 'Help'
    },
    {
        id: 5,
        textOne: 'Help'
    },
    {
        id: 6,
        textOne: 'Help'
    },
    {
        id: 7,
        textOne: 'Help'
    },
    {
        id: 8,
        textOne: 'Help'
    },
]
const StyledList = styled(ListItem)({
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,

})
const ListItemsHeading: React.FC = () => {
    return (
        <Box>
            <StyledContainer>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Box>
                            <Typography>
                                GET IN TOUCH
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItems.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.text}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                            <Box>
                                <Typography>
                                    LET'S CONNECT
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex',justifyContent:'space-between' }}>
                                <Box>
                                    <FacebookOutlined />
                                </Box>
                                <Box>
                                    <Twitter />
                                </Box>
                                <Box>
                                    <Instagram />
                                </Box>
                                <Box>
                                    <Pinterest />
                                </Box>
                                <Box>
                                    <YouTube />
                                </Box>
                            </Box>
                            <Box>
                                <Typography>
                                    DOWNLOAD OUR APP
                                </Typography>
                            </Box>
                            <Box>
                                <Apple />
                            </Box>
                            <Box>
                                <GooglePlay />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>
                                SHIPPING & RETURNS
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                        <Box>
                            <Typography>
                                GET IN TOUCH
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>
                                SERVICES & SOLUTIONS
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                        <Box>
                            <Typography>
                                GET IN TOUCH
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <Typography>
                                COMPANY INFO
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                        <Box>
                            <Typography>
                                GET IN TOUCH
                            </Typography>
                        </Box>
                        <Box>
                            <List>
                                {menuItemsTwo.map((item) => (
                                    <StyledList key={item.id} >
                                        <ListItemText>
                                            <Typography sx={{ fontSize: '0.85rem', fontWeight: 300 }}>
                                                {item.textOne}
                                            </Typography>
                                        </ListItemText>
                                    </StyledList>
                                ))
                                }
                            </List>
                        </Box>
                    </Box>
                </Box>
            </StyledContainer>
        </Box>
    )
}

export default ListItemsHeading 