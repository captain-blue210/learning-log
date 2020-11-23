import { TextField } from '@material-ui/core';
import React, { FC } from 'react';

type Props = {
    time: string,
}

const LearningLogTimeInputField: FC<Props> = (props) => {
    const {time} = props;
    return (
        <TextField
            type="text"
            variant="outlined"
            value={time}
        >
        </TextField>
    )
}

export default LearningLogTimeInputField;
