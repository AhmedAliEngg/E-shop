import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const CopyRight: React.FC = () => {
    return (
        <Box>
            <Container>
                <Box sx={{textAlign:"center"}}>
                    <Typography>
                        © 2022 Bed Bath & Beyond Inc. and its subsidiaries.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default CopyRight