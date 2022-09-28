import { Container, styled, Typography } from '@mui/material'
import React from 'react'
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
const StorageHeading: React.FC = () => {
  return (
    <StyledContainer>
      <Typography variant='h3' align='center' mt={2} mb={2} sx={{ color: '#002855', fontWeight: 'bold' }}>  storage & org deals + 3x points for Welcome Rewards™ members  </Typography>
    </StyledContainer>
  )
}

export default StorageHeading