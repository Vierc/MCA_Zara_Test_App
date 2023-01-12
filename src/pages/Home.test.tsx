import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

jest.mock("../components/Search", () => () => {
  return <div>SearchComponent</div>;
});
jest.mock("../components/PodcastList", () => () => {
  return <div>PodcastListComponent</div>;
});

describe("Home Component", () => {

  test('renders content', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>, {wrapper: BrowserRouter}
    );
    expect(container).toHaveTextContent('SearchComponent')
    expect(container).toHaveTextContent('PodcastListComponent')
  })

})