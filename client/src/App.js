import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from './store/actions';
import Ticker from './services/ticker';

const App = () => {
    const dispatch = useDispatch();

    const setTickersData = (data) => {
        dispatch(actions.loadTickers(data));
    }

    useEffect(() => {
        new Ticker(process.env.REACT_APP_TICKER_SERVER, setTickersData);
    });

    return (
        <div className="App">
            <h1>My application</h1>
        </div>
    );
}

export default App;
