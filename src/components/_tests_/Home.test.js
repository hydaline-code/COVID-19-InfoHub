import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from '../Home';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Home Component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      home: {
        data: [], // Add sample state data here
        state: 'Success',
        details: null,
      },
    });
  });

  it('should render the component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const component = screen.getByTestId('home-component');
    expect(component).toBeInTheDocument();
  });

  it('should render loader when in pending state', () => {
    store = mockStore({
      home: {
        data: [],
        state: 'Pending',
        details: null,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const loader = screen.getByText(/Exploring a Comprehensive COVID-19 World Statistics/);
    expect(loader).toBeInTheDocument();
  });

  it('should render some content when in success state', () => {
    // You may want to provide a mocked state with 'Success' and data here
    store = mockStore({
      home: {
        data: [
          // Sample data here
        ],
        state: 'Success',
        details: null,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Assert that the content you expect is rendered
  });

  it('should handle user interactions correctly', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    // Simulate user interactions and assert their outcomes
    const searchInput = screen.getByPlaceholderText('Search for a country');
    userEvent.type(searchInput, 'Sample Country');
    // Assert that the component behaves as expected based on this interaction
  });
});
