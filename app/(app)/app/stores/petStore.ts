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
        setPets: (pets: Pet[]) => set({ pets }),
        setSelectedPet: (pet: Pet) => set({ selectedPet: pet }),
      }),
      { name: "petStore" }
    )
  );
};
