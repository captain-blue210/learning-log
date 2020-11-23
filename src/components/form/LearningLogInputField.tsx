import { TextField } from "@material-ui/core";
import React, { FC, SetStateAction } from "react";

const LearningLogInputField: FC<{
    setName: React.Dispatch<SetStateAction<string>>,
    name: string
}> = ({ setName, name }) => {
    return (
        <TextField
            label="ログ内容"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => {
                const text = e.currentTarget.nodeValue;
                if (text === '') return;

                if (e.key === 'Enter') {
                    console.log('add learning log');
                    e.preventDefault();
                }
            }}
            fullWidth={true}
        />
    )
}

export default LearningLogInputField;
