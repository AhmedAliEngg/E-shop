import React from 'react'
import { Container, styled, Typography } from '@mui/material'
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
const CarouselHeadingOne: React.FC = () => {
  return (
    <StyledContainer>
    <Typography variant='h3' align='center' mt={2} mb={2} sx={{ color: '#002855', fontWeight: 'bold' }}> top circular deals </Typography>
  </StyledContainer>
  )
}

export default CarouselHeadingOne