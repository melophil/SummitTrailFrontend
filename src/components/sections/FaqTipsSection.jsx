import "../../Style/Section/FaqTipsSection.css";

export default function FaqTipsSection() {
  return (
    <div className="faqtips-page">

      {/* ========================= FAQ SECTION ========================= */}
      <section className="faq-card">
        <h1 className="faq-title">Summit FAQ’s</h1>

        {[
          {
            q: "1. What kind of trips do you offer?",
            a: "Trekking, hiking, expeditions, camping, paragliding, rock climbing, and more.",
          },
          {
            q: "2. Do I need prior experience?",
            a: "Not at all! We have trips for beginners, families, and pros alike.",
          },
          {
            q: "3. What should I pack?",
            a: "We’ll send you a full packing list once you book!",
          },
          {
            q: "4. Is it safe?",
            a: "Yes. Safety is our top priority. Our team is trained and certified.",
          },
          {
            q: "5. How do I book a trip?",
            a: "Use the Contact page or submit an enquiry form — we’ll take it from there.",
          },
          {
            q: "6. Will I get a guide?",
            a: "Yes — every trip includes trained trek leaders and support staff.",
          },
          {
            q: "7. When will I get the itinerary?",
            a: "Right after you fill the enquiry form.",
          },
          {
            q: "8. Can kids or older people join?",
            a: "Yes! We have easy trails and custom plans for all age groups.",
          },
          {
            q: "9. Do you offer group trips?",
            a: "Yes — group departures, custom private trips, and school/college batches.",
          },
          {
            q: "10. What if I’ve never camped before?",
            a: "No worries — we’ll guide you through everything step by step.",
          },
          {
            q: "11. What kind of weather should I expect?",
            a: "Mountain weather changes fast — we’ll guide you based on season.",
          },
          {
            q: "12. Do I need to be very fit?",
            a: "Basic fitness is enough for most trips.",
          },
          {
            q: "13. What if I have health issues?",
            a: "Tell us in advance — we’ll suggest the safest trip for you.",
          },
          {
            q: "14. What if a trip gets cancelled due to weather?",
            a: "We’ll reschedule or offer an alternative option.",
          },
          {
            q: "15. Do you offer refunds?",
            a: "Yes — depends on how close the cancellation is to trip date.",
          },
        ].map((item, idx) => (
          <div className="faq-item" key={idx}>
            <h3>{item.q}</h3>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      {/* ========================= TIPS SECTION ========================= */}
      <section className="tips-section">
        <h1 className="tips-title">⛰️ Tips & Tricks for Your Adventure</h1>
        <p className="tips-intro">
          A little prep goes a long way. These essential tips help you stay safe, comfortable,
          and ready for anything — whether you're trekking, camping, flying, or climbing.
        </p>
      </section>

      {/* TREKKING */}
      <section className="tips-card">
        <h2>🥾 Trekking & Hiking</h2>
        <ul>
          <li>Break in your boots before the trek.</li>
          <li>Carry a reusable bottle — stay hydrated.</li>
          <li>Layer your clothes — mountain weather changes fast.</li>
          <li>Go at your pace — enjoy the journey.</li>
        </ul>
      </section>

      {/* CAMPING */}
      <section className="tips-card">
        <h2>⛺ Camping</h2>
        <ul>
          <li>Carry a torch/headlamp — super helpful at night.</li>
          <li>Pack warm clothes, rain cover & power bank.</li>
          <li>No litter, no noise — respect nature.</li>
          <li>Keep snacks safe from animals.</li>
          <li>Carry extra socks & a cap for cold nights.</li>
        </ul>
      </section>

      {/* ROCK CLIMBING */}
      <section className="tips-card">
        <h2>🧗 Rock Climbing</h2>
        <ul>
          <li>Listen to your instructor — always.</li>
          <li>Focus on form, not speed.</li>
          <li>It’s okay to fall — try again.</li>
          <li>Stretch before & after climbing.</li>
        </ul>
      </section>

      {/* PARAGLIDING */}
      <section className="tips-card">
        <h2>🪂 Paragliding</h2>
        <ul>
          <li>Wear snug clothes — no loose ends.</li>
          <li>Don't overeat before flying.</li>
          <li>Follow your pilot’s instructions.</li>
          <li>Relax and enjoy the view — it’s magical!</li>
          <li>GoPro videos are worth it.</li>
        </ul>
      </section>

      {/* EXPEDITIONS */}
      <section className="tips-card">
        <h2>🏔️ Expeditions</h2>
        <ul>
          <li>Train beforehand — stamina matters.</li>
          <li>Acclimatize — don’t skip rest days.</li>
          <li>Carry less — move better.</li>
          <li>Trust your trek leaders.</li>
          <li>Stay positive — it’s mental + physical.</li>
        </ul>
      </section>


      {/* ========================= AMS SECTION ========================= */}
      <section className="tips-section">
        <h1 className="tips-title">🌬️ AMS Tips</h1>
      </section>

      <section className="tips-card">
        <h2>(Acute Mountain Sickness)</h2>

        <h3>What is it?</h3>
        <p>
          When you go too high too fast, your body might not adjust well. AMS causes headache,
          dizziness, nausea, or tiredness.
        </p>

        <h3>⛰️ How to Avoid It?</h3>
        <ul className="two-column">
          <li>✔️ Go slow — don’t rush uphill.</li>
          <li>✔️ Drink water — not just tea/coffee.</li>
          <li>✔️ Rest when needed.</li>
          <li>✔️ Eat light warm meals.</li>
          <li>✔️ Don’t ignore headache or nausea.</li>
          <li>✔️ Talk to your guide.</li>
          <li>✔️ Use acclimatization days properly.</li>
        </ul>

        <p className="safe-note">Stay aware, stay safe — AMS is common and manageable!</p>
      </section>


      {/* ========================= HAPE SECTION ========================= */}
      <section className="tips-card">
        <h2>🌫️ HAPE</h2>
        <p className="subtitle">(High-Altitude Pulmonary Edema)</p>

        <h3>What is it?</h3>
        <p>
          Fluid builds up in the lungs at high altitude, making it hard to breathe.
        </p>

        <h3>Symptoms</h3>
        <ul>
          <li>Breathlessness at rest</li>
          <li>Chest tightness or pain</li>
          <li>Dry or wet cough</li>
          <li>Weakness or fatigue</li>
          <li>Blue lips/fingertips</li>
        </ul>

        <h3>What to do?</h3>
        <ul>
          <li>Descend immediately</li>
          <li>Inform your guide ASAP</li>
          <li>Stay calm, avoid walking alone</li>
          <li>Oxygen + medical help required</li>
        </ul>

        <p className="bottom-warning">
          These conditions are rare but serious. That’s why at Summit Trails, we always move with trained leaders,
          carry safety gear, and prioritize your health.
        </p>
      </section>



      {/* ========================= HACE SECTION ========================= */}
      <section className="tips-card">
        <h2>🧠 HACE</h2>
        <p className="subtitle">(High-Altitude Cerebral Edema)</p>

        <h3>What is it?</h3>
        <p>Swelling in the brain caused by altitude — extremely dangerous if ignored.</p>

        <h3>Symptoms</h3>
        <ul>
          <li>Headache that won’t go away</li>
          <li>Confusion or odd behavior</li>
          <li>Trouble walking straight</li>
          <li>Nausea or vomiting</li>
          <li>Loss of balance</li>
        </ul>

        <h3>What to do?</h3>
        <ul>
          <li>Descend immediately</li>
          <li>Inform your guide ASAP</li>
          <li>Stay calm — avoid walking alone</li>
          <li>Seek oxygen + medical help</li>
        </ul>

        <p className="bottom-warning">
          These conditions are rare but serious — your safety always comes first.
        </p>
      </section>

    </div>
  );
}
