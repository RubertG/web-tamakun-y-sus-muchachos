import { z } from 'zod'

import { CommentInsert } from '../../interfaces/db/db'

const commentInsertSchemaDefinition: Record<
  keyof CommentInsert,
  z.ZodTypeAny
> = {
  approved: z.boolean().optional(),
  comment: z.string().min(1).max(500),
  user_id: z.string().uuid().optional(),
  created_at: z.string().optional(),
  id: z.string().uuid().optional()
}

export const CommentInsertSchema = z.object(
  commentInsertSchemaDefinition
)
