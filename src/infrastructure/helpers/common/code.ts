export type CodeDescription = {
  code: number;
  message: string;
};

export class Code {
  public static ENTITY_VALIDATION_ERROR: CodeDescription = {
    code: 1001,
    message: 'Entity validation error.',
  };
}
