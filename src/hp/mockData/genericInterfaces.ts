export interface IPerson {
  personId: string;
  firstName: string;
  lastName: string;
  birthday?: Date;
  species: "human";
}

export interface Address {
  streetAddress: string;
  city: string;
  country: string;
  postalCode: string;
}
