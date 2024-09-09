'use client';  // Ensure this is a client-side component

import { useRouter } from 'next/navigation';  // Use next/navigation in the app directory
import { useEffect } from 'react';

const Homepage = () => {
  const router = useRouter();  // Initialize the router

  useEffect(() => {
    // Navigate to /admin when the component mounts
    router.push('/admin');
  }, [router]);

  return null;  // Since you're redirecting, nothing to render
};

export default Homepage;
