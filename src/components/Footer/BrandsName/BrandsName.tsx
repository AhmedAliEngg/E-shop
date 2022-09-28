import { Box, Container } from '@mui/material'
import React from 'react'
import { ReactComponent as Baby } from '../../../assets/buybuyBABY.svg'
import { ReactComponent as Face } from '../../../assets/faceValues.svg'
import { ReactComponent as Decorist } from '../../../assets/decorist.svg'
const BrandsName: React.FC = () => {
    return (
        <Box>
            <Container>
                <Box sx={{display:"flex", justifyContent:'center'}}>
                    <Box sx={{filter:'brightness(0.5)'}}>
                        <Baby width={70} />
                    </Box>
                    <Box sx={{filter:'brightness(0.5)'}}>
                        <Face width={70} />
                    </Box>
                    <Box>
                        <Decorist width={70} />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default BrandsName