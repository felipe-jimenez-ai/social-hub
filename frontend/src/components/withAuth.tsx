'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthComponent = (props: P) => {
    const router = useRouter();
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
      const isAuthenticated = sessionStorage.getItem('isAuthenticated');

      if (isAuthenticated !== 'true') {
        router.push('/access');
      } else {
        setIsVerified(true);
      }
    }, [router]);

    if (!isVerified) {
      // Return null or a loading spinner while verifying.
      // This prevents the protected content from flashing.
      return null; 
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
