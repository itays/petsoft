"use client";

import Image from "next/image";
import { useSelectedPetSelector } from "../(app)/app/stores/PetsProvider";
import { Pet } from "@/lib/types";

export default function PetDetails() {
  const selectedPet = useSelectedPetSelector();
  return (
    <section className="flex flex-col w-full h-full">
      {(!selectedPet && (
        <div className="flex justify-center items-center h-full">
          <EmptyState />
        </div>
      )) || (
        <>
          <TopBar pet={selectedPet!} />

          <OtherInfo pet={selectedPet!} />

          <Notes pet={selectedPet!} />
        </>
      )}
    </section>
  );
}

function TopBar({ pet }: { pet: Pet }) {
  return (
    <div className="flex items-center bg-white px-8 py-5 border-b border-black/10">
      <Image
        src={pet.imageUrl ?? ""}
        alt="selected pet image"
        height={80}
        width={80}
        className="rounded-full h-20 object-cover"
      />
      <h2 className="text-3xl font-semibold leading-7 ml-5 text-black">
        {pet.name}
      </h2>
    </div>
  );
}

function OtherInfo({ pet }: { pet: Pet }) {
  return (
    <div className="flex justify-around py-10 px-5 text-center">
      <div>
        <h3 className="text-base font-medium uppercase text-slate-700">
          Owner name
        </h3>
        <p className="mt-1 text-lg text-slate-800">{pet.ownerName}</p>
      </div>
      <div>
        <h3 className="text-base font-medium uppercase text-slate-700">Age</h3>
        <p className="mt-1 text-lg text-slate-800">{pet.age}</p>
      </div>
    </div>
  );
}

function Notes({ pet }: { pet: Pet }) {
  return (
    <div className="bg-white rounded-md px-7 py-5 mb-9 mx-8 text-black flex-1 border border-black/10">
      {pet.notes}
    </div>
  );
}

function EmptyState() {
  return <p>No pet selected</p>;
}
