import './App.css';
import {
  NavBarHeader,
  Pets,
  MarketingFooterBrand
} from './ui-components';
import { signOut } from 'aws-amplify/auth';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AddPet from './AddPet';
import PetProfilePage from './PetProfilePage';
import UpdatePetProfilePage from './UpdatePetProfilePage';


// Your main page (the one currently showing Pets)
function HomePage() {
  
  function NavBar() {
    const navigate = useNavigate();
  
    const overrideNavBar = {
      "Home": {
        style: { cursor: "pointer" },
        onClick: () => navigate('/') // Redirect on HOME click
      },
      PETSTORE: {
        style: { cursor: "pointer" },
        onClick: () => navigate('/AddPet') // Redirect on HOME click
      },
      "Sign Out": {
        style: { cursor: "pointer" },
        onClick: () => {
          alert("Are you sure you want to sign out?");
          signOut();
        }     
      }
    };
    return <NavBarHeader width={"100%"} overrides={overrideNavBar} />;
  }
  const overrideFooter = {
    "React.JS": { style: { cursor: "pointer" } },
    "Figma": { style: { cursor: "pointer" } },
    "AWS DynamoDB": { style: { cursor: "pointer" } },
    "AWS Amplify": { style: { cursor: "pointer" } },
  };

  return (
    <div>
      <NavBar />
      <header
        style={{
          backgroundColor: "#E0FFFF",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Pets />
        </div>
      </header>
      <MarketingFooterBrand width={"100%"} overrides={overrideFooter} />
    </div>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/AddPet" element={<AddPet />} />
          <Route path="/pet/:id" element={<PetProfilePage />} />
          <Route path="/update/:id" element={<UpdatePetProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
