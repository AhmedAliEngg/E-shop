import { Container, Box, styled, Link } from '@mui/material'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Baby } from '../../assets/buybuyBABY.svg'
import { ReactComponent as Face } from '../../assets/faceValues.svg'
import React from 'react'
const BoxStyled = styled(Box)({
    background: '#002854', 
    // position:'fixed'
})
const StyledContainer = styled (Container)({
    display:'flex',
    paddingTop:'5px'
})
const NavBarTop: React.FC = () => {
    return (
        <BoxStyled>
            <StyledContainer  >
                <Link >
                <Box sx={{alignItems: "center"}}>
                <Link>
                        <Logo width={70} />
                    </Link>
                </Box>
                </Link>
                <Link >
                <Box sx={{alignItems: "center"}}>
                <Link>
                        <Baby width={70} />
                    </Link>
                </Box>
                </Link>
                <Link >
                <Box sx={{alignItems: "center"}}>
                <Link>
                        <Face width={70} />
                    </Link>
                </Box>
                </Link>
            </StyledContainer>
        </BoxStyled>
    )
}

export default NavBarTop