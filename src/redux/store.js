import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";
// import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import reducers from "./reducers";

const PersistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["auth", "user"],
};

const persistedReducer = persistReducer(PersistConfig, reducers);

const logger = createLogger();
const middlewares = applyMiddleware(rpm, thunk, logger);

export let store = createStore(persistedReducer, compose(middlewares));
export let persistor = persistStore(store);