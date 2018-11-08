export class HomeController {
  public static Get(): Promise<string> {
    return new Promise(() => 'GuacamoleFlix c\'est cool!');
  }
}
