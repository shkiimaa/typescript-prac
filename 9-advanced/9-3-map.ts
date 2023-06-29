// Map Type

{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for... in
    // P에 T의 키값을 할당
  };
  type Readonly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const VideoOp: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: 'dog',
  };
}
