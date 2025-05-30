import React, { useEffect, useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { fetchAuthSession } from 'aws-amplify/auth';
import App from './App';
import User from './User.js';

const Redirector = () => {
  const [loading, setLoading] = useState(true);
  const [isDeveloper, setIsDeveloper] = useState(false);

  useEffect(() => {
    fetchAuthSession()
      .then((session) => {
        console.log('Full Auth Session:', session);
        const groups = session.tokens?.accessToken?.payload["cognito:groups"] || [];
        console.log('Groups:', groups);
        if (groups.includes('Developer')) {
          setIsDeveloper(true);
        }
      })
      .catch((err) => {
        console.error('Error fetching session:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return isDeveloper ? <App /> : <User />;
};

export default withAuthenticator(Redirector);