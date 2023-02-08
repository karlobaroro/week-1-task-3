import React, { Component } from 'react';
import { Card, Grid, CardContent, Typography } from '@mui/material/';

class DisplayCard extends Component {
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    {this.props.userInfo.map(value => {
                        return (
                            <Grid item xs={3}>
                                <Card sx={{ minWidth: 275 }}>
                                    <CardContent>
                                        <Typography variant="body2">
                                            <div>Name: {value.name}</div>
                                            <div>Date of Birth: {value.dob}</div>
                                            <div>Email: {value.email}</div>
                                            <div>Contact number: {value.contact}</div>
                                            <div>Description: {value.desc}</div>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

export default DisplayCard;