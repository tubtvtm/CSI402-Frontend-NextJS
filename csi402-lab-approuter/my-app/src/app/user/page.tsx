'use client'

import { User } from '@/types/user';

interface UserInfoProps {
  user: User;
  onLogout: () => void;
}

export default function UserInfo({ user, onLogout }: UserInfoProps) {
  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 items-center justify-items-center min-h-screen p-8">
      <div className="text-sm text-gray-600">
        Welcome, {user.username} ({user.isTemporary ? 'Temporary Access' : 'Permanent Access'})
      </div>
      <button
        onClick={onLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}