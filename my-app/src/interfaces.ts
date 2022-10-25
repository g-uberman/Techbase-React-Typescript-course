export interface Address {
    city: string;
    street: string;
    number: number;
}

export interface User {
  name: string;
  age: number;
  province: string;
  address: Address;
  councellor: boolean,
}