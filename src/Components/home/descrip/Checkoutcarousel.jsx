import { useSelector } from "react-redux";
import Carousel from "react-elastic-carousel";
import { nanoid } from "nanoid";

const breakPoints = [{ width: 500, itemsToShow: 4 }];

const Checkoutcarousel = () => {
  const Dataslider = useSelector((state) => state.Data.data);
  const filterData = Dataslider.filter((item) => {
    return item.title.includes("Maxi");
  });
  //  console.log(filterData)
  return (
    <div>
      <h4 style={{ paddingTop: "80px" }}>Frequenty bought together</h4>

      <div className="lookSliderApp">
        <Carousel breakPoints={breakPoints}>
          {filterData.map((item) => {
            return (
              <div className="Checkoutcarousel" key={nanoid()}>
                <img src={item.thumbnail} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
export default Checkoutcarousel