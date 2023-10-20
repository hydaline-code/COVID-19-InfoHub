import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Home from '../Home';

const initialState = {
  home: {
    data: {
      summaryStats: {
        global: {
          confirmed: 123456907,
          deaths: 7890890,
        },
      },
      rawData: [
        {
          Country_Region: 'Cameroon',
          Confirmed: '124392',
        },
      ],
    },
    state: 'Success',
    details: null,
  },
};

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe('Testing Rendering Elements', () => {
  it('Should have elements in the document', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const navbar = container.querySelector('.navbar');
    const title = container.querySelector('.searchBar');

    expect(navbar).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});

describe('Testing imported components', () => {
  it('Should have all imported components element', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    const global = container.querySelector('.global');
    const deaths = container.querySelector('.deaths');
    const cases = container.querySelector('.cases');

    expect(global).toBeInTheDocument();
    expect(deaths).toBeInTheDocument();
    expect(cases).toBeInTheDocument();
  });
});
