"use client";
import "./style.scss";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { updateSearchParams } from "@/utils/updateParams";
import { yearOptions, fuelOptions } from "@/data/data";
import { Options } from "@/types/type";
import Wrapper from "@/components/shared/Wrapper";

const SearchSection = () => {
  const router: AppRouterInstance = useRouter();
  const [fuelType, setFuelType] = useState<string>("");
  const [yearType, setYearType] = useState<string>("");
  const [manufacture, setManufacture] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (manufacture && model) {
      let path: string = updateSearchParams("manufacture", manufacture);
      router.push(path);
      let path2: string = updateSearchParams("model", model);
      router.push(path2);
    } else if (manufacture) {
      let path: string = updateSearchParams("manufacture", manufacture);
      router.push(path);
    } else if (model) {
      let path2: string = updateSearchParams("model", model);
      router.push(path2);
    }
  };

  return (
    <Wrapper>
      <div className="searchHeading">
        <h1> Discover Your Perfect Ride</h1>
        <h2>Find the Car that Suits You</h2>
      </div>
      <div className="searchContainer">
        <div className="search">
          <form action="#" onSubmit={handleFormSubmit}>
            <input
              id="carManufacture"
              name="carManufacture"
              type="text"
              value={manufacture}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setManufacture(e.target.value)
              }
              placeholder="search for manufacture..."
            />
            <input
              name="carModel"
              type="text"
              value={model}
              onChange={(e: ChangeEvent<HTMLInputElement>): void =>
                setModel(e.target.value)
              }
              placeholder="search for model..."
            />

            <button type="submit">
              <lord-icon
                src="https://cdn.lordicon.com/lwzsvzkp.json"
                trigger="hover"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </button>
          </form>
        </div>
        <div className="options">
          <div className="yearType">
            <select
              name="yearType"
              id="yearType"
              value={yearType}
              onChange={(e: ChangeEvent<HTMLSelectElement>): void =>
                setYearType(e.target.value)
              }
              onClick={(): void => {
                if (yearType) {
                  const path: string = updateSearchParams("year", yearType);
                  router.push(path);
                }
              }}
            >
              {yearOptions.map(
                ({ title, value }: Options): JSX.Element => (
                  <option key={title} value={value}>
                    {title}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="fuelType">
            <select
              name="fuelType"
              id="fuelType"
              value={fuelType}
              onChange={(e: ChangeEvent<HTMLSelectElement>): void => {
                setFuelType(e.target.value);
              }}
              onClick={(): void => {
                if (fuelType) {
                  const path: string = updateSearchParams("fuelType", fuelType);
                  router.push(path);
                }
              }}
            >
              {fuelOptions.map(
                ({ title, value }: Options): JSX.Element => (
                  <option key={title} value={value}>
                    {title}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SearchSection;
