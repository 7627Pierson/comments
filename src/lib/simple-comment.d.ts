
export type AuthToken = string
export type CommentId = string
export type DiscussionId = string
export type Email = string
export type URL = string
export type UserId = string

export interface Success {
  code: number,
  message: string,
  body?:(Comment | User | Discussion)
}

export interface Error {
  code: number,
  message: string
}

export interface Discussion {
  id: DiscussionId,
  isLocked: boolean,
  comments?: Comment[]
}

export interface Comment {
  id: CommentId,
  user: Pick<User, "email" | "name" | "id">,
  text: string,
  parentId: (DiscussionId | CommentId ),
  dateCreated: Date
}

type NewComment = Exclude<Comment, "id">
type DeletedComment = Pick<Comment, "id" | "parentId">

export interface User {
  id: UserId,
  verified: boolean,
  email: Email,
  name: string,
  avatar?: URL,
  hash: string,
  isAdmin: boolean
}


