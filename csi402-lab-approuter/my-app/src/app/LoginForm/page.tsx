'use client'

import { useState } from 'react';

interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  onTempRegister: (username: string, email: string) => void;
}

export default function LoginForm({ onLogin, onTempRegister }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showTempForm, setShowTempForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      alert('กรุณากรอกข้อมูลให้ครบ');
      return;
    }
    onLogin(username, password);
  };

  const handleTempRegister = () => {
    if (!username || !email) {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }
    onTempRegister(username, email);
  };

  return (
    <div className="w-full max-w-md space-y-4">
      {errorMsg && (
        <div className="text-red-500 text-center">{errorMsg}</div>
      )}
      
      {!showTempForm ? (
        // หน้า Login ปกติ
        <>
          <h2 className="text-xl text-center">เข้าสู่ระบบ</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex gap-4">
            <button
              onClick={handleLogin}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              เข้าสู่ระบบ
            </button>
            <button
              onClick={() => {
                setShowTempForm(true);
                setErrorMsg('');
                setPassword('');
              }}
              className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              ลงทะเบียนชั่วคราว
            </button>
          </div>
        </>
      ) : (
        // หน้าลงทะเบียนชั่วคราว
        <>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex gap-4">
            <button
              onClick={handleTempRegister}
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ลงทะเบียนชั่วคราว
            </button>
            <button
              onClick={() => {
                setShowTempForm(false);
                setErrorMsg('');
                setEmail('');
              }}
              className="flex-1 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              กลับ
            </button>
          </div>
          
        </>
      )}
    </div>
  );
}