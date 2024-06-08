import { useRouter } from "next/navigation";
import "./style.scss";
import Image from "next/image";
import icon1 from "@/assets/logos/icon-1.png";
import icon2 from "@/assets/logos/icon-2.png";
import icon3 from "@/assets/logos/icon-3.png";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { CardType } from "@/types/type";
const Card = ({ make, model, imageSrc, mpg, drive, id }: CardType) => {
  const router: AppRouterInstance = useRouter();
  return (
    <div className="card">
      <div className="image">
        <Image src={imageSrc} alt="img" loading="lazy" />
      </div>
      <div className="headings">
        <h1>
          {make} {model}
        </h1>
        <span>
          $72 <h2>/Day</h2>
        </span>
      </div>
      <div className="icons">
        <span>
          {" "}
          <Image src={icon1} alt="stering" /> <h4>Automatic</h4>
        </span>
        <span>
          {" "}
          <Image src={icon2} alt="wheel" /> <h4>{drive}</h4>
        </span>
        <span>
          {" "}
          <Image src={icon3} alt="fuel" /> <h4>{mpg} mpg</h4>
        </span>
      </div>

      <button onClick={() => router.push(`/search/${id}`)}>
        view more -&gt;
      </button>
    </div>
  );
};

export default Card;
