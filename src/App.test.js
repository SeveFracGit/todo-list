import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders To-Do List title', () => {
  render(<App />);
  const titleElement = screen.getByText(/To-Do List/i);
  expect(titleElement).toBeInTheDocument();
});

test('can add a new task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/New Task/i);
  expect(taskElement).toBeInTheDocument();
});

test('can toggle task completion', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  const taskElement = screen.getByText(/New Task/i);
  fireEvent.click(taskElement);

  expect(taskElement).toHaveClass('line-through');
});

test('can delete a task', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Add a new task/i);
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(inputElement, { target: { value: 'New Task' } });
  fireEvent.click(addButton);

  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  const taskElement = screen.queryByText(/New Task/i);
  expect(taskElement).not.toBeInTheDocument();
});




/*import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/