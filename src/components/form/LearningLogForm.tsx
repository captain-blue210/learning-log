import { Grid, makeStyles } from '@material-ui/core';
import React, { FC, FormEvent, useRef, useState } from 'react';
import LearningLogButton from './LearningLogAddButton';
import LearningLogInputField from './LearningLogInputField';
import LearningLogTimeInputField from './LearningLogTimeInputField';

const useStyles = makeStyles({
    root: {
        gridRow: '2',
        margin: '10px'
    }
})

type Log = {
    name: string;
    startDm: Date;
    duration: number;
}

const LearningForm: FC = () => {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [timer, setTimer] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const [logs, setLogs] = useState([] as Log[]);
    const startTimer = (): void => setTimer((timer) => timer + 1);
    const timerId = useRef<NodeJS.Timeout>();

    const handleLearningLogStart = (e: FormEvent) => {
        e.preventDefault();
        timerId.current = setInterval(startTimer, 1000);

        const newLog: Log = {
            name: name,
            startDm: new Date(),
            duration: 0,
        }

        const newLogs = [...logs, newLog];
        setLogs(newLogs);
    }

    const handleLearningLogStop = (e: FormEvent) => {
        e.preventDefault();
        if (timerId.current) {
            clearInterval(timerId.current);
        }
    }

    const formatTime = (): string => {
        const hour: string = `0${Math.floor(timer / 3600)}`.slice(-2);
        const minutes: string = `0${Math.floor(timer / 60) % 60}`.slice(-2);
        const seconds: string = `0${Math.floor(timer % 60)}`.slice(-2);
        return `${hour}:${minutes}:${seconds}`;
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={9}>
                    <LearningLogInputField setName={setName} name={name} />
                </Grid>
                <Grid item xs={1}>
                    <LearningLogButton
                        isStarted={isStarted}
                        setIsStarted={setIsStarted}
                        handleLearningLogStart={handleLearningLogStart}
                        handleLearningLogStop={handleLearningLogStop}
                    />
                </Grid>
                <Grid item xs={2}>
                    <LearningLogTimeInputField time={formatTime()} />
                </Grid>
            </Grid>
            {logs.map((log, index) => (
                <div key={index}>{log.name}</div>
            ))}
        </div>
    )
}

export default LearningForm
