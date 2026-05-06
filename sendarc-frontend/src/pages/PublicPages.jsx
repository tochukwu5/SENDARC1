import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COUNTRIES, COMPETITORS } from '../data/constants'
import { Badge, Card, StatCard, LiveBadge } from '../components/UI'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

// ─── HOW IT WORKS ────────────────────────────────────────────────────
export function HowItWorks() {
  const steps = [
    { num: '01', icon: '👛', tag: 'STEP ONE', title: 'Connect your wallet', desc: 'Connect MetaMask, Coinbase Wallet, or any EVM-compatible wallet. No bank account, no KYC for basic transfers. Your wallet is your identity on Arc Network.', details: [{ l: 'Supported wallets', v: 'MetaMask, WalletConnect, Coinbase' }, { l: 'Network', v: 'Arc Testnet (EVM)' }, { l: 'Token required', v: 'USDC (Circle)' }] },
    { num: '02', icon: '💸', tag: 'STEP TWO', title: 'Enter amount & recipient', desc: 'Choose your source chain, enter how much USDC to send, pick the destination country, and paste or scan the recipient\'s wallet address. See exact fees before you send — no surprises.', details: [{ l: 'Source chains', v: 'Arc, Ethereum, Base, Arbitrum, Solana' }, { l: 'Destinations', v: '8 African countries' }, { l: 'Fee shown upfront', v: '~$0.003' }] },
    { num: '03', icon: '⚡', tag: 'STEP THREE', title: 'Arc settles instantly', desc: 'Once you confirm the transaction in your wallet, Arc Network processes and finalises it in under one second. Deterministic finality — no challenge period, no waiting.', details: [{ l: 'Settlement time', v: '< 1 second' }, { l: 'Finality type', v: 'Deterministic · Irreversible' }, { l: 'Network fee', v: '$0.003 USDC' }] },
    { num: '04', icon: '✅', tag: 'STEP FOUR', title: 'Recipient gets USDC', desc: 'Your family receives USDC directly in their wallet. They can hold it, spend it, or cash out through local partners. An on-chain receipt is auto-generated and shareable via WhatsApp.', details: [{ l: 'Receipt type', v: 'On-chain · Downloadable PDF' }, { l: 'Shareable via', v: 'WhatsApp · Copy TX ID' }, { l: 'Explorer', v: 'ArcScan (public)' }] },
  ]

  const faqs = [
    { q: 'Do I need a bank account?', a: 'No. SendArc is fully non-custodial. You only need a crypto wallet like MetaMask. No bank account, no wire transfer, no paperwork.' },
    { q: 'How does the recipient cash out?', a: 'Recipients can hold USDC in their wallet, spend it with USDC-accepting merchants, or use local partners like Mara, Yellow Card, or Binance P2P to convert to local currency.' },
    { q: 'What is Arc Network?', a: 'Arc is a stablecoin-native Layer-1 blockchain built by Circle — the company behind USDC. It offers sub-second finality, USDC-denominated fees, and is backed by Goldman Sachs, Mastercard, and Visa.' },
    { q: 'Is my money safe?', a: 'USDC is fully backed 1:1 by US dollars and issued by Circle. Every transaction is recorded on-chain and publicly verifiable on ArcScan. SendArc never holds your funds.' },
  ]

  return (
    <>
      <Navbar />
      <div className="bg-[#0D1117] min-h-screen">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-[#00D4FF] opacity-[0.05] blur-[100px]" />
          </div>
          <div className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
            <Badge>SIMPLE PROCESS</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-4">How <span className="gradient-text">SendArc</span> Works</h1>
            <p className="text-[#8892a0] text-base max-w-xl mx-auto leading-relaxed">Four simple steps. No bank account needed. Your family receives USDC in under one second — on-chain and verifiable.</p>
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Card key={s.num} className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0a2030] border-2 border-[#00D4FF] flex items-center justify-center">
                    <span className="text-[#00D4FF] font-bold text-sm font-['Space_Grotesk']">{s.num}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="section-label mb-2">{s.tag}</p>
                  <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-3">{s.title}</h3>
                  <p className="text-[#8892a0] text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="bg-[#0D1117] border border-[#1e2530] rounded-xl p-4 space-y-2">
                    {s.details.map(d => (
                      <div key={d.l} className="flex justify-between text-sm border-b border-[#1e2530] pb-2 last:border-0 last:pb-0">
                        <span className="text-[#8892a0]">{d.l}</span>
                        <span className="text-[#00D4FF] font-semibold">{d.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-['Space_Grotesk'] text-center mb-3">Frequently asked questions</h2>
            <p className="text-center text-[#8892a0] text-sm mb-8">Everything you need to know about SendArc</p>
            <div className="space-y-3">
              {faqs.map(f => (
                <Card key={f.q} className="p-5">
                  <p className="font-semibold font-['Space_Grotesk'] text-sm mb-2">{f.q}</p>
                  <p className="text-[#8892a0] text-sm leading-relaxed">{f.a}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link to="/send" className="inline-block bg-[#00D4FF] text-[#0D1117] font-['Space_Grotesk'] font-bold text-base px-10 py-4 rounded-xl hover:opacity-90 transition-all shadow-[0_0_24px_rgba(0,212,255,0.3)]">
              Send Money Now →
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// ─── COUNTRIES PAGE ──────────────────────────────────────────────────
export function CountriesPage() {
  const live = COUNTRIES.filter(c => c.status === 'live')
  const soon = COUNTRIES.filter(c => c.status === 'soon')

  return (
    <>
      <Navbar />
      <div className="bg-[#0D1117] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
          <Badge>SUPPORTED DESTINATIONS</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-4">Send to <span className="gradient-text">8 African Countries</span></h1>
          <p className="text-[#8892a0] text-base max-w-xl mx-auto leading-relaxed">Instant USDC transfers across Africa — with live exchange rates updated every 60 seconds from Arc Network.</p>
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#8892a0]">
            <span className="live-dot" />
            Rates live · Updated 12 seconds ago
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
            {[{ v: '8', l: 'COUNTRIES' }, { v: '<1s', l: 'SETTLEMENT' }, { v: '$0.003', l: 'AVG FEE' }, { v: '24/7', l: 'ALWAYS OPEN' }].map(s => (
              <StatCard key={s.l} value={s.v} label={s.l} />
            ))}
          </div>

          <p className="section-label mb-6">LIVE DESTINATIONS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {live.map(c => (
              <Card key={c.code} className="p-6 hover:border-[#00D4FF] transition-all">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.flag}</span>
                    <div>
                      <p className="font-bold font-['Space_Grotesk'] text-lg">{c.name}</p>
                      <p className="text-xs text-[#8892a0]">{c.currency} · {c.symbol}</p>
                    </div>
                  </div>
                  <LiveBadge />
                </div>

                <div className="bg-[#0D1117] border border-[#1e2530] rounded-xl p-4 mb-4">
                  <p className="text-2xl font-bold text-[#00D4FF] font-['Space_Grotesk']">{c.symbol}{c.rate.toLocaleString()} / USDC</p>
                  <p className="text-xs text-[#8892a0] mt-1">1 USDC = {c.symbol}{c.rate.toLocaleString()} · Updated 12s ago</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[{ l: 'AVG FEE', v: '$0.003' }, { l: 'SETTLEMENT', v: '< 1 second' }, { l: 'MIN SEND', v: '$1 USDC' }, { l: 'MAX SEND', v: '$50,000 USDC' }].map(d => (
                    <div key={d.l} className="bg-[#13181f] rounded-lg p-2.5">
                      <p className="text-[10px] text-[#8892a0] mb-1">{d.l}</p>
                      <p className="text-sm font-semibold font-['Space_Grotesk']">{d.v}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] tracking-widest text-[#8892a0] mb-2">CASHOUT OPTIONS</p>
                  <div className="flex gap-2 flex-wrap">
                    {c.cashout.map(co => (
                      <span key={co} className="text-[10px] border border-[#1e2530] text-[#8892a0] px-2 py-0.5 rounded-full">{co}</span>
                    ))}
                    <span className="text-[10px] border border-[#1e2530] text-[#8892a0] px-2 py-0.5 rounded-full">Hold USDC</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="section-label text-center mb-4">COMING SOON</p>
          <h2 className="text-2xl font-bold text-center mb-2 font-['Space_Grotesk']">Expanding across Africa</h2>
          <p className="text-[#8892a0] text-sm text-center mb-8">More countries launching soon</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {soon.map(c => (
              <Card key={c.code} className="p-5 text-center opacity-60">
                <div className="text-3xl mb-2">{c.flag}</div>
                <p className="font-semibold font-['Space_Grotesk'] mb-2">{c.name}</p>
                <span className="text-[11px] border border-amber-500 text-amber-400 px-2 py-0.5 rounded-full bg-amber-900/10">Coming soon</span>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// ─── RATES PAGE ──────────────────────────────────────────────────────
export function RatesPage() {
  const [sendAmount, setSendAmount] = useState(100)
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0])
  const live = COUNTRIES.filter(c => c.status === 'live')

  return (
    <>
      <Navbar />
      <div className="bg-[#0D1117] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
          <Badge>TRANSPARENT PRICING</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mt-5 mb-4">Live <span className="gradient-text">Exchange Rates</span></h1>
          <p className="text-[#8892a0] text-base max-w-xl mx-auto leading-relaxed">Real-time rates across all 8 African destinations. Fees shown upfront. No hidden charges, ever.</p>
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-[#8892a0]">
            <span className="live-dot" />
            Rates update every 60 seconds · Powered by Arc Network
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-16">
          {/* Calculator */}
          <Card glow className="p-6 mb-10">
            <p className="font-semibold font-['Space_Grotesk'] text-sm mb-5">Rate calculator — see what your family receives</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center mb-4">
              <div className="bg-[#0D1117] border border-[#1e2530] rounded-xl p-4">
                <p className="text-[10px] tracking-widest text-[#8892a0] mb-2">YOU SEND</p>
                <input type="number" value={sendAmount} onChange={e => setSendAmount(Number(e.target.value) || 0)}
                  className="w-full bg-transparent text-white text-2xl font-bold outline-none font-['Space_Grotesk'] mb-1" />
                <p className="text-xs text-[#8892a0]">USDC · from your wallet</p>
              </div>
              <div className="text-center text-[#00D4FF] text-2xl">→</div>
              <div className="bg-[#0D1117] border border-[#1e2530] rounded-xl p-4">
                <p className="text-[10px] tracking-widest text-[#8892a0] mb-2">THEY RECEIVE</p>
                <div className="flex items-end gap-2">
                  <p className="text-2xl font-bold text-[#00D4FF] font-['Space_Grotesk']">{(sendAmount * selectedCountry.rate).toLocaleString()}</p>
                  <select value={selectedCountry.code} onChange={e => setSelectedCountry(COUNTRIES.find(c => c.code === e.target.value))}
                    className="bg-[#1e2530] text-white text-xs rounded-md px-2 py-1 outline-none mb-0.5">
                    {live.map(c => <option key={c.code} value={c.code}>{c.flag} {c.currency}</option>)}
                  </select>
                </div>
                <p className="text-xs text-[#8892a0] mt-1">{selectedCountry.name}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: 'EXCHANGE RATE', v: `${selectedCountry.symbol}${selectedCountry.rate}`, color: 'text-[#00D4FF]' },
                { l: 'ARC NETWORK FEE', v: '$0.003', color: 'text-green-400' },
                { l: 'YOU SAVE VS WIRE', v: '-$24.97', color: 'text-green-400' },
              ].map(d => (
                <div key={d.l} className="bg-[#0D1117] border border-[#1e2530] rounded-xl p-3">
                  <p className="text-[10px] text-[#8892a0] mb-1">{d.l}</p>
                  <p className={`font-bold font-['Space_Grotesk'] ${d.color}`}>{d.v}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Rates table */}
          <p className="section-label mb-2">LIVE RATES</p>
          <h2 className="text-xl font-bold font-['Space_Grotesk'] mb-1">All destination rates</h2>
          <p className="text-[#8892a0] text-sm mb-5">Per 1 USDC sent · Rates refreshed every 60 seconds</p>

          <Card className="overflow-hidden mb-10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1e2530] bg-[#13181f]">
                  {['COUNTRY', 'EXCHANGE RATE', 'SENDARC FEE', 'SETTLEMENT', 'SAVE VS WIRE', 'STATUS'].map(h => (
                    <th key={h} className="px-5 py-3 text-left text-[10px] tracking-widest text-[#8892a0] font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {live.map(c => (
                  <tr key={c.code} className="border-b border-[#0f1520] hover:bg-[#0f1822] transition-colors">
                    <td className="px-5 py-4"><div className="flex items-center gap-2"><span className="text-xl">{c.flag}</span><div><p className="font-semibold font-['Space_Grotesk']">{c.name}</p><p className="text-[10px] text-[#8892a0]">{c.currency}</p></div></div></td>
                    <td className="px-5 py-4 text-[#00D4FF] font-semibold">{c.symbol}{c.rate.toLocaleString()}</td>
                    <td className="px-5 py-4 text-green-400 font-semibold">$0.003</td>
                    <td className="px-5 py-4 text-green-400">&lt; 1 second</td>
                    <td className="px-5 py-4 text-green-400 font-semibold">~$24.97</td>
                    <td className="px-5 py-4"><LiveBadge /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          {/* Fee comparison */}
          <p className="section-label mb-2">FEE COMPARISON</p>
          <h2 className="text-xl font-bold font-['Space_Grotesk'] mb-1">SendArc vs the old way</h2>
          <p className="text-[#8892a0] text-sm mb-5">Sending $100 to Nigeria — all providers compared</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COMPETITORS.map(c => (
              <div key={c.name} className={`rounded-xl p-6 text-center border ${c.badge === 'best' ? 'bg-[#0a2030] border-[#00D4FF]' : 'bg-[#0f1822] border-[#1e2530]'}`}>
                <p className="text-[11px] text-[#8892a0] tracking-wider mb-3 font-['Space_Grotesk']">{c.name}</p>
                <p className={`text-3xl font-bold font-['Space_Grotesk'] mb-2 ${c.badge === 'best' ? 'text-[#00D4FF]' : 'text-red-400'}`}>{c.fee}</p>
                <p className="text-xs text-[#8892a0] mb-4">{c.time}</p>
                {c.badge === 'best'
                  ? <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-green-900/30 border border-green-500 text-green-400">Best value</span>
                  : <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-red-900/20 border border-red-500 text-red-400">Avoid</span>
                }
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

// ─── ABOUT PAGE ──────────────────────────────────────────────────────
export function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#0D1117] min-h-screen">
        {/* Hero */}
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge>OUR STORY</Badge>
            <h1 className="text-4xl font-bold mt-5 mb-4 font-['Space_Grotesk']">Built by an African developer, <span className="gradient-text">for Africa</span></h1>
            <p className="text-[#8892a0] leading-relaxed mb-4 text-sm">SendArc was born from a simple frustration — watching family members receive less money than was sent, eaten up by fees and delays from legacy remittance providers.</p>
            <p className="text-[#8892a0] leading-relaxed text-sm">We built SendArc on Arc Network because it is the most direct and honest infrastructure for moving value across borders. Near-zero fees. Sub-second finality. USDC backed 1:1 by US dollars.</p>
          </div>
          <Card glow className="p-6">
            <p className="section-label mb-3">OUR MISSION</p>
            <p className="text-base leading-relaxed text-white italic border-l-2 border-[#00D4FF] pl-4">
              More money should reach the family, not the middleman. Building instant, borderless remittances with stablecoins — predictable fees, zero delays. The new way to send money home.
            </p>
          </Card>
        </div>

        {/* Problem */}
        <div className="bg-[#0f1822] border-t border-b border-[#1e2530] py-14 px-6 mb-14">
          <div className="max-w-6xl mx-auto">
            <p className="section-label text-center mb-3">THE OPPORTUNITY</p>
            <h2 className="text-2xl font-bold text-center mb-3 font-['Space_Grotesk']">Africa is the world's largest remittance market</h2>
            <p className="text-center text-[#8892a0] text-sm max-w-xl mx-auto mb-10">And the most underserved. Sub-Saharan Africa pays the highest remittance fees in the world — an average of 8% per transaction.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { num: '$54B', title: 'Sent to Sub-Saharan Africa annually', desc: 'Africa receives over $54 billion in remittances every year from the diaspora.' },
                { num: '8%', title: 'Average remittance fee to Africa', desc: 'Nearly 3x what it costs using stablecoins on Arc Network.' },
                { num: '$0.003', title: 'SendArc fee per transaction', desc: 'Fractions of a cent — regardless of whether you send $10 or $10,000.' },
              ].map(s => (
                <Card key={s.num} className="p-6">
                  <div className="text-3xl font-bold text-[#00D4FF] font-['Space_Grotesk'] mb-2">{s.num}</div>
                  <p className="font-semibold font-['Space_Grotesk'] mb-2 text-sm">{s.title}</p>
                  <p className="text-xs text-[#8892a0] leading-relaxed">{s.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-6xl mx-auto px-6 mb-14">
          <p className="section-label mb-3">THE BUILDER</p>
          <h2 className="text-2xl font-bold mb-8 font-['Space_Grotesk']">Who's behind SendArc</h2>
          <Card className="p-7 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-[#0a2030] border-2 border-[#00D4FF] flex items-center justify-center text-2xl font-bold text-[#00D4FF] font-['Space_Grotesk'] flex-shrink-0">DE</div>
            <div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] mb-1">David Emeremgini</h3>
              <p className="text-sm text-[#00D4FF] mb-3">Founder & Fullstack Developer</p>
              <p className="text-sm text-[#8892a0] leading-relaxed mb-4">David is a MERN stack developer based in Enugu, Nigeria, with over 4 years of experience building production-grade web applications. He studied Computer Statistics at the University of Nigeria, Nsukka, and currently works as a Fullstack Developer at Enzo Solution Network while building SendArc as an open contribution to Africa's financial infrastructure.</p>
              <div className="flex gap-2 flex-wrap">
                {['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Web3', 'Enugu, Nigeria 🇳🇬'].map(t => (
                  <span key={t} className="text-xs border border-[#1e2530] text-[#8892a0] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Arc Banner */}
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <div className="bg-[#0a2030] border-2 border-[#00D4FF] rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#0D1117] border border-[#00D4FF] rounded-lg px-4 py-2 text-[#00D4FF] font-bold text-sm">Arc Network</div>
              <div>
                <p className="font-bold font-['Space_Grotesk']">Built on Arc — powered by Circle</p>
                <p className="text-xs text-[#8892a0] mt-0.5">Stablecoin-native Layer-1 · Backed by Goldman Sachs, Mastercard &amp; Visa</p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
              {[{ v: '$0.003', l: 'AVG FEE PER TX' }, { v: '<1s', l: 'FINALITY' }, { v: '100%', l: 'USDC BACKED' }, { v: 'EVM', l: 'COMPATIBLE' }].map(s => (
                <div key={s.l} className="text-center bg-[#0D1117] border border-[#1e2530] rounded-xl p-4">
                  <p className="text-2xl font-bold text-[#00D4FF] font-['Space_Grotesk']">{s.v}</p>
                  <p className="text-[10px] text-[#8892a0] tracking-widest mt-1">{s.l}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {['Goldman Sachs', 'Mastercard', 'Visa', 'Circle (USDC)', 'CCTP'].map(b => (
                <span key={b} className="text-xs bg-[#13181f] border border-[#1e2530] px-3 py-1.5 rounded-lg text-[#8892a0]">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
