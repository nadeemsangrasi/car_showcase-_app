"use client";
import "./style.scss";
import { CarInfo } from "@/types/type";
import SeatchDetails from "../searchDetails/SeatchDetails";
import Wrapper from "@/components/shared/Wrapper";
import Card from "@/components/shared/Card";
import CardSkeleton from "@/components/shared/cardSkeleton/CardSkeleton";
import { useSelector } from "react-redux";
import model1 from "@/assets/images/model-1.png";

const ShowCarDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id }: { id: string } = params;

  const { data, loading }: { data: CarInfo[]; loading: boolean } = useSelector(
    (state: { carData: CarInfo[]; loading: boolean }) => {
      return { data: state.carData, loading: state.loading };
    }
  );

  const carData: CarInfo | undefined = data?.find(
    (carData: CarInfo): boolean => carData.id.toString() == id
  );

  return (
    <div>
      <SeatchDetails data={carData} loading={loading} />
      <Wrapper>
        <div className="cardContainer">
          {!loading ? (
            data?.map((carDetails: CarInfo) => (
              <Card
                make={carDetails.make}
                model={carDetails.model}
                imageSrc={model1}
                mpg={carDetails.city_mpg}
                drive={carDetails.drive}
                id={carDetails.id.toString()}
              />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default ShowCarDetailsPage;
