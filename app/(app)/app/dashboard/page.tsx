import Branding from "@/app/components/Branding";
import Stats from "@/app/components/Stats";

export default function Dashboard() {
  return (
    <main>
      <div className="flex items-center justify-between text-white py-8">
        <Branding />
        <Stats />
      </div>
    </main>
  );
}
