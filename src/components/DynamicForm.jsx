import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Grid, Button } from '@mui/material';
import InputBuilder from './InputBuilder';

const DynamicForm = ({ fields, schema, onSubmit, onReset }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });

  const handleReset = () => {
    reset();
    onReset();
  };

  return (
    <Box mt={3}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2} mb={3}>
          {fields.map((field) => (
            <Grid item xs={12} sm={6} key={field.name}>
              <InputBuilder field={field} control={control} />
            </Grid>
          ))}
        </Grid>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={handleReset}>Reset</Button>
      </form>
    </Box>
  );
};

export default DynamicForm;