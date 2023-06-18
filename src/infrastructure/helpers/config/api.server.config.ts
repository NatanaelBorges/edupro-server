export class ApiServerConfig {
  public static readonly HOST: string = process.env.HOST;

  public static readonly PORT: number = parseInt(process.env.PORT);

  public static readonly APP_NAME: string = process.env.APP_NAME;

  public static readonly APP_DESCRIPTION: string = process.env.APP_DESCRIPTION;

  public static readonly API_VERSION: string = process.env.API_VERSION;

  public static readonly API_ACCESS_TOKEN_HEADER: string =
    process.env.API_ACCESS_TOKEN_HEADER;
}
