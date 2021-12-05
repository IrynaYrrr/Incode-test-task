import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import TickersTableRow from './TickersTableRow';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    }
}));

const TickersTable = () => {
    const tickers = useSelector((state) => state.tickerReducer.tickers);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>TICKER</StyledTableCell>
                        <StyledTableCell align="right">EXCHANGE</StyledTableCell>
                        <StyledTableCell align="right">PRICE</StyledTableCell>
                        <StyledTableCell align="right">CHANGE</StyledTableCell>
                        <StyledTableCell align="right">CHANGE %</StyledTableCell>
                        <StyledTableCell align="right">DIVIDEND</StyledTableCell>
                        <StyledTableCell align="right">YIELD</StyledTableCell>
                        <StyledTableCell align="right">LAST TRADE TIME</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tickers.map((ticker) => (
                        <TickersTableRow ticker={ticker} key={ticker.ticker} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TickersTable;
