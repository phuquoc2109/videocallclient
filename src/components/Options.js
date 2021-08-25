import React, { useContext, useState } from 'react';
import {Button, TextField, Grid, Typography, Container, Paper} from '@material-ui/core'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons'
import { SocketContext } from '../SocketContext';

export default function Options( { children }) {
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');

    return (
        <Container className="option">
            <Paper elevation={10} className="option__paper">
                <form noValidate autoComplete="off">
                    <Grid container >
                        <Grid item xs={12} md={6} className="option__grid" >
                            <Typography gutterBottom variant="h6">Acount Info</Typography>
                            <TextField className="option__textfield" label="Name" value={name} onChange={e => setName(e.target.value)} fullWidth />
                            {console.log(me)}
                            <CopyToClipboard text={me} className="" >
                                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                                    Coppy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className="option__grid">
                            <Typography gutterBottom variant="h6">Make a call</Typography>
                            <TextField className="option__textfield" label="ID to call" value={idToCall} onChange={e => setIdToCall(e.target.value)} fullWidth />
                            {
                                callAccepted && !callEnded ? (
                                    <Button onClick={leaveCall} fullWidth variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />}>
                                        Hang up
                                    </Button>
                                ) : (
                                    <Button onClick={() => callUser(idToCall)} fullWidth variant="contained" color="primary" startIcon={<Phone fontSize="large" />}>
                                        Call
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    )
}
