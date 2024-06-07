import "./style.scss";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { CarInfo } from "@/types/type";
import { useState } from "react";
import Card from "@/components/shared/Card";
import { useRouter } from "next/navigation";
import Wrapper from "@/components/shared/Wrapper";
import { updateSearchParams } from "@/utils/updateParams";
const CardSection = ({
  data,
  loading,
}: {
  data: CarInfo[];
  loading: boolean;
}) => {
  const router: AppRouterInstance = useRouter();
  const [limit, setLimit] = useState<number>(20);
  return (
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

      {data !== undefined && (
        <button
          onClick={(): void => {
            setLimit(limit + 20);
            let path: string = updateSearchParams("limit", limit);
            router.push(path);
          }}
          className="btn"
        >
          Load More
        </button>
      )}
    </Wrapper>
  );
};

export default CardSection;
