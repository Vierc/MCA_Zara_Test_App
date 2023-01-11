import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe("App Component", () => {

  test('renders content', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
  })

})
