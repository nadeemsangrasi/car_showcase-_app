"use client";

// import CardSection from "@/components/sections/cardSection/CardSection";
// import HeroSection from "@/components/sections/heroSection/HeroSection";
// import SearchSection from "@/components/sections/searchSection/SearchSection";
// import useFetch from "@/hooks/useFetch";
// import { CarInfo, SearchParams } from "@/types/type";
// export default function Home({ searchParams }: { searchParams: SearchParams }) {
//   const { fuelType, year, manufacture, model, limit }: SearchParams =
//     searchParams;
//   const { data, loading }: { data: CarInfo[]; loading: boolean } = useFetch(
//     fuelType,
//     year,
//     manufacture,
//     model,
//     limit
//   );

//   return (
//     <div>
//       <HeroSection />
//       <SearchSection />
//       <CardSection data={data} loading={loading} />
//     </div>
//   );
// }

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
