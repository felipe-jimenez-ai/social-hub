import React from 'react';

interface AuthFormWrapperProps {
  children: React.ReactNode;
}

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ children }) => {
  return (
    <div className="w-full max-w-md">
      {children}
    </div>
  );
};

export default AuthFormWrapper;
