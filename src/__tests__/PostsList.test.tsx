import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional matching options
import PostsList from '@components/PostsList';

test('renders PostsList with loading state', () => {
  const { getByText } = render(<PostsList posts={[]} loading={true} />);
  const loadingText = getByText('Нет загруженных постов');
  expect(loadingText).toBeInTheDocument();
});
