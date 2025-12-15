import "../../Style/Section/AboutUs.css";

export default function AboutUs() {
  return (
    <div className="aboutus-page">

      {/* HEADER */}
      <section className="aboutus-header">
        <h1>About Summit Trails</h1>
        <p className="subtitle">
          Where adventure feels like home — and every trail becomes a story worth telling.
        </p>
      </section>

      {/* CONTENT GRID */}
      <div className="aboutus-grid">

        {/* LEFT COLUMN */}
        <div className="aboutus-card">
          <h2>Our Story</h2>
          <p>
            Summit Trails began in 2025 with a simple idea — to make the mountains feel like home. 
            What started as weekend escapes soon evolved into a mission to guide people safely 
            through the most breathtaking Himalayan trails.
          </p>

          <h2>Our Philosophy</h2>
          <p>
            We believe in slow travel — meaningful moments, mindful journeys, and respecting nature.
          </p>

          <p>
            For us, it’s not just about reaching the summit.  
            It’s about the trail, the people you meet, the stories shared under the stars.
          </p>
        </div>

        {/* CENTER COLUMN */}
        <div className="aboutus-card">
          <h2>About the Founder</h2>

          <p>
            For Mr. Ashvin Gurung, Summit Trails is more than a company — it’s a way of life. 
            His journey began in the stillness of pine forests, the crunch of gravel underfoot, 
            and the quiet peace of snow-capped mountains.
          </p>

          <p>
            Guiding people into the mountains became his calling — helping them find the same peace 
            and purpose he found in the outdoors.
          </p>

          <div className="founder-photos">
            <img src="/founder1.jpg" alt="Founder in mountains" />
            <img src="/founder2.jpg" alt="Founder portrait" />
          </div>

          <p className="quote">“Let people meet the soul behind the boots.”</p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="aboutus-card">
          <img src="/founder-flag.jpg" className="flag-photo" alt="Founder with flag" />

          <p>
            Ashvin didn’t start Summit Trails as a business — he started it to inspire people to reconnect with nature.
          </p>

          <p>
            He wants every trekker to slow down, breathe deeply, and feel the peaceful joy that the mountains 
            have always given him.
          </p>
        </div>

      </div>
    </div>
  );
}
