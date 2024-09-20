import Header from '../Header';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../utils/redux-store/store';
import { StaticRouter } from 'react-router-dom/server';

test("Checking logo loaded in header or not", ()=>{
    const header = render(<StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </StaticRouter>);

    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe('http://localhost/dummy.png');
});

test("Checking initially cart has zero items", ()=>{
    const header = render(<StaticRouter>
        <Provider store={store}>
            <Header/>
        </Provider>
    </StaticRouter>);

    const cart = header.getByTestId("cart");
    expect(cart.textContent).toBe('0');
});