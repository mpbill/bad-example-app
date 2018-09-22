import {Action, ActionReducer} from '@ngrx/store';

export interface State {
  username: string;
}

export const initialState: State = {
  username: 'mpbill'
};


export const reducer: ActionReducer<State, Action> = function (state = initialState, action: Action): State {
  switch (action.type) {
    default:
      return state;
  }
};
