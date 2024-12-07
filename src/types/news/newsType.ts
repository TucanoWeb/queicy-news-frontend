export interface INewsResponse {
  id: number;
  title: string;
  sub_title: string;
  id_user: number;
  image: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface INewsPayload {
  title: string;
  sub_title: string;
  id_user: number;
  image: string;
  text: string;
}
