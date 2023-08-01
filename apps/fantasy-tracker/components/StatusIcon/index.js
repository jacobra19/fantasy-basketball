import React from 'react';

import ErrorIcon from "@material-ui/icons/Error";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const StatusIcon = ({ isValid, size }) => {
    const styles = (s) => {
        let validColor = "#4caf50";
        let invalidColor = "#dc004e";

        let styles = {
            validIcon: {
                color: validColor,
                width: size,
                height: size,
            },
            invalidIcon: {
                color: invalidColor,
                width: size,
                height: size,
            },
        };

        return styles[s];
    };

    return (
        isValid
            ?
            <CheckCircleIcon style={styles("validIcon")} size={size} />
            :
            <ErrorIcon style={styles("invalidIcon")} size={size} />
    )
}

StatusIcon.defaultProps = {
    size: '1rem',
}

export default StatusIcon;
