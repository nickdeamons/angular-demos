export class SetGameName {
  static readonly type = '[app] set game name';
  constructor(public payload: string) {}
}
