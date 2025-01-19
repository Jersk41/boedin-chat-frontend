import { create } from "zustand";

const useDataStore = create((set) => ({
    name: "",
    setName: (name) => set({ name: name }),
    removeName: () => set({ name: "" }),
}));

export default useDataStore;
