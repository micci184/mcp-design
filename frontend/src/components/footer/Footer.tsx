'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sections?: FooterSection[];
  className?: string;
}

const defaultSections: FooterSection[] = [
  {
    title: 'Use cases',
    links: [
      { label: 'UI design', href: '#' },
      { label: 'UX design', href: '#' },
      { label: 'Wireframing', href: '#' },
      { label: 'Diagramming', href: '#' },
      { label: 'Brainstorming', href: '#' },
      { label: 'Online whiteboard', href: '#' },
      { label: 'Team collaboration', href: '#' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Design', href: '#' },
      { label: 'Prototyping', href: '#' },
      { label: 'Development features', href: '#' },
      { label: 'Design systems', href: '#' },
      { label: 'Collaboration features', href: '#' },
      { label: 'Design process', href: '#' },
      { label: 'FigJam', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Best practices', href: '#' },
      { label: 'Colors', href: '#' },
      { label: 'Color wheel', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Developers', href: '#' },
      { label: 'Resource library', href: '#' },
    ],
  },
];

export const Footer: React.FC<FooterProps> = ({
  sections = defaultSections,
  className,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'bg-white border-t border-[#D9D9D9]',
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto px-8 pt-8 pb-40">
        <div className="flex flex-wrap gap-4">
          {/* Logo and Social Section */}
          <div className="w-[262px] flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/figma-logo.svg"
                alt="Figma Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-lg font-semibold">Figma</span>
            </Link>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
              >
                YouTube
              </Link>
              <Link
                href="#"
                className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
              >
                Facebook
              </Link>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-[#757575] mt-auto">
              © {currentYear} Figma, Inc.
            </p>
          </div>

          {/* Link Sections */}
          {sections.map((section, index) => (
            <div key={index} className="w-[262px]">
              <h3 className="text-sm font-semibold text-[#1E1E1E] pb-4 mb-3 border-b border-[#F5F5F5]">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#757575] hover:text-[#1E1E1E] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
