import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import Home from '../pages/Home';
import Body from '../Body'

const LogoutButton = () => {
    const { logout, isAuthenticated} = useAuth0();
    if (isAuthenticated){
        return (
          <>
            <button
              className="btn btn-primary
                    mx-5 my-5 px-4 logoutBtn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
            <br />
            <Body />
          </>
        );
    }
  
  
}

export default LogoutButton