import Wrapper from "@/components/shared/Wrapper";
import "./style.scss";
import { CarInfo } from "@/types/type";

const SeatchDetails = ({ data }: { data: CarInfo | undefined }) => {
  return (
    <Wrapper>
      <div className="detailsContainer">
        <div className="images">
          <div className="img">
            <img src="/images/model-1.png" alt="image" />
            <img src="/images/model-2.png" alt="image" />
          </div>
          <img src="/images/model-3.png" alt="image" />
        </div>
        <div className="details">
          <h1>
            {data?.make} {data?.model}
          </h1>
          <table>
            <tbody>
              <tr>
                <td>City Mpg</td>
                <td>
                  <span>{data?.city_mpg}</span>
                </td>
              </tr>
              <tr>
                <td>Class</td>
                <td>
                  <span>{data?.class}</span>
                </td>
              </tr>
              <tr>
                <td>Combination Mpg</td>
                <td>
                  <span>{data?.combination_mpg}</span>
                </td>
              </tr>
              <tr>
                <td>Cylinders</td>
                <td>
                  <span>{data?.cylinders}</span>
                </td>
              </tr>
              <tr>
                <td>Displacement</td>
                <td>
                  <span>{data?.displacement}</span>
                </td>
              </tr>
              <tr>
                <td>Drive</td>
                <td>
                  <span>{data?.drive}</span>
                </td>
              </tr>
              <tr>
                <td>Fuel Type</td>
                <td>
                  <span>{data?.fuel_type}</span>
                </td>
              </tr>
              <tr>
                <td>Highway Mpg</td>
                <td>
                  <span>{data?.highway_mpg}</span>
                </td>
              </tr>
              <tr>
                <td>make</td>
                <td>
                  <span>{data?.make}</span>
                </td>
              </tr>
              <tr>
                <td>model</td>
                <td>
                  <span>{data?.model}</span>
                </td>
              </tr>
              <tr>
                <td>Transmition</td>
                <td>
                  <span>{data?.transmission}</span>
                </td>
              </tr>
              <tr>
                <td>Year</td>
                <td>
                  <span>{data?.year}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default SeatchDetails;
