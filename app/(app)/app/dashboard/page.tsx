import Branding from "@/app/components/Branding";
import ContentBlock from "@/app/components/ContentBlock";
import PetDetails from "@/app/components/PetDetails";
import PetList from "@/app/components/PetList";
import SearchForm from "@/app/components/SearchForm";
import Stats from "@/app/components/Stats";
import { Pet } from "@/lib/types";

const mockPets: Pet[] = [
  {
    id: "1",
    name: "Benjamin",
    ownerName: "John Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=100&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 2,
    notes:
      "Doesn't like to be touched on the belly. Plays well with other dogs.",
  },
  {
    id: "2",
    name: "Richard",
    ownerName: "Josephine Dane",
    imageUrl:
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=100&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 5,
    notes: "Needs medication twice a day.",
  },
  {
    id: "3",
    name: "Anna",
    ownerName: "Frank Doe",
    imageUrl:
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&q=100&w=1970&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 4,
    notes: "Allergic to chicken.",
  },
];

async function getPets() {
  return new Promise<Pet[]>((resolve) => {
    setTimeout(() => {
      resolve(mockPets);
    }, 1000);
  });
}
export default async function Dashboard() {
  const pets = await getPets();
  console.log(pets);
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>
      <div className="grid md:grid-cols-3 md:grid-rows-[45px_1fr] grid-rows-[45px_300px_500px] gap-4 md:h-96">
        <div className="md:row-start-1 md:row-span-1 md:col-start-1 md:col-span-1">
          <SearchForm />
        </div>
        <div className="md:row-start-2 md:row-span-full md:col-span-1 md:col-start-1">
          <ContentBlock>
            <PetList pets={pets} />
          </ContentBlock>
        </div>
        <div className="md:row-start-1 md:row-span-full md:col-span-full md:col-start-2">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
