import { Outlet } from 'react-router'
import HomeHeader from './Header'
import { useAuth0 } from '@auth0/auth0-react'
import { useEffect } from 'react';

function Layout() {
  const {user} = useAuth0();
  useEffect(() =>{
    if(!user){
      window.location.replace("/")
    }
  },[user]);
  return (
    <main className='flex min-h-screen flex-col max-w-7xl mx-auto'>
        <HomeHeader />
        <Outlet />
    </main>
  )
}

export default Layout