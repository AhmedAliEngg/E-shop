import { Container, styled } from '@mui/material'
import React from 'react'
import summerdeal from '../../assets/summerdeal.webp';
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
const SummerDeal: React.FC = () => {
  return (
    <StyledContainer>
        <img src={summerdeal} />
    </StyledContainer>
  )
}

export default SummerDeal