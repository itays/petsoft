import { createStore as createZustandStore } from "zustand";
import { createContext } from "react";
import { devtools } from "zustand/middleware";
import { Pet } from "@/lib/types";

/**
 * This is an example of how to create a store with props passed in to a component
 * based in the docs 'Initialize state with props' from zustand https://zustand.docs.pmnd.rs/guides/initialize-state-with-props
 */

// 1 - define the state which can also be props passed in to a component
export type StateProps = {
  pets: Pet[];
};

// 2 - define the state and actions
export type State = StateProps & {
  selectedPet: Pet | null;
  setSelectedPet: (pet: Pet) => void;
};

// 3 - create store function that gets the props and returns a zustand store, notice the initProps is that same as the StateProps from above
export const createStore = (initProps?: Partial<StateProps>) => {
  const defaultProps: StateProps = {
    pets: [],
  };
  // 4 - create the store, notice the type is State
  return createZustandStore<State>()(
    devtools(
      (set) => ({
        ...defaultProps,
        ...initProps,
        selectedPet: null,
        setSelectedPet: (pet: Pet) =>
          set({ selectedPet: pet }, false, {
            type: "setSelectedPet",
          }),
      }),
      {
        name: "Pet Store",
      }
    )
  );
};
// 5 - create the store type
export type Store = ReturnType<typeof createStore>;

// 6 - create the context
export const StoreContext = createContext<Store | null>(null);

// continue in store/Provider.tsx
