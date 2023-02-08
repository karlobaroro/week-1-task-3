import React, { Component } from 'react';
import { AppBar, Box, Toolbar, Container, Button } from '@mui/material/';

const pages = ['Home', 'About us', 'Contact Menu'];

class DisplayNavbar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{backgroundColor:"#2c5d63"}}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </div>
        );
    }
}

export default DisplayNavbar;