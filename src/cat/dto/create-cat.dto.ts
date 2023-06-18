export class CreateCatDto {
  name: string;
  age: number;
  breed: string;
}

export class CreatePostDto {
  title: string;
  description: string;
  media: Array<[]>;
}
