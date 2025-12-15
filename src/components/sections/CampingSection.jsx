import "../../Style/Section/CampingSection.css";
import campingImg from "../../assets/camping.jpg"; // replace with correct path

export default function CampingSection() {
  return (
    <section className="camping-section animate-section">
      
      <h2 className="camp-title">Camping</h2>
      <div className="underline"></div>

      <div className="camp-card">
        <div className="camp-left">
          <h3 className="camp-question">
            Want to camp in the mountains? In a forest or by a river?
          </h3>

          <p>We can take you there.</p>

          <p>
            At Summit Trails, we set up camps in beautiful, quiet places away
            from crowds & close to nature. You just tell us the kind of place
            you’d like to wake up in, and we’ll handle everything else.
          </p>

          <p>Tents, food, setup, safety — all taken care of.</p>

          <p>You just relax and enjoy the view.</p>

          <p>
            Just bring yourself & Summit Trails will do the rest.
          </p>
        </div>

        <div className="camp-right">
          <img src={campingImg} alt="Camping tents" />
        </div>
      </div>

    </section>
  );
}
