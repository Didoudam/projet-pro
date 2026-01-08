import { Skill, Experience, formation } from "@prisma/client";

export type UserWithRelations = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  firstName: string | null;
  lastName: string | null;
  isRoot: boolean | null;
  createdAt: Date;
  updatedAt: Date;
  skill: Skill[];
  Experience: (Experience & {
    company: {
      id: string;
      name: string;
      image: string | null;
    } | null;
  })[];
  formation: (formation & {
    company: {
      id: string;
      name: string;
      image: string | null;
    } | null;
  })[];
};
