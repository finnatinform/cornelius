import { DisplayAction, DisplayState, DisplayActionType } from './types';

export function triggerMenu(_NewState: DisplayState): DisplayAction {
  return {
    Type: DisplayActionType.TRIGGER_MENU,
    Payload: _NewState
  };
}
