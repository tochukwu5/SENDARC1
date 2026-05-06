import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { WalletProvider } from './context/WalletContext'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import ConnectWallet from './pages/ConnectWallet'
import SendMoney from './pages/SendMoney'
import Dashboard from './pages/Dashboard'
import { Transactions, WalletPage, Notifications, Settings } from './pages/DashboardPages'
import { HowItWorks, CountriesPage, RatesPage, AboutPage } from './pages/PublicPages'

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <WalletProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/countries" element={<CountriesPage />} />
          <Route path="/rates" element={<RatesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectWallet />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/wallet" element={<WalletPage />} />
          <Route path="/dashboard/notifications" element={<Notifications />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="*" element={
            <PublicLayout>
              <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
                <p className="text-8xl font-bold text-[#1e2530] font-['Space_Grotesk'] mb-4">404</p>
                <h1 className="text-2xl font-bold mb-3">Page not found</h1>
                <p className="text-[#8892a0] mb-8">This page doesn't exist on SendArc.</p>
                <a href="/" className="bg-[#00D4FF] text-[#0D1117] font-['Space_Grotesk'] font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-all">
                  Back to Home →
                </a>
              </div>
            </PublicLayout>
          } />
        </Routes>
      </BrowserRouter>
    </WalletProvider>
  )
}
