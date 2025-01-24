export interface Car {
  id: string;
  title: string;
  price: number;
  image: string;
  seller: {
    name: string;
    phone: string;
    location: string;
  };
  specs: {
    year: number;
    mileage: number;
    fuel: string;
    transmission: string;
  };
  condition: string;
  rating: number;
  description: string;
}

export interface CarPart {
  id: string;
  name: string;
  price: number;
  image: string;
  condition: string;
  description: string;
  compatibility: string[];
  rating: number;
}

export interface User {
  email: string;
  password: string;
  name: string;
}

export interface CarComment {
  id: number;
  user: string;
  text: string;
  rating: number;
}