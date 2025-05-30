import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Pet } from './models';
import { NavBarHeader,MarketingFooterBrand, ProfileCard } from './ui-components';


import { useNavigate } from 'react-router-dom';
function ProfilePetNavBar() {
  const navigate = useNavigate();

  const overrideNavBar = {
    "Home": {
      style: { cursor: "pointer" },
      onClick: () => navigate('/') // Redirect on HOME click
    },
    PETSTORE: {
      children: ""
    },
    "Sign Out": {
      children: ""
    }
  };

  return <NavBarHeader width={"100%"} overrides={overrideNavBar} />;
}

function PetProfilePage() {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  const overrideFooter = {
    "React.JS": { style: { cursor: "pointer" } },
    "Figma": { style: { cursor: "pointer" } },
    "AWS DynamoDB": { style: { cursor: "pointer" } },
    "AWS Amplify": { style: { cursor: "pointer" } },
  };

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const petData = await DataStore.query(Pet, id);
        setPet(petData);
      } catch (err) {
        console.error('Error fetching pet:', err);
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) {
    return <div style={{ padding: '2rem' }}>Loading pet details...</div>;
  }

  return (
    <div style={{ backgroundColor: "#2d2f34" }}>
    <ProfilePetNavBar />
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
      <ProfileCard pet={pet}/>
    </div>
    <MarketingFooterBrand width={"100%"} overrides={overrideFooter} />
    </div>
  );
}

export default PetProfilePage;
