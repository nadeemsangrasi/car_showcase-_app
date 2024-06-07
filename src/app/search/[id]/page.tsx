"use client";
import "./style.scss";
import { CarInfo } from "@/types/type";
import { fetchDataFromApi } from "@/utils/api";
import React from "react";
import SeatchDetails from "../searchDetails/SeatchDetails";
import Wrapper from "@/components/shared/Wrapper";
import Card from "@/components/shared/Card";

const ShowCarDetailsPage = async ({ params }: { params: { id: string } }) => {
  const { id }: { id: string } = params;

  let data: CarInfo[] | undefined = await fetchDataFromApi();
  const carData: CarInfo | undefined = data?.find(
    (carData: CarInfo): boolean => carData.id.toString() == id
  );

  return (
    <div>
      <SeatchDetails data={carData} />
      <Wrapper>
        <div className="cardContainer">
          {data?.map((carDetails: CarInfo) => (
            <Card
              title={carDetails.model}
              imageSrc="/images/model-1.png"
              mpg={carDetails.city_mpg}
              drive={carDetails.drive}
              id={carDetails.id.toString()}
            />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default ShowCarDetailsPage;
