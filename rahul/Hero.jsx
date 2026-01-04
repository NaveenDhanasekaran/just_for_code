import ProjectCards from "./ProjectCards";
import AptirixLogo from "../AptirixLogo";
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const openSolutionsPage = () => {
    navigate('/solutions');
  };

  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: 'rgb(237, 236, 242)' }}>
      {/* Background Blur */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "660px",
          height: "660px",
          borderRadius: "660px",
          background: "rgba(184, 138, 0, 0.35)",
          filter: "blur(275px)",
          top: "100px",
          right: "200px",
        }}
      />

      {/* Navbar */}
      <div className="relative z-10 px-6 pt-8 pb-3">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Logo */}
          <AptirixLogo className="w-48 h-auto" />

          {/* Navigation Links */}
          <div className="flex items-center gap-12 text-[22px]">
            <button 
              onClick={openSolutionsPage}
              className="flex items-center gap-2 text-[#6a6a6a] transition-colors hover:text-[#000000]"
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 500,
                WebkitFontSmoothing: 'antialiased',
                letterSpacing: 'normal',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Solutions
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4z"
                />
              </svg>
            </button>

            <a 
              href="#"
              className="text-[#6a6a6a] transition-colors hover:text-[#000000]"
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 500,
                WebkitFontSmoothing: 'antialiased',
                letterSpacing: 'normal',
                textDecoration: 'none'
              }}
            >
              Jobs
            </a>

            <a
              href="#"
              className="transition-opacity hover:opacity-80"
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 600,
                WebkitFontSmoothing: 'antialiased',
                letterSpacing: 'normal',
                textDecoration: 'none',
                background: 'linear-gradient(180deg, #DE4396 0%, #0D1C9F 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Log in
            </a>

            <a
              href="#"
              className="transition-opacity hover:opacity-90"
              style={{ 
                fontFamily: 'Inter',
                fontWeight: 600,
                WebkitFontSmoothing: 'antialiased',
                letterSpacing: 'normal',
                textDecoration: 'none',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '18px',
                padding: '12px 24px'
              }}
            >
              Sign Up
            </a>
          </div>
        </nav>
      </div>

      {/* Hero Content */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center min-h-[560px]">
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center mt-12">
            <h1
              style={{
                fontFamily: "Inter",
                fontSize: "53px",
                fontWeight: 800,
                lineHeight: "71px",
                color: "#1A202C",
                maxWidth: "720px",
                marginBottom: "28px",
              }}
            >
              Built for{" "}
              <span
                style={{
                  background:
                    "linear-gradient(180deg, #DE4396 0%, #D459E8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Real Interviews
              </span>
              <br />
              Not{" "}
              <span
                style={{
                  background:
                    "linear-gradient(225deg, #F7666F 0%, #406AFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Resume
              </span>{" "}
              <span style={{ color: "#000" }}>Guess work</span>
            </h1>

            <p
              style={{
                fontFamily: "Inter",
                fontSize: "25px",
                lineHeight: "36px",
                color: "#4a5568",
                maxWidth: "717px",
              }}
            >
              We replace guessing with live AI interviews and verifiable skill
              signals — A Hiring System Built on Proof, Not Opinion.
            </p>

            {/* SVG Circle with Arrow and Sign in */}
            <div className="mt-8 flex items-center gap-4">
              <div className="animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="98" viewBox="0 0 100 98" fill="none">
                  <path d="M50 2C76.5479 2 98 23.0805 98 49C98 74.9195 76.5479 96 50 96C23.452 96 2 74.9195 2 49C2 23.0805 23.452 2 50 2Z" stroke="url(#paint0_linear_33_3038)" strokeWidth="4"/>
                  {/* Arrow */}
                  <path d="M40 49L60 49M60 49L53 42M60 49L53 56" stroke="url(#paint0_linear_33_3038)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_33_3038" x1="50" y1="0" x2="50" y2="98" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DE4396"/>
                      <stop offset="1" stopColor="#0D1C9F"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              
              <span 
                style={{
                  color: '#000',
                  fontFamily: 'Inter',
                  fontSize: '22px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: 'normal'
                }}
              >
                Sign in
              </span>
            </div>

            {/* Learn More Links */}
            <div className="mt-8 flex flex-col gap-2">
              <a 
                href="#" 
                style={{
                  color: '#0084DD',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  lineHeight: 'normal',
                  letterSpacing: '3.6px',
                  textDecoration: 'none'
                }}
              >
                Learn more — HR
              </a>
              <a 
                href="#" 
                style={{
                  color: '#0084DD',
                  fontFamily: 'Inter',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 800,
                  lineHeight: 'normal',
                  letterSpacing: '3.6px',
                  textDecoration: 'none'
                }}
              >
                Learn more — Candidates
              </a>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="flex justify-end">
            <ProjectCards />
          </div>
        </div>
      </div>

      {/* Mouse Icon - Bottom Center */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div 
          style={{
            width: '38px',
            height: '53px',
            borderRadius: '24px',
            border: '3px solid #6A6A6A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none">
            <rect x="1" y="1" width="14" height="24" rx="7" stroke="#6A6A6A" strokeWidth="1.5" fill="none"/>
            <circle cx="8" cy="8" r="1" fill="#6A6A6A"/>
          </svg>
        </div>
      </div>
    </section>
  );
}