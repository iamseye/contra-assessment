import { render, screen } from '@testing-library/react';
import ConfirmationModal from './ConfirmModal';

describe('<ConfirmationModal />', () => {
  const handleClose = jest.fn();

  it('should render when prop isOpen = true', async () => {
    expect.hasAssertions();
    render(<ConfirmationModal handleClose={handleClose} isOpen />);
    const confirmButton = screen.queryByTestId('modal-confirm-button');

    expect(confirmButton).toBeInTheDocument();
  });
});
