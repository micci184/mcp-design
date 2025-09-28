'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/button/Button';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

interface HeaderProps {
  navItems?: NavItem[];
  isAuthenticated?: boolean;
  onSignIn?: () => void;
  onRegister?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  navItems = [
    { label: 'Products', href: '/products', active: true },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Community', href: '/community' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  isAuthenticated = false,
  onSignIn,
  onRegister,
}) => {
  return (
    <header className="w-full bg-white border-b border-[#D9D9D9]">
      <div className="max-w-[1200px] mx-auto px-8 py-8">
        <div className="flex items-center justify-between flex-wrap gap-6">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg
                  width="24"
                  height="35"
                  viewBox="0 0 24 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 0.5L0.5 5.5V29.5L5.5 34.5H18.5L23.5 29.5V5.5L18.5 0.5H5.5Z"
                    stroke="#1E1E1E"
                    strokeWidth="3.5"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 flex justify-end">
            <ul className="flex flex-wrap gap-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      'px-2 py-2 rounded-lg text-base font-normal transition-colors',
                      'hover:bg-[#F5F5F5]',
                      item.active && 'bg-[#F5F5F5]'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Auth Buttons */}
          {!isAuthenticated && (
            <div className="flex gap-3 w-[178px]">
              <Button
                variant="neutral"
                size="small"
                onClick={onSignIn}
                className="flex-1"
              >
                Sign in
              </Button>
              <Button
                variant="primary"
                size="small"
                onClick={onRegister}
                className="flex-1"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
