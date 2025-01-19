import { create } from "zustand";

const useDataStore = create((set) => ({
    name: "",
    openModal: false,
    setName: (name) => set({ name: name }),
    removeName: () => set({ name: "" }),
    setOpenModal: () => set({ openModal: true }),
    removeOpenModal: () => set({ openModal: false }),
}));

export default useDataStore;
