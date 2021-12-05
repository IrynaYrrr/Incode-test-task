import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import dayjs from 'dayjs';
import ChangeCell from './ChangeCell';

const TickersTableRow = ({ ticker }) => {
    const getTime = (lastTradeTime) => {
        return dayjs(lastTradeTime).format('DD.MM.YYYY HH:mm:ss');
    }

    return (
        <TableRow>
            <TableCell component="th" scope="row">{ticker.ticker}</TableCell>
            <TableCell align="right">{ticker.exchange}</TableCell>
            <TableCell align="right">{ticker.price}</TableCell>
            <TableCell align="right"><ChangeCell change={ticker.change} /></TableCell>
            <TableCell align="right"><ChangeCell change={ticker.change_percent} /></TableCell>
            <TableCell align="right">{ticker.dividend}</TableCell>
            <TableCell align="right">{ticker.yield}</TableCell>
            <TableCell align="right">{getTime(ticker.last_trade_time)}</TableCell>
        </TableRow>
    );
};

export default TickersTableRow;

