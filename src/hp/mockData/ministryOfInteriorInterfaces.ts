export interface Person {
  personId(): string;
  firstName: string;
  lastName: string;
  birthday: Date;
}

export interface Address {
  streetAddress: string;
  city: string;
  country: string;
  postalCode: string;
}
