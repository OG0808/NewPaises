import {create} from "zustand";

const useCountryStore = create((set, get) => ({
  myArray: [],
  Region: "",
  Search: "",
  DarkMode:false,
  setcCuntryArray: (newArray) => set({ myArray: newArray }),
  setSearch: (newSearch) =>set({ Search: newSearch }),
  setRegionArray: (newRegionArray) => set({ Region: newRegionArray}),
  setDarkMode:() => set({ DarkMode: !get().DarkMode})
}));

export default useCountryStore;
