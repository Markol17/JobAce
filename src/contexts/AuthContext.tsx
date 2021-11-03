import React, { createContext, useReducer } from "react";

export const AuthContext = createContext<{
	user: any;
	dispatch: React.Dispatch<any>;
}>({ user: undefined, dispatch: () => null });

export const SET_USER = "setUser";
const AuthReducer = (state: { user: any }, action: { type: string; user: any }) => {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.user };
		default:
			return state;
	}
};

const AuthContextProvider = (props: { children: React.ReactNode }) => {
	const [AuthValues, dispatch] = useReducer(AuthReducer, { user: undefined });

	return <AuthContext.Provider value={{ ...AuthValues, dispatch }}>{props.children}</AuthContext.Provider>;
};

export default AuthContextProvider;
