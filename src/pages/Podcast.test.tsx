import "@testing-library/jest-dom/extend-expect";
import { render } from '@testing-library/react';
import Podcast from './Podcast';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { BrowserRouter } from 'react-router-dom';

jest.mock("../components/PodcastInfo", () => () => {
  return <div>PodcastInfoComponent</div>;
});

describe("Podcast Component", () => {

  test('renders content', () => {
    const { container } = render(
      <Provider store={store}>
        <Podcast />
      </Provider>, {wrapper: BrowserRouter}
    );
    expect(container).toHaveTextContent('PodcastInfoComponent')
  })

})