"use client";
import CardSection from "@/components/sections/cardSection/CardSection";
import HeroSection from "@/components/sections/heroSection/HeroSection";
import SearchSection from "@/components/sections/searchSection/SearchSection";
import useFetch from "@/hooks/useFetch";
import { CarInfo, SearchParams } from "@/types/type";
import { useSelector } from "react-redux";
export default function Home({ searchParams }: { searchParams: SearchParams }) {
  const { fuelType, year, manufacture, model, limit }: SearchParams =
    searchParams;
  useFetch(fuelType, year, manufacture, model, limit);

  const { data, loading }: { data: CarInfo[]; loading: boolean } = useSelector(
    (state: { carData: CarInfo[]; loading: boolean }) => {
      return { data: state.carData, loading: state.loading };
    }
  );

  return (
    <div>
      <HeroSection />
      <SearchSection />
      <CardSection data={data} loading={loading} />
    </div>
  );
}
