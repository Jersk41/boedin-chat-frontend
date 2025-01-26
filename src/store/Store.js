import { create } from "zustand";

const useDataStore = create((set) => ({
    name: "",
    openModal: false,
    token: "",
    setName: (name) => set({ name: name }),
    removeName: () => set({ name: "" }),
    setOpenModal: () => set({ openModal: true }),
    removeOpenModal: () => set({ openModal: false }),
    setToken: (token) => set({token: token}),
    removeToken: () => set({ token: "" }),
}));

export default useDataStore;
