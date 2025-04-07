class CustomException extends Error {
  constructor(message: string, code: number = 500, details?: string) {
    super(message);
    this.name = "CustomException";
    this.code = code;
    this.details = details;
  }

  code: number;
  details?: string;
}

export default CustomException;
