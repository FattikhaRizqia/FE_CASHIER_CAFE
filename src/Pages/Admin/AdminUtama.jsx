// src/Pages/Admin/AdminUtama.jsx
import React, { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline';
import DataUser from './DataUser'; // Import DataUser component
import DataMakanan from './DataMenu'; // Import DataMakanan component
import DataMeja from './DataMeja'; // Import DataMeja component

const navigation = [
  { name: 'Data User', href: 'dataUser', current: true },
  { name: 'Data Makanan', href: 'dataMakanan', current: false },
  { name: 'Data Meja', href: 'dataMeja', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function AdminUtama() {
  const [activePage, setActivePage] = useState('dataUser'); // State untuk menyimpan halaman aktif

  // Fungsi untuk merender komponen berdasarkan halaman aktif
  const renderPage = () => {
    switch (activePage) {
      case 'dataUser':
        return <DataUser />;
      case 'dataMakanan':
        return <DataMakanan />;
      case 'dataMeja':
        return <DataMeja />;
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Disclosure as="nav" className="bg-gray-800 w-64 min-h-screen">
        <div className="px-4 py-6">
          <h1 className="text-white text-xl font-semibold">Admin Panel</h1>
          <div className="mt-5 space-y-1">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="button"
                onClick={() => setActivePage(item.href)} // Ubah halaman aktif saat tombol diklik
                className={classNames(
                  activePage === item.href
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-sm font-medium'
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </div>
      </Disclosure>

      {/* Main Content Area */}
      <div className="flex-1 bg-gray-100">
        {/* Header Section with background */}
        <div className="flex items-center justify-between bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>

        {/* Render halaman aktif */}
        <div className="mt-6 p-6">{renderPage()}</div>
      </div>
    </div>
  );
}
