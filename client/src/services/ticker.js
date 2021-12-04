import { io } from 'socket.io-client';

class Ticker {
    socket = null;

    constructor(uri, callback) {
        this.socket = io(uri);
        this.start();
        this.ticker(callback);
    }

    start() {
        this.socket.emit('start');
    }

    ticker(callback) {
        this.socket.on('ticker', (data) => {
            callback(data);
        });
    }
}

export default Ticker;