import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Pet } from './models';
import { NavBarHeader,AddPetForm, MarketingFooterBrand } from './ui-components';

function UpdatePetNavBar() {
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

function UpdatePetProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');
  const [color, setColor] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const petData = await DataStore.query(Pet, id);
        setPet(petData);
        setName(petData.name);
        setBreed(petData.breed);
        setAge(petData.age);
        setColor(petData.color);
        setAbout(petData.about);
        setImage(petData.image);
      } catch (err) {
        console.error('Error fetching pet:', err);
      }
    };
    fetchPet();
  }, [id]);

  const handleUpdate = async () => {
    await DataStore.save(
      Pet.copyOf(pet, (updated) => {
        updated.name = name;
        updated.breed = breed;
        updated.age = age;
        updated.about = about;
        updated.color = color;
        updated.image = image;
      })
    );
    alert('Pet updated successfully!');
    navigate('/');
  };

  if (!pet) {
    return <div style={{ padding: '2rem' }}>Loading pet details...</div>;
  }

  const overrideFooter = {
    'React.JS': { style: { cursor: 'pointer' } },
    Figma: { style: { cursor: 'pointer' } },
    'AWS DynamoDB': { style: { cursor: 'pointer' } },
    'AWS Amplify': { style: { cursor: 'pointer' } },
  };

  const overrideAddPetForm = {
    'Add Pet': { children: 'Edit Pet' },
    Button: {
      children: 'Update',
      onClick: handleUpdate,
      
    },
    TextField29766922: {
      value: name,
      onChange: (e) => setName(e.target.value),
    },
    TextField29766923: {
      value: breed,
      onChange: (e) => setBreed(e.target.value),
    },
    TextField29766924: {
      value: age,
      onChange: (e) => setAge(e.target.value),
    },
    TextField38674215: {
      value: about,
      onChange: (e) => setAbout(e.target.value),
    },
    TextField38684227:{
      value: color,
      onChange: (e) => setAbout(e.target.value),
    },
    TextField38684234: {
      value: image,
      onChange: (e) => setImage(e.target.value),
    },
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <UpdatePetNavBar/>
      <div
        style={{
          backgroundColor: '#2d2f34',
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AddPetForm
          style={{ textAlign: 'left', padding: '2rem' }}
          overrides={overrideAddPetForm}
        />
      </div>
      <MarketingFooterBrand width={'100%'} overrides={overrideFooter} />
    </div>
  );
}

export default UpdatePetProfilePage;
