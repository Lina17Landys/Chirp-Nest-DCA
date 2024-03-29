import { NavigateAction,NavigationActions,Screens,UserActions} from "../types/store";


export const navigate = (screen: Screens):NavigateAction => {
    return {
        action:NavigationActions.NAVIGATE,
        payload: screen,
    };
};

export const setUserCredentials = (user: string) => {
    return {
      action: UserActions.SET_USER,
      payload: user,
    };
  };