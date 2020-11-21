import React, { FC, FormEvent, useState } from 'react';

type Log = {
    name: string;
    startDm: string;
}

const LearningForm: FC = () => {
    const [name, setName] = useState("");
    const [startTime, setStartTime] = useState(0);
    const [timer, setTimer] = useState(0);
    const startTimer = (): void => setTimer((timer) => timer + 1);
    //let [duration, setDuration] = useState("00:00:00");
    const [logs, setLogs] = useState([] as Log[]);

    const handleLearningLogAdd = (e: FormEvent) => {
        e.preventDefault();
        setStartTime(startTime);

        setInterval(startTimer, 1000);

        const newLog: Log = {
            name: name,
            startDm: startTime.toString(),
        }

        const newLogs = [...logs, newLog];
        setLogs(newLogs);
        setName("");
    }

    const formatTime = (): string => {
        const hour: string = `0${Math.floor(timer / 3600)}`.slice(-2);
        const minutes: string = `0${Math.floor(timer / 60) % 60}`.slice(-2);
        const seconds: string = `0${Math.floor(timer % 60)}`.slice(-2);
        return `${hour}:${minutes}:${seconds}`;
    }

    return (
        <>
            <h1>
                ラーニングログ
            </h1>
            <form onSubmit={handleLearningLogAdd}>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <button type="submit">追加</button>
            </form>
            <div>{formatTime()}</div>
            {logs.map((log, index) => (
                <div key={index}>{log.name}</div>
            ))}
        </>
    )
}

export default LearningForm
