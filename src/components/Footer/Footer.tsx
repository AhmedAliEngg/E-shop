import { Box, Button, Container, Divider, InputBase, styled, Typography } from '@mui/material'
import ListItemsHeading from './ListItemsHeading/ListItemsHeading'
import React from 'react'
import ExploreBrands from './ExploreBrands/ExploreBrands'
import BrandsName from './BrandsName/BrandsName'
import CopyRight from './CopyRight/CopyRight'
const StyledBox = styled(Box)({
    backgroundColor: '#f7f7f7'
})
const StyledContainer = styled(Container)({
    display: " flex",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: "25px",
    marginTop: "10px",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const Search = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '5px 10px',
    display: 'flex',
    width: '60%',
    marginRight: '12px'

}))
const StyledBoxThree = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    width: '50%'
})
const StyledButton = styled(Button)({
    width: '280.88px',
    height: '50px'
})
const Footer: React.FC = () => {
    return (
        <StyledBox>
            <StyledContainer>
                <Box>
                    <Box>
                        <Typography variant="h6">
                            we write really great emails.
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>
                            We'll let you know about the latest deals & newest products.
                        </Typography>
                        <Box>
                            <Typography>
                                New subscribers get 20% off any single item.
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <StyledBoxThree component="span">
                    <Search>
                        <InputBase placeholder='Email' />
                    </Search>
                    <Box>
                        <StyledButton variant="contained">Contained</StyledButton>
                    </Box>
                </StyledBoxThree>
            </StyledContainer>
            <Container sx={{ background: "black", width: '100%' }}>
                <Divider orientation='vertical' sx={{ height: '1px' }} />
            </Container>
            <ListItemsHeading />
            <ExploreBrands />
            <BrandsName />
            <CopyRight />
        </StyledBox>
    )
}

export default Footer