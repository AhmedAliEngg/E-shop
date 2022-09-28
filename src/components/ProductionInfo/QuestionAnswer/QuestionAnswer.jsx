import React, { useState } from 'react'
import { Box, Container, Divider, Modal, styled, Typography } from '@mui/material'

const StyledContainer = styled(Container)({
   // display: " flex",
    // justifyContent: 'center',
    // alignItems: "center",
    padding: "1px 0",
    '&.MuiContainer-root': {
        paddingLeft: 0,
        paddingRight: 0,
    },

})
const StyledContainerOne = styled(Container)({

})
const QuestionAnswer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <StyledContainer>
                {/* <Grid container spacing={4}>
                    <Grid item xs={10}> */}
                     <Box>
                        <Box>
                            <Typography variant='h6'>
                                Questions & Answers
                            </Typography>
                        </Box>
                        <Box component='div' sx={{ textAlign: 'justify' }} >
                            <Typography onClick={handleOpen}>
                                Ask the first Question
                            </Typography>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="parent-modal-title"
                                aria-describedby="parent-modal-description"
                            >
                                <Box sx={{ width: 400 }}>
                                    <Typography variant='h6'>
                                        Hello
                                    </Typography>
                                </Box>
                            </Modal>
                        </Box>
                        </Box>
                    {/* </Grid>
                </Grid>
                 */}
            </StyledContainer>
            <StyledContainer>
                <Divider />
            </StyledContainer>
        </Box>
    )
}

export default QuestionAnswer