const LOAD_TICKERS = 'LOAD_TICKERS';

const loadTickers = (tickers) => {
    return {
        type: LOAD_TICKERS,
        tickers
    };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { LOAD_TICKERS, loadTickers };