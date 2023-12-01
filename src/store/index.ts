import Storage,{PersistanceKeys} from "../utils/storage";
import { reducer } from "./reducer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { navigate, setUserCredentials } from "./actions";
import{Actions,AppState,Observed,Screens}from "../types/store"

onAuthStateChanged(auth, (user) => {
  if (user) {
    user.email !== null ? dispatch(setUserCredentials(user.email)) : '';
    dispatch(navigate(Screens.DASHBOARD));
  } else {
    dispatch(navigate(Screens.LOGIN));
  }
});

const emptyState: AppState = {
    screen: Screens.LOGIN,
   
    user: {},
};

export let appState = Storage.get<AppState>({
    key: PersistanceKeys.STORE,
    defaultValue: emptyState,
});

let observers: Observed[] = [];

const persistStore = (state: AppState) =>
    Storage.set({ key: PersistanceKeys.STORE, value: state });

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState));
    const newState = reducer(action, clone);
    appState = newState;

    persistStore(newState);
    notifyObservers();
};

export const addObserver = (ref: Observed) => {
    observers = [...observers, ref];
};