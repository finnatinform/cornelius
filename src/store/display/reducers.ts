import { DisplayState, DisplayAction, DisplayActionType } from './types';

const InitialState: DisplayState = {
  MenuActive: false
};

export function displayReducer(
  _State = InitialState,
  _Action: DisplayAction
): DisplayState {
  switch (_Action.Type) {
    case DisplayActionType.TRIGGER_MENU: {
      return _State;
    }
    default:
      return _State;
  }
}
