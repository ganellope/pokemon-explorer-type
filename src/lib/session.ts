import { SessionOptions } from "iron-session";

export interface SessionData {
    sessionId: string;
    isLoggedIn: boolean;
    answers: { questionId: number; answerIndex: number }[];
}

export const defaultSession: SessionData = {
    sessionId: "",
    isLoggedIn: false,
    answers: [],
};

export const sessionOptions: SessionOptions = {
    password: "complex_password_at_least_32_characters_long",
    cookieName: "iron-session",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};
