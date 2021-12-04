const LOAD_TICKERS = 'LOAD_TICKERS';

const loadTickers = (tickers) => {
    return {
        type: LOAD_TICKERS,
        tickers
    };
};

export default { LOAD_TICKERS, loadTickers };