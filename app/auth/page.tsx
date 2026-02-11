'use client';

import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';

export default function AuthPage() {
  const handleGoogleLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <div className="min-h-screen flex bg-black">
      {/* Left Panel: 3/5 ratio */}
      <div className="hidden lg:flex w-3/5 relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 auth-bg" aria-hidden="true" />

        {/* Semi-transparent black overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between p-12 xl:p-16 w-full">
          {/* Top: YouTube Video */}
          <div className="w-full max-w-[640px]">
            <div
              className="relative w-full rounded-2xl overflow-hidden border border-white/10"
              style={{ paddingBottom: '56.25%' }}
            >
              {/* Replace VIDEO_ID with your YouTube video ID */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="nailart ai demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Bottom: Oversized nailart text */}
          <div>
            <h1 className="text-[clamp(5rem,10vw,11rem)] font-black text-white leading-[0.85] tracking-tighter select-none">
              nailart
            </h1>
            <p className="text-white/40 text-lg xl:text-xl mt-4 max-w-md">
              AI로 만드는 유튜브 썸네일, 지금 시작하세요.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel: 2/5 ratio */}
      <div className="w-full lg:w-2/5 flex items-center justify-center relative">
        {/* Mobile-only gradient background */}
        <div className="absolute inset-0 auth-bg lg:hidden" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none lg:hidden"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.6) 70%)',
          }}
          aria-hidden="true"
        />

        {/* Subtle border on left edge (desktop) */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-white/[0.08]" />

        <div className="relative z-10 w-full max-w-[400px] mx-6 sm:mx-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center gap-2.5 no-underline mb-10"
          >
            <Image
              src="/nailart.png"
              alt="nailart ai logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <span className="text-white text-2xl font-bold tracking-tight">
              nailart
              <span className="opacity-50 font-normal ml-1">ai</span>
            </span>
          </Link>

          {/* Glass Card */}
          <div
            className="rounded-2xl p-8 backdrop-blur-xl backdrop-saturate-[1.2]"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
              boxShadow:
                'inset 0 0 0 1px rgba(255,255,255,0.12), 0 20px 60px rgba(0,0,0,0.4)',
            }}
          >
            <h1 className="text-white text-center text-2xl font-bold mb-2">
              시작하기
            </h1>
            <p className="text-white/60 text-center text-sm mb-8">
              Google 계정으로 간편하게 시작하세요
            </p>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-xl text-white font-semibold text-sm cursor-pointer border-0 transition-all duration-200 hover:brightness-125"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                boxShadow:
                  'inset 0 0 0 1px rgba(255,255,255,0.2), 0 8px 24px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(6px) saturate(120%)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google로 계속하기
            </button>

            {/* Terms */}
            <p className="text-white/40 text-center text-xs mt-6 leading-relaxed">
              계속 진행하면{' '}
              <a
                href="#"
                className="text-white/60 underline hover:text-white/80 transition-colors"
              >
                서비스 이용약관
              </a>
              {' '}및{' '}
              <a
                href="#"
                className="text-white/60 underline hover:text-white/80 transition-colors"
              >
                개인정보 처리방침
              </a>
              에 동의하는 것으로 간주됩니다.
            </p>
          </div>

          {/* Back to home */}
          <Link
            href="/"
            className="block text-center text-white/50 text-sm mt-6 no-underline hover:text-white/80 transition-colors"
          >
            ← Back
          </Link>
        </div>
      </div>
    </div>
  );
}
