/**
 * List of US states for the state dropdown.
 */
export const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

/**
 * List of academic levels for the academic level dropdown.
 */
export const academicLevels = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

/**
 * Fields configuration for the dynamic form.
 */
export const fields = [
  { name: 'fullname', label: 'Full Name', type: 'text' },
  { name: 'emails', label: 'Emails', type: 'emails' },
  { name: 'gpa', label: 'GPA', type: 'number' },
  { name: 'state', label: 'State', type: 'select', options: states },
  { name: 'zip', label: 'Zip Code', type: 'text' },
  { name: 'level', label: 'Academic Level', type: 'select', options: academicLevels },
];