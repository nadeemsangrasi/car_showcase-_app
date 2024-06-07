export type CarInfo = {
  id: number;
  city_mpg: string;
  class: string;
  combination_mpg: string;
  cylinders: string;
  displacement: string;
  drive: string;
  fuel_type: string;
  highway_mpg: string;
  make: string;
  model: string;
  transmission: string;
  year: string;

}

export type Options = {
  title: string;
  value: string
}

export type SearchParams = {
  fuelType: string;
  year: string;
  manufacture: string;
  model: string;
  limit: string
}

export type CardType = {
  title: string;
  imageSrc: string;
  mpg: string;
  drive: string;
  id: string;
}

//types for lord icons
import "react";
type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way";

type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: string;
  delay?: string | number;
};

type LordIconElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
> &
  LordIconProps;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": LordIconElement;
    }
  }
}
