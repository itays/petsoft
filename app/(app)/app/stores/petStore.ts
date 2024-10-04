import { createStore } from "zustand/vanilla";
import { devtools } from "zustand/middleware";
import { Pet } from "@/lib/types";

export type PetState = {
  pets: Pet[];
  selectedPet: Pet | null;
};

export type PetActions = {
  setPets: (pets: Pet[]) => void;
  setSelectedPet: (pet: Pet) => void;
  handleCheckout: (id: string) => void;
};

export type PetStore = PetState & PetActions;

export const defaultPetState: PetState = {
  pets: [],
  selectedPet: null,
};

export const createPetStore = (initState: PetState = defaultPetState) => {
  return createStore<PetStore>()(
    devtools(
      (set) => ({
        ...initState,
        setPets: (pets: Pet[]) => set({ pets }, false, "setPets"),
        setSelectedPet: (pet: Pet) =>
          set({ selectedPet: pet }, false, "setSelectedPet"),
        handleCheckout(id) {
          set(
            (state) => ({
              ...state,
              pets: state.pets.filter((pet) => pet.id !== id),
              selectedPet: null,
            }),
            false,
            "handleCheckout"
          );
        },
      }),
      { name: "petStore" }
    )
  );
};
