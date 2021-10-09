export default class AppError extends Error {
  constructor(readonly code: number, readonly message: string) {
    super(message);
  }
}
