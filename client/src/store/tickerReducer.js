import actions from './actions';

const tickerReducer = (state = { tickers: [] }, action) => {
    switch (action.type) {
        case actions.LOAD_TICKERS:
            return { ...state, tickers: action.tickers };
        default:
            return state;
    }
};

export default tickerReducer;