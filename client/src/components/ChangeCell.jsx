import React from 'react';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ChangeCell = ({change}) => {
        if (change > 0) {
            return (
                <>
                    <ArrowUpwardIcon fontSize="small" />
                    {change}
                </>
            );
        } else if (change < 0) {
            return (
                <>
                    <ArrowDownwardIcon fontSize="small" />
                    {change}
                </>
            );
        }

        return (
            <>
                {change}
            </>
        );
};

export default ChangeCell;