import Scroller from "../scroller/Scroller";

const Category = ({ title, images }) => {
  return (
    <div
      id={title}
      className="gallery-section"
      style={{ position: "relative" }}
    >
      <div className="gallery-header">
        <h2 className="section-heading">{title}</h2>
      </div>
      {/* <div className="gallery-scroll" ref={scrollRef}> */}
      <Scroller className="gallery-scroll">{images}</Scroller>
    </div>
  );
};

export default Category;
