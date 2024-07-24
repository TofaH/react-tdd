/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// RegistrationPage.jsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { Container, Card, Grid, TextField, Button, MenuItem, Typography } from '@mui/material';

const schema = zod.object({
  fullname: zod.string().min(1, { message: "Full Name is required" }),
  emails: zod.string().min(1, { message: "Emails are required" }).regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}(,[\w-.]+@([\w-]+\.)+[\w-]{2,4})*$/, { message: "Emails must be comma-separated valid email addresses" }),
  zip: zod.string().min(1, { message: "ZIP Code is required" }).regex(/^\d{5}$/, { message: "ZIP code is invalid" }),
  level: zod.string().min(1, { message: "Academic Level is required" }),
  gpa: zod.string().min(1, { message: "GPA is required" }).refine((val) => !isNaN(val) && parseFloat(val) >= 0.0 && parseFloat(val) <= 4.0, { message: "GPA must be between 0.0 and 4.0" }),
  state: zod.string().min(1, { message: "State is required" }),
});

const academicLevels = ['freshman', 'sophomore', 'junior', 'senior'];
const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const Form = ({ fields, onSubmit, onClear }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullname: '',
      emails: '',
      zip: '',
      level: '',
      gpa: '',
      state: '',
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            <Controller
              name={field.name}
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  fullWidth
                  label={field.label}
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                  select={field.type === 'select'}
                >
                  {field.type === 'select' && field.options.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>
        ))}
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="outlined" onClick={() => onClear(reset)}>Clear</Button>
        </Grid>
      </Grid>
    </form>
  );
};

const RegistrationPage = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const onClear = (reset) => {
    reset();
  };

  const fields = [
    { name: 'fullname', label: 'Full Name', type: 'text' },
    { name: 'emails', label: 'Emails', type: 'text' },
    { name: 'zip', label: 'ZIP Code', type: 'text' },
    { name: 'level', label: 'Academic Level', type: 'select', options: academicLevels },
    { name: 'gpa', label: 'GPA', type: 'text' },
    { name: 'state', label: 'State', type: 'select', options: usStates },
  ];

  return (
    <Container maxWidth="md">
      <Card variant="outlined" sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Registration Form
        </Typography>
        <Form fields={fields} onSubmit={onSubmit} onClear={onClear} />
      </Card>
    </Container>
  );
};

export default RegistrationPage;