import { NavBarHeader, MarketingFooterBrand, AddPetForm } from './ui-components';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function AddPetNavBar() {
  const navigate = useNavigate();

  const overrideNavBar = {
    Home: {
      style: { cursor: 'pointer' },
      onClick: () => navigate('/'), // Redirect on HOME click
    },
    PETSTORE: {
      children: '',
    },
    'Sign Out': {
      style: { cursor: 'pointer' },
      onClick: () => {
        alert('Are you sure you want to sign out?');
        // Add sign out logic if needed
      },
    },
  };

  return <NavBarHeader width={'100%'} overrides={overrideNavBar} />;
}

function AddPet() {

  const overrideFooter = {
    'React.JS': { style: { cursor: 'pointer' } },
    Figma: { style: { cursor: 'pointer' } },
    'AWS DynamoDB': { style: { cursor: 'pointer' } },
    'AWS Amplify': { style: { cursor: 'pointer' } },
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AddPetNavBar />
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
        />
      </div>
      <MarketingFooterBrand width={'100%'} overrides={overrideFooter} />
    </div>
  );
}

export default AddPet;