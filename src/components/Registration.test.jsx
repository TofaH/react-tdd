/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import RegistrationPage from '../components/UpdatedRegistrationPage';

/* This test suite is for the RegistrationPage component. This page contains a form with multiple fields that need to be filled out.
The form has 6 mandatory fields: fullname(label:Full Name), emails(label: Emails), zip(label:ZIP Code), level(label: Academic Level), gpa(label: GPA), and state(label: State). ZIP code must be a valid US ZIP code, GPA must be a number between 0.0 and 4.0, and emails must be comma-separated valid email addresses.
The form has validation logic to ensure that all fields are filled out correctly before submission. The form also has error messages that are displayed when a field is not filled out correctly. The test cases in this suite cover the following scenarios: */

describe('RegistrationPage', () => {
  it('renders the registration form with all fields', () => {
    render(<RegistrationPage />);
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Emails/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ZIP Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Academic Level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/GPA/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
  });

  it('shows error messages for empty mandatory fields on form submission', () => {
    render(<RegistrationPage />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Full Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Emails are required/i)).toBeInTheDocument();
    expect(screen.getByText(/ZIP Code is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Academic Level is required/i)).toBeInTheDocument();
    expect(screen.getByText(/GPA is required/i)).toBeInTheDocument();
    expect(screen.getByText(/State is required/i)).toBeInTheDocument();
  });

  it('renders all academic level options in the dropdown', () => {
    render(<RegistrationPage />);
    const levelSelect = screen.getByLabelText(/Academic Level/i);
    fireEvent.mouseDown(levelSelect);
    const options = ['freshman', 'sophomore', 'junior', 'senior'];
    options.forEach(option => {
      expect(screen.getByRole('option', { name: new RegExp(option, 'i') })).toBeInTheDocument();
    });
  });

  it('renders all US state options in the dropdown', () => {
    render(<RegistrationPage />);
    const stateSelect = screen.getByLabelText(/State/i);
    fireEvent.mouseDown(stateSelect);
    const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    usStates.forEach(state => {
      expect(screen.getByRole('option', { name: new RegExp(state, 'i') })).toBeInTheDocument();
    });
  });


  it('validates that emails are comma-separated and not empty', () => {
    render(<RegistrationPage />);
    const emailInput = screen.getByLabelText(/Emails/i);
    fireEvent.change(emailInput, { target: { value: 'test1@example.com,test2@example.com' } });
    expect(emailInput.value).toBe('test1@example.com,test2@example.com');
    
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/Emails are required/i)).toBeInTheDocument();
  });

  it('validates that the ZIP code is a valid US ZIP code', () => {
    render(<RegistrationPage />);
    const zipInput = screen.getByLabelText(/ZIP Code/i);
    fireEvent.change(zipInput, { target: { value: '1234' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/ZIP code is invalid/i)).toBeInTheDocument();
    
    fireEvent.change(zipInput, { target: { value: '12345' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.queryByText(/ZIP code is invalid/i)).not.toBeInTheDocument();
  });

  it('validates that GPA is a number between 0.0 and 4.0', () => {
    render(<RegistrationPage />);
    const gpaInput = screen.getByLabelText(/GPA/i);
    fireEvent.change(gpaInput, { target: { value: '5.0' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.getByText(/GPA must be between 0.0 and 4.0/i)).toBeInTheDocument();
    
    fireEvent.change(gpaInput, { target: { value: '3.5' } });
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    expect(screen.queryByText(/GPA must be between 0.0 and 4.0/i)).not.toBeInTheDocument();
  });

  it('allows form submission when all fields are filled correctly', () => {
    render(<RegistrationPage />);
    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Emails/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/ZIP Code/i), { target: { value: '12345' } });
    fireEvent.change(screen.getByLabelText(/Academic Level/i), { target: { value: 'junior' } });
    fireEvent.change(screen.getByLabelText(/GPA/i), { target: { value: '3.5' } });
    fireEvent.change(screen.getByLabelText(/State/i), { target: { value: 'CA' } });
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.queryByText(/fullname is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/emails are required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/zip is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/academic level is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/gpa is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/state is required/i)).not.toBeInTheDocument();
  });
});