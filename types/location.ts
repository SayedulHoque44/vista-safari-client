import { resortType } from './resort';
import { restaurantType } from './restaurant';
import { spotType } from './spot';
import { tourPackageType } from './tour-package';

export type locationType = {
  _id: string;
  name: string;
  photoUrl: string;
  description: string;
  tourPackages: tourPackageType[];
  resorts: resortType[];
  restaurants: restaurantType[];
  spots: spotType[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};
