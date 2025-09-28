'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
                <Image
                  src="/figma-logo.svg"
                  alt="Figma Logo"
                  width={40}
                  height={40}
                  priority
                />
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
            <div className="flex gap-3">
              <Button
                variant="neutral"
                size="small"
                onClick={onSignIn}
              >
                Sign in
              </Button>
              <Button
                variant="primary"
                size="small"
                onClick={onRegister}
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
