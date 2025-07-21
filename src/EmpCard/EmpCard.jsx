import { Building2, MailCheck, User, MapPin } from "lucide-react";
import "./EmpCard.css";
import { PRIMARY_COLOR, TERTIARY_COLOR } from "../Config/app";

function EmpCard({ name, bio, company, city, email, image, level }) {
  const levelColorClass = {
    Intern: "bg-green-500",
    Fresher: "bg-yellow-500",
    Junior: "bg-blue-500",
    Senior: "bg-purple-600",
    Lead: "bg-red-600"
  }[level] || "bg-gray-500";

  return (
    <div
      className="employee-card"
      style={{ borderColor: PRIMARY_COLOR, backgroundColor: TERTIARY_COLOR }}
    >
      <div className={`level-badge ${levelColorClass}`}>{level}</div>

      <div className="employee-header">
        <h1 className="employee-name">{name}</h1>
        <img src={image} alt="profile" className="employee-image" />
      </div>

      <div className="employee-details">
        <p className="employee-info">
          <User size={20} className="employee-info-icon" /> {bio}
        </p>
        <p className="employee-info">
          <Building2 size={20} className="employee-info-icon" /> {company}
        </p>
        <p className="employee-info">
          <MailCheck size={20} className="employee-info-icon" /> {email}
        </p>
        <p className="employee-info">
          <MapPin size={20} className="employee-info-icon" /> {city}
        </p>
      </div>
    </div>
  );
}

export default EmpCard;
