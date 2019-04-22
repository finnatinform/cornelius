// Action Types
export enum DisplayActionType {
  TRIGGER_MENU
}

// Display State
export interface DisplayState {
  MenuActive: boolean;
}

// Action Model
export interface DisplayAction {
  Type: DisplayActionType;
  Payload: DisplayState;
}
