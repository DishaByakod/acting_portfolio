import LanguageBar from "./languages";
import "../../index.css"; // Import the CSS file


const Info = ({ title, answer }) => {
  return (
    <li>
      <strong>{title}: </strong> {answer}
    </li>
  );
};

const Details = () => {
  return (
    <section id="details" className="details-section">

      {/* Background */}
      {/* <img src={BG_IMAGE} style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} alt="Gallery" /> */}
      {/* Title */}
      <h2 className="section-heading">Details</h2>
      <div className="details-container">
        <ul className="details-list">
          <Info title="Age" answer="25" />
          <Info title="Height" answer="5'8" />
          <Info title="Weight" answer="70" />
          <Info title="Shoe Size" answer="8" />
          <Info title="Bust size" answer="34" />
          <Info title="Waist Size" answer="32" />
          <Info title="Hips size" answer="45" />
          <Info
            title="Education"
            answer={
              <>
                Innovative Film Academy -{" "}
                <i>6 months of weekend acting course</i>
                <br />
                Saad Khan's acting workshop -{" "}
                <i>1 day workshop and scene study</i>
              </>
            }
          />
          <li>
            <LanguageBar />
          </li>
        </ul>
      </div>

    </section>
  );
};

export default Details;
