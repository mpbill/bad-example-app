import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromShell from './shel';
export interface State {
  shell: fromShell.State;
}

export const reducers: ActionReducerMap<State> = {
  shell: fromShell.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
