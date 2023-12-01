export type Observed = ({ render: () => void } & HTMLElement);

export enum Screens {
DASHBOARD = "DASHBOARD",
LOGIN = "LOGIN",
SIGNUP = "SIGNUP",
MAIN = "MAIN",
PROFILE = "PROFILE",
SETTING = "SETTING",
MENUSET = "MENUSET",
PASS = "PASS",
EMAIL = "EMAIL",
DEACTIVATE = "DEACTIVATE",
EXPLORE = "EXPLORE",

}

export type AppState = {
    screen: Screens;
    user: {};
}

export enum UserActions { 
    "SET_USER" = "SET_USER"
}

export enum NavigationActions {
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigateAction {
    action: NavigationActions.NAVIGATE,
    payload: Screens,
}
export interface SetUser{
    action: UserActions.SET_USER;
    payload: string;
}
export type Actions = NavigateAction|SetUser;