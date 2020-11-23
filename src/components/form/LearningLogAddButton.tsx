import { Fab } from "@material-ui/core";
import { PlayArrowOutlined } from "@material-ui/icons";
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';
import React, { Dispatch, FC, FormEvent, SetStateAction } from "react";

type Props = {
    isStarted: boolean;
    setIsStarted: Dispatch<SetStateAction<boolean>>;
    handleLearningLogStart: (e: FormEvent) => void;
    handleLearningLogStop: (e: FormEvent) => void;
}

const LearningLogAddButton: FC<Props> = (props) => {
    const {isStarted, setIsStarted, handleLearningLogStart, handleLearningLogStop} = props;

    return (
        <Fab
            color={isStarted ? "secondary" : "primary"}
            size="medium"
            onClick={(e) => {
                if(!isStarted){
                    setIsStarted(true);
                    handleLearningLogStart(e);
                } else {
                    setIsStarted(false);
                    handleLearningLogStop(e);
                }
            }}
        >
            {isStarted && (
                <StopOutlinedIcon />
            )}
            {!isStarted && (
                <PlayArrowOutlined />
            )}
        </Fab>
    )
}

export default LearningLogAddButton
