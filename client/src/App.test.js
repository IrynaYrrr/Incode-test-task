import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';

test('renders table', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    const linkElement = screen.getByText(/TICKER/i);
    expect(linkElement).toBeInTheDocument();
});

test('shows the GOOGL row', async () => {
    const { findByText } = render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
    expect(await findByText('GOOGL')).toBeInTheDocument();
});