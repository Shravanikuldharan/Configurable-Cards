import EmpCard from "./../EmpCard/EmpCard";
import { LISTING_ITEMS } from "../Config/items";
import { APP_NAME, APP_DESCRIPTION, PRIMARY_COLOR, SECONDARY_COLOR } from "../Config/app";
import "./Home.css";

function Home() {
  return (
    <div>
      <h1 className="app-name" style={{color: PRIMARY_COLOR}}>
        {APP_NAME}
      </h1>
      
      {APP_DESCRIPTION && (
        <p className="app-description" style={{color: SECONDARY_COLOR}}>
          {APP_DESCRIPTION}
        </p>
      )}

      <div className="employee-container">
        {LISTING_ITEMS.map((employee) => {
          const { name, bio, company, email, city, image, level } = employee;

          return (
            <EmpCard
              level={level}
              name={name}
              bio={bio}
              company={company}
              email={email}
              city={city}
              image={image}
              key={email}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
