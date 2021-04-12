import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button has correct initial color', () => {
  render(<App/>);

  // find an element with role of button and text of 'change to blue'
  const button = screen.getByRole('button', {name: /change to midnight blue/i});
  expect(button).toHaveStyle({backgroundColor:'MediumVioletRed'})

  // click button
  fireEvent.click(button);

  // expect the background color to be blue
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'});

  // make sure the button text has changed as well
  expect(button).toHaveTextContent('Change to Medium Violet Red');

});

test('initial conditions', () => {
  render(<App/>);
  // button should start enabled 
  const button = screen.getByRole('button', {name: /change to midnight blue/i});
  expect(button).toBeEnabled();
  
  //  checkbox should start unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

})

test ('checkbox enabled/disabled working', ()=> {
  render(<App/>);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent.click(checkbox);

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();

})

test('button becomes gray when disabled', ()=>{
  render(<App/>)
  const button = screen.getByRole('button', {name:/change to midnight blue/i});
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor:'gray'});

  // Enable button 
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  // Click button and change it to blue
  fireEvent.click(button);

  // Disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});

  // Enable button—make sure it is still blue
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'MidnightBlue'});

})

describe('spaces before camel-case capital letters', ()=>{
  test('works for no inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('works for multiple inner capital letters', ()=>{
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
})

// MediumVioletRed
// MignightBlue