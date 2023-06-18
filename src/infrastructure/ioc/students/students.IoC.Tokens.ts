export class StudentsIoCTokens {
  public static readonly IStudentsService: unique symbol =
    Symbol('IStudentsService');

  public static readonly IStudentsRepository: unique symbol = Symbol(
    'IStudentsRepository',
  );
}
