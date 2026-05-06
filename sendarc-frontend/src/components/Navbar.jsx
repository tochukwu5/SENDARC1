import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useWallet } from '../context/WalletContext'

export default function Navbar() {
  const { wallet, disconnect } = useWallet()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/how-it-works', label: 'How it works' },
    { to: '/countries', label: 'Countries' },
    { to: '/rates', label: 'Rates' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-[#1e2530] bg-[#0D1117]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
       <Link to="/" className="flex items-center gap-2">
  <img src="/logo.jpg" alt="SendArc" className="h-9 w-9 object-contain mb-2" />
  <span className="font-['Space_Grotesk'] text-xl font-bold text-white">Send</span>
  <span className="font-['Space_Grotesk'] text-xl font-bold text-[#00D4FF]">Arc</span>
</Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm transition-colors ${
                pathname === l.to ? 'text-[#00D4FF]' : 'text-[#8892a0] hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <span className="text-xs border border-[#1e2530] text-[#8892a0] px-3 py-1 rounded-full">
            • Built on Arc
          </span>
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          {wallet ? (
            <div className="flex items-center gap-3">
              <Link to="/dashboard">
                <div className="flex items-center gap-2 bg-[#0f1822] border border-[#1e2530] rounded-lg px-3 py-2">
                  <div className="live-dot" />
                  <span className="text-xs font-mono text-white">{wallet.shortAddress}</span>
                  <span className="text-xs text-[#00D4FF] font-semibold">{wallet.balance} USDC</span>
                </div>
              </Link>
              <button
                onClick={disconnect}
                className="text-xs text-[#8892a0] hover:text-red-400 transition-colors"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <Link
              to="/connect"
              className="bg-[#00D4FF] text-[#0D1117] font-['Space_Grotesk'] font-bold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-all hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[#8892a0]" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
            <span className="block w-5 h-0.5 bg-current" />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f1822] border-t border-[#1e2530] px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-[#8892a0] hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/connect"
            className="bg-[#00D4FF] text-[#0D1117] font-bold text-sm px-5 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
