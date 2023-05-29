export class ApiServerConfig {
  public static readonly HOST: string = process.env.HOST;

  public static readonly PORT: number = parseInt(process.env.PORT);

  // public static readonly ACCESS_TOKEN_HEADER: string = 'djkahdkjsahda';

  public static readonly API_ACCESS_TOKEN_HEADER: string =
    process.env.API_ACCESS_TOKEN_HEADER;
}
