import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with role of button and text of 'change to blue'
  const button = screen.getByRole('button', {name: /change to blue/i});
  expect(button).toHaveStyle({backgroundColor:'red'})

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({backgroundColor: 'blue'});

  // make sure the button text has changed as well
  expect(button.textContent).toBe('Change to red');

});
