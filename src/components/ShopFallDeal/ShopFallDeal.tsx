import React from 'react'
import { Container, styled } from '@mui/material'
import ShopDeal from '../../assets/ShopDeal.webp'
const StyledContainer = styled(Container)({
    display: " flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1px 0",
    marginTop:'15px',
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const ShopFallDeal: React.FC = () => {
    return (
        <StyledContainer>
            <img src={ShopDeal} width="1280px" height="500px" />
        </StyledContainer>
    )
}

export default ShopFallDeal;