export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    //required when extending a built-in class
    Object.setPrototypeOf(this, CustomError.prototype);
  }

  //not defining a method, but defining a method signature
  abstract serializeErrors(): { message: string; field?: string }[];
}
