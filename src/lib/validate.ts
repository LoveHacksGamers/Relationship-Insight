import { z as zod } from 'zod';

export const LoginSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
});
export const signupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  confirm: zod.string().min(8),
  dob: zod.date().max(new Date()),
  gender: zod.number().min(1).max(5),
  username: zod.string().min(2),
}).refine((data) => data.password === data.confirm, "Passwords didn't match.");

export const PostSchema = zod.object({
  body: zod.string(),
  title: zod.string(),
});

export const CommentSchema = zod.object({
  body: zod.string(),
});
