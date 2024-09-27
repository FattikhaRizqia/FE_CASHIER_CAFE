import React from 'react';
import 'tailwindcss/tailwind.css';
import backgroundImage from '../../Asset/Cafe.jpeg';

export default function LoginForm() {
  return (
    <div
      className="relative flex min-h-screen items-center justify-center px-6 py-12 lg:px-8"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Path gambar dari folder public
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay untuk efek blur di latar belakang */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Kotak form dengan efek blur */}
      <div className="relative w-full max-w-md backdrop-blur-sm bg-white/50 border border-gray-200 shadow-lg rounded-lg p-8">
        {/* Logo dan Judul */}
        <div className="text-center">
          <img
            alt="Logo Perusahaan"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Buat Akun Anda
          </h2>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="mt-8 space-y-6">
          {/* Full Name Input */}
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              id="full-name"
              name="full-name"
              type="text"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Full Name"
            />
          </div>

          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-900"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-900"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="" disabled selected>
                Select Role
              </option>
              <option value="kasir">Kasir</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Daftar
            </button>
          </div>
        </form>

        {/* Additional Information */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Sudah memiliki akun?{' '}
          <a
            href="/login"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
