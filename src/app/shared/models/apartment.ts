export interface Apartment {
  id?:number;
  title: string;
  location: string;
  type:ApartmentType;
  price: number;
  image: string;
}

export enum ApartmentType {
  APARTMENT = 'Apartment',
  HOUSE = 'House',
  ROOM = 'Room'
}
