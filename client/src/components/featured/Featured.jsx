import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=hanoi,hcm,danang"
  );

  return (
    <div className="featured">
      {loading ? (
        "Vui lòng đợi ..."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.tripsavvy.com/thmb/CJgbQTqkOx_y-Ypvfm8M7ZvdMVg=/2107x1423/filters:fill(auto,1)/GettyImages-520483268-5a8001f5d8fdd50037283bae.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hà Nội</h1>
              <h2>{data[0]} chỗ nghỉ</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.pY0_lscZoOKQ3yFfsywg3wHaEK&pid=Api&P=0&h=220"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Hồ Chí Minh</h1>
              <h2>{data[1]} chỗ nghỉ</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.psEZB-6An5P2NIXTJsLw7AHaD4&pid=Api&P=0&h=220"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Đà Nẵng</h1>
              <h2>{data[2]} chỗ nghỉ</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
