import {
  DISPLAY_NAME_EDIT_TOGGLE,
  EXTERNAL_PROFILE_DIALOG_HIDE,
  EXTERNAL_PROFILE_DIALOG_SHOW,
  EXTERNAL_PROFILE_REMOVE_DIALOG_HIDE,
  EXTERNAL_PROFILE_REMOVE_DIALOG_SHOW
} from "./actions";

export const account = (
  state = {
    showExternalProfileDialog: false,
    showRemoveExternalProfileDialog: false,
    displayNameEdit: false,
    removingProfileId: "",
    removingProfileType: ""
  },
  action
) => {
  switch (action.type) {
    case EXTERNAL_PROFILE_DIALOG_SHOW:
      return {
        ...state,
        showExternalProfileDialog: true
      };
    case EXTERNAL_PROFILE_DIALOG_HIDE:
      return {
        ...state,
        showExternalProfileDialog: false
      };
    case EXTERNAL_PROFILE_REMOVE_DIALOG_SHOW:
      return {
        ...state,
        showRemoveExternalProfileDialog: true,
        removingProfileId: action.externalProfileId,
        removingProfileType: action.externalProfileType
      };
    case EXTERNAL_PROFILE_REMOVE_DIALOG_HIDE:
      return {
        ...state,
        showRemoveExternalProfileDialog: false
      };
    case DISPLAY_NAME_EDIT_TOGGLE:
      return {
        ...state,
        displayNameEdit: action.status
      };
    default:
      return state;
  }
};