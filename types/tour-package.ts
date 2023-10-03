import { locationType } from './location';

export type tourPackageType = {
  _id: string;
  name: string;
  price: number;
  date: string;
  location: locationType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
