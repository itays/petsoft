"use client";

// import Image from "next/image";
import { useStoreContext } from "../(app)/app/stores/PetsProvider";

export default function PetList() {
  const pets = useStoreContext((state) => state.pets);
  console.log("pets", pets);
  return (
    <ul className="bg-white border-b border-black/10">
      {/* {pets.map((pet) => (
        <li key={pet.id}>
          <button className="flex items-center h-20 w-full cursor-pointer px-5 text-base gap-3 hover:bg-gray-100 focus:bg-gray-100 transition">
            <Image
              src={pet.imageUrl}
              alt="Pet image"
              width={44}
              height={44}
              className="rounded-full object-cover w-11 h-11"
            />
            <p className="font-semibold text-black">{pet.name}</p>
          </button>
        </li>
      ))} */}
    </ul>
  );
}
