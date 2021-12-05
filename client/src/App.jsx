import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from './store/actions';
import Tickers from './services/tickers';
import TickersTable from './components/TickersTable';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const setTickersData = (data) => {
            dispatch(actions.loadTickers(data));
        }
        new Tickers(process.env.REACT_APP_TICKER_SERVER, setTickersData);
    }, [dispatch]);

    return (
        <>
            <TickersTable />
        </>
    );
}

export default App;
