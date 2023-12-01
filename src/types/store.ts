export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string
    user: {};
}

export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}

export enum UserActions { 
    "SET_USER" = "SET_USER"
}

export interface SetUser{
    action: UserActions.SET_USER;
    payload: string;
}
export type Actions = ScreenActions|SetUser;