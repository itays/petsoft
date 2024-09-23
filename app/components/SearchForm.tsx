"use client";
import { useSearchStore } from "@/app/(app)/app/stores/SearchProvider";

export default function SearchForm() {
  const { search, setSearch } = useSearchStore((state) => state);
  return (
    <form className="h-full w-full">
      <input
        className="w-full h-full bg-white/20 rounded-md px-5 outline-none transition focuse:bg-white/50 hover:bg-white/30 placeholder:text-white/50"
        placeholder="Search pets"
        type="search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </form>
  );
}
