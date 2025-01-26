'use client'

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { User } from '@/types/user';
import UserInfo from '@/app/user/page';
import LoginForm from '@/app/LoginForm/page';

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // Check temporary access expiration
  useEffect(() => {
    if (user?.isTemporary && user.loginTime) {
      const checkExpiration = setInterval(() => {
        const now = Date.now();
        const timePassed = (now - user.loginTime) / 1000 / 60; // Convert to minutes
        
        if (timePassed >= 30) {
          setUser(null);
          clearInterval(checkExpiration);
          alert('Your temporary access has expired');
        }
      }, 1000);

      return () => clearInterval(checkExpiration);
    }
  }, [user]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin123') {
      setUser({ username, isTemporary: false });
      router.push('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleTempRegister = (username: string) => {
    setUser({
      username,
      isTemporary: true,
      loginTime: Date.now()
    });
    router.push('/dashboard');
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="grid grid-rows-[auto_1fr] gap-8 items-center justify-items-center min-h-screen p-8">
      {user ? (
        <UserInfo user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} onTempRegister={handleTempRegister} />
      )}
    </div>
  );
}
