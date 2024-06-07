"use client";

import { CarInfo } from "@/types/type";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

const useFetch = (
  fuelType: string,
  yearType: string,
  manufacture: string,
  model: string,
  limit: string
): { data: CarInfo[]; loading: boolean } => {
  const [data, setData] = useState<CarInfo[] | any>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect((): void => {
    fetchDataFromApi(fuelType, yearType, manufacture, model, limit)
      .then((res: any) => {
        setLoading(false);
        setData(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [fuelType, yearType, manufacture, model, limit]);

  return { data, loading };
};

export default useFetch;
