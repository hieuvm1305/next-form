'use client'

import { useRouter } from 'next/router';
import React from 'react'

function PageHouse() {
    const router = useRouter();

    // Use the router in a client-side context, such as in an event handler or useEffect
    const handleNavigation = () => {
      router.push('/');
    };
  
    return (
      <header>
        <h1>Header</h1>
        <button onClick={handleNavigation}>Go to Some Page</button>
      </header>
    );
}

export default PageHouse