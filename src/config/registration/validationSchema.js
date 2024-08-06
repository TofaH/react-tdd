import { z } from 'zod';

const schema = z.object({
  fullname: z.string().min(1, 'Full Name is required'),
  emails: z.array(z.string().email({ message: 'Invalid email address' })).min(1, 'At least one email is required'),
  gpa: z.number().min(0).max(4.0, "GPA must be between 0 and 4.0"),
  state: z.string().min(1, 'State is required'),
  zip: z.string().min(1, 'Zip Code is required'),
  level: z.string().min(1, 'Academic Level is required'),
});

export default schema;