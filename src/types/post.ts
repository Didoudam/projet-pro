export type CommentWriter = {
  id: string;
  userId: string | null;
  companyId: string | null;
  user?: {
    id: string;
    name: string;
    image: string | null;
    firstName: string | null;
    lastName: string | null;
  } | null;
  company?: {
    id: string;
    name: string;
    image: string | null;
  } | null;
};

export type Vote = {
  id: string;
  status: boolean;
  writerId: string;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  writer: CommentWriter;
  replies?: Comment[];
  Vote?: Vote[];
};

export type PostWriter = {
  id: string;
  userId: string | null;
  companyId: string | null;
  user?: {
    id: string;
    name: string;
    image: string | null;
    firstName: string | null;
    lastName: string | null;
  } | null;
  company?: {
    id: string;
    name: string;
    image: string | null;
  } | null;
};

export type Media = {
  id: string;
  url: string;
  altText: string | null;
  type: string | null;
};

export type Post = {
  id: string;
  content: string;
  createdAt: Date;
  writer: PostWriter;
  media?: Media[];
  Comment?: Comment[];
  Vote?: Vote[];
};
