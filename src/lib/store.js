import { create } from "zustand";

export const useSession = create((set) => ({
    session: JSON.parse(localStorage.getItem("session")),
    setSession: (nextSession) =>
    set({
        session: localStorage.setItem("session", JSON.stringify(nextSession)),
    })
}))