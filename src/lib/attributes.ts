import { z as zod } from 'zod';

export const AttributeSchema = zod.object({
  createPost: zod.string(),
  backToBlog: zod.string(),
  submitPost: zod.string(),
});
