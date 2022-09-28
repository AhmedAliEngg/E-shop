import {
    styled,
    Box,
    InputBase,
     Container, Link, Typography, 
} from '@mui/material'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import React from 'react'
import { LocalGroceryStoreOutlined, PersonOutlineRounded, SearchOutlined } from '@mui/icons-material';
import DropDownMenu from '../DropDownMenu/DropDownMenu';

const StyledContainer = styled(Container)({
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    height: '90px',
    position:'sticky',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },
    '& .currColor g': {
        fill: 'white',
    }
})
const Search = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
    padding: '5px 10px',
    borderRadius: "70px",
    width: '70%',
    textAlign: 'center'
}))

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const SearchIconStyled = styled(SearchOutlined)({
    // paddingTop:'5px'
})
const StyledLink = styled(Link)({
    color: "white",
    cursor: "pointer"
})
const DropDownMenuStyled = styled(Box)(({theme})=>({
  
}))

const NavBar: React.FC = () => {
    // const [open, setOpen] = useState(false)
    return (
        <Box sx={{ background: '#1a4e8a' }}>
            <StyledContainer>
                <Box sx={{ display: 'flex', alignItems: "center", paddingLeft: "20px" }}>
                    <StyledLink>
                        <Logo width={150} height="70px" />
                    </StyledLink>
                </Box>
                <Search>
                    <SearchIconStyled />
                    <InputBase placeholder='What product can we help you find?' />
                </Search>
                <Icons>
                    <StyledLink>
                        <Typography>sign in</Typography>
                    </StyledLink>
                    <StyledLink>
                        <PersonOutlineRounded />
                    </StyledLink>
                    <StyledLink>
                        <LocalGroceryStoreOutlined />
                    </StyledLink>
                </Icons>
                
            </StyledContainer>
            <DropDownMenuStyled>
                <DropDownMenu/>
            </DropDownMenuStyled>
        </Box>
    )
}

export default NavBar