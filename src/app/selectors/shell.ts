import {State as RootState} from '../reducers';
import {State} from '../reducers/shel';
import {createSelector} from '@ngrx/store';

export const getState = (state: RootState) => state.shell;
export const getUsername = createSelector(getState, (state: State) => state.username);
