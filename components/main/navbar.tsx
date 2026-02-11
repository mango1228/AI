'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { user, loading, signOut } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[min(6vw,48px)] py-3 bg-black/40 backdrop-blur-xl backdrop-saturate-[1.2] border-b border-white/[0.08]">
      {/* Left: Logo + Text */}
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/nailart.png"
          alt="nailart ai logo"
          width={32}
          height={32}
          className="rounded-md"
        />
        <span className="text-white text-lg font-bold tracking-tight">
          nailart
          <span className="opacity-50 font-normal ml-1">ai</span>
        </span>
      </Link>

      {/* Center: Nav links */}
      <div className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white/75 no-underline text-sm font-medium transition-colors duration-200 hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right: Auth section */}
      {loading ? (
        <div className="w-[100px]" />
      ) : user ? (
        <div className="flex items-center gap-3">
          {user.user_metadata?.avatar_url && (
            <Image
              src={user.user_metadata.avatar_url}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          )}
          <span className="text-white/80 text-sm hidden sm:block">
            {user.user_metadata?.full_name || user.email}
          </span>
          <button
            onClick={signOut}
            className="px-4 py-2 rounded-[10px] bg-white/10 text-white text-sm font-semibold border border-white/15 backdrop-blur-lg transition-colors duration-200 hover:bg-white/20 cursor-pointer"
          >
            로그아웃
          </button>
        </div>
      ) : (
        <Link
          href="/auth"
          className="px-5 py-2 rounded-[10px] bg-white/10 text-white no-underline text-sm font-semibold border border-white/15 backdrop-blur-lg transition-colors duration-200 hover:bg-white/20"
        >
          Get Started
        </Link>
      )}
    </nav>
  );
}
