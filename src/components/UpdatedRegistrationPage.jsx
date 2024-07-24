/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, Card, Grid, TextField, Button, MenuItem, Typography } from '@mui/material';

const schema = z.object({
  fullName: z.string().min(1, { message: "Full Name is required" }),
  emails: z.string().min(1, { message: "Emails are required" }).regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}(,[\w-.]+@([\w-]+\.)+[\w-]{2,4})*$/, { message: "Emails must be comma-separated valid email addresses" }),
  zipCode: z.string().length(5, { message: "ZIP Code must be 5 digits" }).regex(/^\d{5}$/, { message: "ZIP Code is invalid" }),
  academicLevel: z.enum(['freshman', 'sophomore', 'junior', 'senior']),
  gpa: z.string().transform((val) => parseFloat(val)).refine((val) => val >= 0.0 && val <= 4.0, { message: "GPA must be between 0.0 and 4.0" }),
  state: z.string().min(1, { message: "State is required" })
});

const academicLevels = ['freshman', 'sophomore', 'junior', 'senior'];
const usStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const FormField = ({ name, control, label, type = "text", select = false, options = [] }) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        fullWidth
        label={label}
        error={!!error}
        helperText={error ? error.message : null}
        margin="dense"
        variant="outlined"
        select={select}
        type={type}
      >
        {select && options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    )}
  />
);

const RegistrationForm = ({ fields, onSubmit, onClear }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        {fields.map((field) => (
          <Grid item xs={12} sm={6} key={field.name}>
            <FormField {...field} control={control} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          <Button onClick={() => reset()} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
            Clear
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

const RegistrationPage = () => {
  const fields = [
    { name: 'fullName', label: 'Full Name' },
    { name: 'emails', label: 'Emails' },
    { name: 'zipCode', label: 'ZIP Code' },
    { name: 'academicLevel', label: 'Academic Level', select: true, options: academicLevels },
    { name: 'gpa', label: 'GPA', type: 'number' },
    { name: 'state', label: 'State', select: true, options: usStates }
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  const onClear = () => {
    // This function is handled inside RegistrationForm via reset()
  };

  return (
    <Container maxWidth="sm">
      <Card variant="outlined" style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Registration Form
        </Typography>
        <RegistrationForm fields={fields} onSubmit={onSubmit} onClear={onClear} />
      </Card>
    </Container>
  );
};

export default RegistrationPage;