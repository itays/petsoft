"use client";
import { useStore } from "zustand";
import { createSearchStore, type SearchStore } from "./searchStore";
import { createContext, PropsWithChildren, useContext, useRef } from "react";

export type SearchStoreApi = ReturnType<typeof createSearchStore>;

export const SearchStoreContext = createContext<SearchStoreApi | null>(null);

export function SearchProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<SearchStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createSearchStore();
  }
  return (
    <SearchStoreContext.Provider value={storeRef.current}>
      {children}
    </SearchStoreContext.Provider>
  );
}

export const useSearchStore = <T,>(selector: (store: SearchStore) => T): T => {
  const searchStoreContext = useContext(SearchStoreContext);
  if (!searchStoreContext) {
    throw new Error("useSearchStore must be used within a SearchProvider");
  }
  return useStore(searchStoreContext, selector);
};

// selectors
export const useSearchSelector = () => useSearchStore((state) => state.search);
export const useSetSearchSelector = () =>
  useSearchStore((state) => state.setSearch);
