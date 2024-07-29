// Registration.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Registration from './Registration'; // Adjust the import based on your file structure

describe('Registration Form', () => {
  beforeEach(() => {
    render(<Registration />);
  });

  test('renders all input fields and buttons', () => {
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Emails/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GPA/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Zip Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Academic Level/i)).toBeInTheDocument();
    expect(screen.getByText(/Create Profile/i)).toBeInTheDocument();
    expect(screen.getByText(/Reset/i)).toBeInTheDocument();
  });

  test('validates all fields and buttons', () => {
    const fullNameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Emails/i);
    const gpaInput = screen.getByLabelText(/GPA/i);
    const stateInput = screen.getByLabelText(/State/i);
    const zipInput = screen.getByLabelText(/Zip Code/i);
    const levelInput = screen.getByLabelText(/Academic Level/i);
    const createProfileButton = screen.getByText(/Create Profile/i);
    const resetButton = screen.getByText(/Reset/i);

    // Fill all fields
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(gpaInput, { target: { value: '3.5' } });
    fireEvent.change(stateInput, { target: { value: 'California' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });
    fireEvent.change(levelInput, { target: { value: 'Junior' } });

    // Check if fields contain values
    expect(fullNameInput.value).toBe('John Doe');
    expect(emailInput.value).toBe('john@example.com');
    expect(gpaInput.value).toBe('3.5');
    expect(stateInput.value).toBe('California');
    expect(zipInput.value).toBe('12345');
    expect(levelInput.value).toBe('Junior');

    // Check validation for empty fields
    fireEvent.change(fullNameInput, { target: { value: '' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/Full Name is required/i)).toBeInTheDocument();

    // GPA field validation
    fireEvent.change(gpaInput, { target: { value: '5.0' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/GPA must be between 0.0 and 4.0/i)).toBeInTheDocument();

    // State dropdown validation
    fireEvent.change(stateInput, { target: { value: '' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/State is required/i)).toBeInTheDocument();

    // Emails field validation
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();

    // Zip Code field validation
    fireEvent.change(zipInput, { target: { value: '1234' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/Invalid ZIP code/i)).toBeInTheDocument();

    // Academic Level dropdown validation
    fireEvent.change(levelInput, { target: { value: '' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/Academic Level is required/i)).toBeInTheDocument();

    // Reset button functionality
    fireEvent.click(resetButton);
    expect(fullNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(gpaInput.value).toBe('');
    expect(stateInput.value).toBe('');
    expect(zipInput.value).toBe('');
    expect(levelInput.value).toBe('');

    // Create Profile button functionality
    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(gpaInput, { target: { value: '3.5' } });
    fireEvent.change(stateInput, { target: { value: 'California' } });
    fireEvent.change(zipInput, { target: { value: '12345' } });
    fireEvent.change(levelInput, { target: { value: 'Junior' } });
    fireEvent.click(createProfileButton);
    expect(screen.getByText(/Quiz Page/i)).toBeInTheDocument(); // Assuming it navigates to a quiz page
  });

  test('state dropdown includes all US states', () => {
    const usStates = [
      'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    usStates.forEach(state => {
      expect(screen.getByText(state)).toBeInTheDocument();
    });
  });

  test('academic level dropdown includes all options', () => {
    const academicLevels = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

    academicLevels.forEach(level => {
      expect(screen.getByText(level)).toBeInTheDocument();
    });
  });
});