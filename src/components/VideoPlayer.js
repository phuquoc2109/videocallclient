import React, { useContext } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { SocketContext } from '../SocketContext';

export default function VideoPlayer() {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

    return (
        <Grid container className="grid" >
            
            {
                stream && (
                    <Paper className="grid__paper">
                        <Grid item xs={12} md={6}>
                            <Typography color="secondary" variant="h5" gutterBottom>{name || 'Name'}</Typography>
                            <video className="grid__video" playsInline muted ref={myVideo} autoPlay />
                        </Grid>
                    </Paper>
            )}
            
            {
                callAccepted && !callEnded && (
                    <Paper className="grid__paper">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                            <video className="grid__video" playsInline ref={userVideo} autoPlay />
                        </Grid>
                    </Paper>
            )}          
        </Grid>
    )
}
