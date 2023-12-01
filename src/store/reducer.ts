import { appState } from ".";
import { Actions, AppState, NavigationActions,UserActions } from "../types/store";
import firebase from "../utils/firebase";


export const reducer = (currentAction:Actions, currentState:AppState):AppState => {
    const{action, payload} = currentAction;
    const clone=JSON.parse(JSON.stringify(currentState));

    switch (action) {

      case NavigationActions.NAVIGATE:
        return {
            ...clone,
            screen:payload,
        }
        
        case UserActions.SET_USER:
            appState.user=payload;
            return appState

            default:
                return appState;

    }
  
  };