import { locationType } from './location';

export type resortType = {
  _id: string;
  name: string;
  photoUrl: string;
  location: locationType;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
