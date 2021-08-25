import React, { useContext } from 'react';
import {Button} from '@material-ui/core';
import { SocketContext } from '../SocketContext';

export default function Notifications() {
    const {answerCall, call, callAccepted} = useContext(SocketContext);

    return (
        <>
            {
                call.isReceivingCall && !callAccepted && (
                    <div className="notifi">
                        <h1>{call.name} is calling: </h1>
                        <Button variant="contained" color="secondary" onClick={answerCall}>
                            Answer 
                        </Button>
                    </div>
                )
            }
        </>
    )
}
