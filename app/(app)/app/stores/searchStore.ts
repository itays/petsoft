import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";

export type SearchState = {
  search: string;
};

export type SearchActions = {
  setSearch: (search: string) => void;
};

export type SearchStore = SearchState & SearchActions;

export const defaultSearchState: SearchState = {
  search: "",
};

export const createSearchStore = (
  initState: SearchState = defaultSearchState
) => {
  return createStore<SearchStore>()(
    devtools(
      (set) => ({
        ...initState,
        setSearch: (search: string) => set({ search }, false, "setSearch"),
      }),
      { name: "searchStore" }
    )
  );
};
