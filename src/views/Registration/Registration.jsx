import { Card, CardContent, Typography } from '@mui/material';
import DynamicForm from '../../components/DynamicForm';
import { fields } from '../../config/registration/formConfig';
import schema from '../../config/registration/validationSchema';

/**
 * Registration Component
 * Renders the registration form with dynamic fields.
 */
const Registration = () => {
  /**
   * Handle form submission.
   * @param {Object} data - Form data.
   */
  const handleSubmit = (data) => {
    console.log('Form Data:', data);
    // Navigate to quiz page or perform other actions
  };

  /**
   * Handle form reset.
   */
  const handleReset = () => {
    console.log('Form Reset');
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Registration Form
        </Typography>
        <DynamicForm fields={fields} schema={schema} onSubmit={handleSubmit} onReset={handleReset} />
      </CardContent>
    </Card>
  );
};

export default Registration;