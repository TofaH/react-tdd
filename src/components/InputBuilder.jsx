import { Controller } from 'react-hook-form';
import { TextField, Autocomplete, Chip } from '@mui/material';

const InputBuilder = ({ field, control }) => {
  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: controllerField, fieldState }) => {
        if (field.type === 'emails') {
          return (
            <Autocomplete
              multiple
              freeSolo
              options={[]}
              value={controllerField.value || []}
              onChange={(event, newValue) => {
                controllerField.onChange(newValue);
              }}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip key={index} variant="outlined" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={field.label}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
          );
        } else if (field.type === 'select') {
          return (
            <Autocomplete
              options={field.options}
              value={controllerField.value || ''}
              onChange={(event, newValue) => {
                controllerField.onChange(newValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={field.label}
                  error={!!fieldState.error}
                  helperText={fieldState.error ? fieldState.error.message : null}
                />
              )}
            />
          );
        } else {
          return (
            <TextField
              {...controllerField}
              label={field.label}
              type={field.type}
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error ? fieldState.error.message : null}
              onChange={(e) => {
                const value = field.type === 'number' ? parseFloat(e.target.value) : e.target.value;
                controllerField.onChange(value);
              }}
            />
          );
        }
      }}
    />
  );
};

export default InputBuilder;