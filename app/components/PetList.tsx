import Image from "next/image";

export default function PetList() {
  return (
    <ul className="bg-white border-b border-black/10">
      <li>
        <button className="flex items-center h-20 w-full cursor-pointer px-5 text-base gap-3 hover:bg-gray-100 focus:bg-gray-100 transition">
          <Image
            src="/images/pet_placeholder.png"
            alt="Pet image"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <p className="font-semibold">Max</p>
        </button>
      </li>
    </ul>
  );
}
