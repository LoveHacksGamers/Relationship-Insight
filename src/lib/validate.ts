import { z as zod } from 'zod';

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});
