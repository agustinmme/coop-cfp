export interface payment {
  mth: string;
  amount: string;
}

export interface IUser {
  id: string;
  name: string;
  course: string[];
  payments: payment[];
  type: string;
}

export interface IUserRaw {
  id: string;
  name: string;
  type: string;
  payments: string;
  course: string;
}
