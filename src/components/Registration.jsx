/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Box, Grid, TextField, Button, MenuItem, Card, CardContent, Typography } from '@mui/material';

// Define validation schema using zod
const schema = z.object({
  fullname: z.string().min(1, 'Full Name is required'),
  emails: z.string().email('Invalid email address').min(1, 'Email is required'),
  gpa: z.preprocess((val) => parseFloat(val), z.number().min(0, 'GPA must be between 0.0 and 4.0').max(4, 'GPA must be between 0.0 and 4.0')),
  state: z.string().min(1, 'State is required'),
  zip: z.string().regex(/^\d{5}$/, 'Invalid ZIP code'),
  level: z.string().min(1, 'Academic Level is required'),
});

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const academicLevels = ['Freshman', 'Sophomore', 'Junior', 'Senior'];

const DynamicForm = ({ fields, onSubmit, onReset }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Box mt={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mb={3}>
          {fields.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <Controller
                name={field.name}
                control={control}
                render={({ field: controllerField, fieldState }) => (
                  <TextField
                    {...controllerField}
                    label={field.label}
                    type={field.type}
                    select={field.type === 'select'}
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error ? fieldState.error.message : ''}
                  >
                    {field.type === 'select' && field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Box mt={2} display="flex" justifyContent="center" gap={2}>
              <Button type="submit" variant="contained" color="primary">
                Create Profile
              </Button>
              <Button type="button" variant="outlined" color="secondary" onClick={() => { reset(); onReset(); }}>
                Reset
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

const Registration = () => {
  const fields = [
    { name: 'fullname', label: 'Full Name', type: 'text' },
    { name: 'emails', label: 'Emails', type: 'email' },
    { name: 'gpa', label: 'GPA', type: 'number' },
    { name: 'state', label: 'State', type: 'select', options: states },
    { name: 'zip', label: 'Zip Code', type: 'text' },
    { name: 'level', label: 'Academic Level', type: 'select', options: academicLevels },
  ];

  const handleSubmit = (data) => {
    console.log('Form Data:', data);
    // Navigate to quiz page or perform other actions
  };

  const handleReset = () => {
    console.log('Form Reset');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Registration Form
        </Typography>
        <DynamicForm fields={fields} onSubmit={handleSubmit} onReset={handleReset} />
      </CardContent>
    </Card>
  );
};

export default Registration;