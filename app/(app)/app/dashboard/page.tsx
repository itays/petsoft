import Branding from "@/app/components/Branding";
import ContentBlock from "@/app/components/ContentBlock";
import PetDetails from "@/app/components/PetDetails";
import PetList from "@/app/components/PetList";
import SearchForm from "@/app/components/SearchForm";
import Stats from "@/app/components/Stats";

export default function Dashboard() {
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
            <PetList />
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
