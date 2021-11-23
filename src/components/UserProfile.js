import React from 'react';

function UserProfile(props) {
  // Get the URL parameters
  const params = props.match.params;
  return (
    <div>
      Github Login: {params.githubLogin}
    </div>
  );
}

export default UserProfile;
