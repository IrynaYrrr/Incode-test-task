import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from './store/actions';
import Tickers from './services/tickers';

const App = () => {
    const dispatch = useDispatch();
    const tickers = useSelector((state)=> state.tickerReducer.tickers);
    console.log(tickers)
    const setTickersData = (data) => {
        dispatch(actions.loadTickers(data));
    }

    useEffect(() => {
        new Tickers(process.env.REACT_APP_TICKER_SERVER, setTickersData);
    },[]);

    return (
        <div className="App">

            <h1>Go</h1>
        </div>
    );
}

export default App;
