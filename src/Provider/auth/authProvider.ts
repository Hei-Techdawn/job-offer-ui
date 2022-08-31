import httpClient from "../utils/http-client";
import { authResult } from "./type";

export const authProvider = async (username: string, password: string): Promise<authResult> => {
    try {
        const { data: { role } } = await httpClient.get("whoami", { auth: { username: "", password: "" } });
        localStorage.setItem("role", role);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        return authResult.SUCCESS;
    } catch {
        return authResult.FAILED;
    }
};