import { Outlet, useNavigate } from 'react-router'
import HomeHeader from './Header'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

function Layout() {
  const {isLoading, user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const navigate = useNavigate();
  useEffect(() =>{
    const callbackApiFunc = async () =>{
      const accessToken = await getAccessTokenSilently();
      const response = await fetch(
        "http://localhost:8080/api/user/create-if-not-exists",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
          method:"POST",
          body: JSON.stringify({
            sub: user?.sub,
            email: user?.email,
          }),
        }
      );
      console.log(response)
    }
    if(!isLoading && !isAuthenticated){
      navigate("/")
    }
    if(user) callbackApiFunc();
  },[ isAuthenticated, isLoading]);
  return (
    <main className='flex min-h-screen flex-col max-w-7xl mx-auto'>
        <HomeHeader />
        <Outlet />
    </main>
  )
}

export default Layout