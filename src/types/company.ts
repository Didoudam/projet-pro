export type Company = {
  id: string;
  name: string;
  activity: string | null;
  image: string | null;
  description: string | null;
  createdAt: Date;
};

export type CompanyAdmin = {
  id: string;
  role: string;
  companyId: string;
  userId: string;
};

export type CompanyWithRelations = Company & {
  companyAdmin?: CompanyAdmin[];
  writer?: {
    id: string;
  };
};
