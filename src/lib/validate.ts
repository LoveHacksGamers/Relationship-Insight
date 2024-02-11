import { z as zod } from 'zod';

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});
export const signupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  passwordConfirmation: zod.string().min(8),
  DOB: zod.date().max(new Date()),
  Gender: zod.string(),
  displayName: zod.string().min(2),
});

export const PostSchema = zod.object({
  postDiscription: zod.string(),
  postTitle: zod.string(),
});