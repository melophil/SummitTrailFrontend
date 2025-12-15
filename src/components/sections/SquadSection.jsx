import "../../Style/Section/SquadSection.css";

export default function SquadSection() {
  const squad = [
    {
      name: "Ashvin Gurung",
      role: "Founder & Trek/Expedition Leader",
      img: "/squad/ashvin1.jpg",
    },
    {
      name: "Deva Bisht",
      role: "Trekking Operations Manager",
      img: "/squad/deva.jpg",
    },
    {
      name: "Anshul Rawat",
      role: "Trek/Expedition Leader",
      img: "/squad/anshul1.png",
    },
    {
      name: "Raman Negi",
      role: "Trek/Expedition Leader",
      img: "/squad/raman.jpg",
    },
    {
      name: "Anshul Rawat",
      role: "Content Creator",
      img: "/squad/anshul2.jpg",
    },
    {
      name: "Yuvraj Sethi",
      role: "Content Creator",
      img: "/squad/yuvraj.jpg",
    },
    {
      name: "Anubhav Bhandari",
      role: "Sales & Marketing Manager",
      img: "/squad/anubhav.jpg",
    },
    {
      name: "Abhay Negi",
      role: "Sales & Marketing Manager",
      img: "/squad/abhay.jpg",
    },
    {
      name: "Piyush",
      role: "Ground & Support Staff",
      img: "/squad/abhay.jpg",
    },
    {
      name: "Raju",
      role: "Ground & Support Staff",
      img: "/squad/abhay.jpg",
    },
  ];

  return (
    <div className="squad-container">
      <h1 className="squad-title">Squad on the Summit</h1>
      <div className="underline"></div>

      <div className="squad-grid">
        {squad.map((member, i) => (
          <div key={i} className="squad-card">
            <img src={member.img} alt={member.name} className="squad-img" />

            <h3 className="squad-name">{member.name}</h3>
            <p className="squad-role">({member.role})</p>
          </div>
        ))}
      </div>
    </div>
  );
}
