import { State, Action, StateContext, Selector} from '@ngxs/store';
import { SetGameName } from './app.actions';

export interface AppStateModel {
  gamename: string;
  status?: 'new' | 'over' | 'progress';
}


@State<AppStateModel>({
  name: 'app',
  defaults: {
    gamename: '',
    status: 'new'
  }
})

export class AppState {
  @Selector()
  static getGameName(state: AppStateModel) {
    return state.gamename;
  }

  @Action(SetGameName)
  setGameName({ patchState, setState }: StateContext<AppStateModel>, {payload }: SetGameName) {
    console.log(payload);
    setState({ gamename: payload });
  }

}
