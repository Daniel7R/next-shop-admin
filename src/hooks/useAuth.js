import React, { useState, useContext, createContext } from "react";
import Cookie from "js-cookie";
import axios from "axios";

import endPoints from "@services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const auth = useAuthProvider();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

function useAuthProvider() {
    const [userProfile, setUserProfile] = useState(null);

    const signIn = async (email, password) => {
        const options = {
            headers: {
                accept: "*/*",
                "Content-type": "application/json",
            },
        };
        const { data: access_token } = await axios.post(endPoints.auth.login, { email, password }, options);

        if (access_token) {
            const token = access_token.access_token;
            Cookie.set("token", token, {
                expires: 5,
            });

            axios.defaults.headers.Authorization = `Bearer ${token}`;
            const { data: user } = await axios.get(endPoints.auth.profile);
            setUserProfile(user);
        }
    };

    const logout = () => {
        Cookie.remove("token");
        setUserProfile(null);
        delete axios.defaults.headers.Authorization;

        window.location.href = "/login";
    };

    return {
        userProfile,
        signIn,
        logout,
    };
}
