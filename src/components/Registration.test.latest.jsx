import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Registration from './Registration'; // Assuming this is your component

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

describe('Registration Form Tests', () => {
  beforeEach(() => {
    render(<Registration />);
  });

  it('should render all input fields and buttons', () => {
    expect(screen.getByLabelText('Full Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('GPA')).toBeInTheDocument();
    expect(screen.getByLabelText('State')).toBeInTheDocument();
    expect(screen.getByLabelText('Zip Code')).toBeInTheDocument();
    expect(screen.getByLabelText('Academic Level')).toBeInTheDocument();
    expect(screen.getByText('Create Profile')).toBeInTheDocument();
    expect(screen.getByText('Reset')).toBeInTheDocument();
  });

  it('should validate Full Name field', () => {
    const fullNameInput = screen.getByLabelText('Full Name');
    fireEvent.blur(fullNameInput);
    expect(screen.getByText('Full Name is required')).toBeInTheDocument();
  });

  it('should validate Email field', () => {
    const emailInput = screen.getByLabelText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('should validate GPA field', () => {
    const gpaInput = screen.getByLabelText('GPA');
    fireEvent.change(gpaInput, { target: { value: '5.0' } });
    fireEvent.blur(gpaInput);
    expect(screen.getByText('GPA must be between 0.0 and 4.0')).toBeInTheDocument();
  });

  it('should validate State dropdown', () => {
    const stateInput = screen.getByLabelText('State');
    fireEvent.change(stateInput, { target: { value: '' } });
    fireEvent.blur(stateInput);
    expect(screen.getByText('State is required')).toBeInTheDocument();
  });

  it('should validate Zip Code field', () => {
    const zipInput = screen.getByLabelText('Zip Code');
    fireEvent.change(zipInput, { target: { value: '1234' } });
    fireEvent.blur(zipInput);
    expect(screen.getByText('Invalid ZIP code')).toBeInTheDocument();
  });

  it('should validate Academic Level dropdown', () => {
    const levelInput = screen.getByLabelText('Academic Level');
    fireEvent.change(levelInput, { target: { value: '' } });
    fireEvent.blur(levelInput);
    expect(screen.getByText('Academic Level is required')).toBeInTheDocument();
  });

  it('should clear all fields when Reset button is clicked', () => {
    const fullNameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email');
    const gpaInput = screen.getByLabelText('GPA');
    const stateInput = screen.getByLabelText('State');
    const zipInput = screen.getByLabelText('Zip Code');
    const levelInput = screen.getByLabelText('Academic Level');
    const resetButton = screen.getByText('Reset');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(gpaInput, { target: { value: '3.5' } });
    fireEvent.change(stateInput, { target: { value: 'California' } });
    fireEvent.change(zipInput, { target: { value: '90210' } });
    fireEvent.change(levelInput, { target: { value: 'Junior' } });

    fireEvent.click(resetButton);

    expect(fullNameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(gpaInput.value).toBe('');
    expect(stateInput.value).toBe('');
    expect(zipInput.value).toBe('');
    expect(levelInput.value).toBe('');
  });

  it('should save input and navigate to quiz page when Create Profile button is clicked', () => {
    const fullNameInput = screen.getByLabelText('Full Name');
    const emailInput = screen.getByLabelText('Email');
    const gpaInput = screen.getByLabelText('GPA');
    const stateInput = screen.getByLabelText('State');
    const zipInput = screen.getByLabelText('Zip Code');
    const levelInput = screen.getByLabelText('Academic Level');
    const createProfileButton = screen.getByText('Create Profile');

    fireEvent.change(fullNameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(gpaInput, { target: { value: '3.5' } });
    fireEvent.change(stateInput, { target: { value: 'California' } });
    fireEvent.change(zipInput, { target: { value: '90210' } });
    fireEvent.change(levelInput, { target: { value: 'Junior' } });

    fireEvent.click(createProfileButton);

    expect(window.location.href).toContain('quiz');
  });

  it('should contain correct options in Academic Level dropdown', () => {
    const levelInput = screen.getByLabelText('Academic Level');
    const options = Array.from(levelInput.options).map(option => option.value);
    expect(options).toEqual(['Freshman', 'Sophomore', 'Junior', 'Senior']);
  });

  it('should contain all US states in State dropdown', () => {
    const stateInput = screen.getByLabelText('State');
    const options = Array.from(stateInput.options).map(option => option.value);
    expect(options).toEqual(US_STATES);
  });
});