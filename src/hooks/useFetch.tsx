"use client";

import { addData } from "@/lib/features/carData/carDataSlice";
import { CarInfo } from "@/types/type";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useFetch = (
  fuelType: string,
  yearType: string,
  manufacture: string,
  model: string,
  limit: string
): void => {
  const dispatch = useDispatch();
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
  dispatch(addData({ data, loading }));
};

export default useFetch;
