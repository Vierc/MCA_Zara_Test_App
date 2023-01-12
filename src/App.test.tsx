import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { createMemoryHistory } from '@remix-run/router';
import { BrowserRouter, Router } from 'react-router-dom';

jest.mock("./components/Header", () => () => {
  return <div>HeaderComponent</div>;
});
jest.mock("./pages/Home", () => () => {
  return <div>HomeComponent</div>;
});
jest.mock("./pages/Podcast", () => () => {
  return <div>PodcastComponent</div>;
});
jest.mock("./components/EpisodeList", () => () => {
  return <div>EpisodeListComponent</div>;
});
jest.mock("./components/EpisodePlayer", () => () => {
  return <div>EpisodePlayerComponent</div>;
});

describe("App Component", () => {

  test('renders content', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>, {wrapper: BrowserRouter}
    );
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(container).toHaveTextContent('HeaderComponent')
    expect(container).toHaveTextContent('HomeComponent')
    expect(container).not.toHaveTextContent('PodcastComponent')
    expect(container).not.toHaveTextContent('EpisodeListComponent')
    expect(container).not.toHaveTextContent('EpisodePlayerComponent')
  })
    
  test("navigating podcast", () => {
    const history = createMemoryHistory()
    history.push('/podcast/001');
    const { container } = render(
      <Provider store={store}>
        <Router  location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container).toHaveTextContent('HeaderComponent')
    expect(container).not.toHaveTextContent('HomeComponent')
    expect(container).toHaveTextContent('PodcastComponent')
    expect(container).not.toHaveTextContent('EpisodeListComponent')
    expect(container).not.toHaveTextContent('EpisodePlayerComponent')
  })
    
  test("navigating episode", () => {
    const history = createMemoryHistory()
    history.push('/podcast/001/episode/001');
    const { container } = render(
      <Provider store={store}>
        <Router  location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(container).toHaveTextContent('HeaderComponent')
    expect(container).not.toHaveTextContent('HomeComponent')
    expect(container).toHaveTextContent('PodcastComponent')
    expect(container).not.toHaveTextContent('EpisodeListComponent')
    expect(container).not.toHaveTextContent('EpisodePlayerComponent')
  })

})
