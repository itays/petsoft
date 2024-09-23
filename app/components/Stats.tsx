"use client";

import { usePetsSelector } from "../(app)/app/stores/PetsProvider";

export default function Stats() {
  const pets = usePetsSelector();
  return (
    <section className="text-center">
      <p className="text-2xl font-bold leading-6">{pets.length}</p>
      <p className="opacity-80">current guests</p>
    </section>
  );
}
