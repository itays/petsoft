"use client";

import { useStore } from "zustand";
import { createPetStore, type PetStore } from "./petStore";
import { createContext, PropsWithChildren, useContext, useRef } from "react";
import { Pet } from "@/lib/types";

export type PetStoreApi = ReturnType<typeof createPetStore>;

export const PetStoreContext = createContext<PetStoreApi | null>(null);

export function PetsProvider({
  children,
  pets,
}: PropsWithChildren<{ pets: Pet[] }>) {
  const storeRef = useRef<PetStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createPetStore({ pets, selectedPet: null });
  }
  return (
    <PetStoreContext.Provider value={storeRef.current}>
      {children}
    </PetStoreContext.Provider>
  );
}

export const usePetStore = <T,>(selector: (store: PetStore) => T): T => {
  const petStoreContext = useContext(PetStoreContext);
  if (!petStoreContext) {
    throw new Error("usePetStore must be used within a PetStoreProvider");
  }
  return useStore(petStoreContext, selector);
};

// Selectors
export const usePetsSelector = () => usePetStore((state) => state.pets);
export const useSelectedPetSelector = () =>
  usePetStore((state) => state.selectedPet);
export const useSetSelectedPetSelector = () =>
  usePetStore((state) => state.setSelectedPet);
export const useHandleCheckoutSelector = () =>
  usePetStore((state) => state.handleCheckout);
