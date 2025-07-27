import React, { useEffect, useState } from 'react';
import { Star, Twitter, Instagram, Twitch, Copy, ExternalLink, Sparkles } from 'lucide-react';
import ParticleSystem from './components/ParticleSystem';
import GlowingButton from './components/GlowingButton';
import CoinChart from './components/CoinChart';
import { FaTelegramPlane } from "react-icons/fa";
import LiveStats from './components/LiveStats';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contractAddress = "EXgaZEkfdJMGhaK6uMcC7qnsFodEsdaLii8p442ppump";

  return (
    <div className="min-h-screen bg-gradient-to-b from-night-950 via-night-900 to-night-950 text-white overflow-x-hidden font-sans">
      <ParticleSystem />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
        
        {/* Subtle floating stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-purple-300/30 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 8 + 8}px`,
                animationDuration: `${Math.random() * 2 + 3}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="relative group mb-8">
              <img 
                src="/logo (1).png" 
                alt="Fairy Logo" 
                className="w-32 h-32 mx-auto object-contain hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent leading-tight tracking-wide">
            Welcome to Fairy ✨
          </h1>
          <h2 className="text-2xl md:text-4xl font-serif font-medium mb-6 text-purple-200 tracking-wide">
            The Magical Meme Coin of the Night
          </h2>
          <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Created by a girl. Fueled by community magic. Launched on Pump.fun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <GlowingButton 
              href={`https://pump.fun/coin/${contractAddress}`}
              className="text-lg px-10 py-4"
            >
              ✨ Buy on Pump.fun ✨
            </GlowingButton>
            <GlowingButton 
              variant="secondary" 
              href={`https://dexscreener.com/solana/${contractAddress}`}
              className="text-lg px-8 py-4"
            >
              📊 View Chart
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
              📊 Live Chart
            </h2>
            <p className="text-xl text-slate-400 font-light">Track Fairy's magical journey</p>
          </div>
          
          <CoinChart />
          

        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wide">
              🧚 Meet the Fairy Behind the Magic
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-700/20 p-1 border border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-700">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-night-800 to-night-900 flex items-center justify-center text-9xl transform group-hover:scale-105 transition-transform duration-700">
                  🧚‍♀️
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-slate-300 font-light">
                Hey, I'm a streamer who believes in vibes, memes, and magic. Fairy isn't just a coin — it's a vibe. Join the enchanted movement and let's create something magical together.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://t.me/yourusername" // replace with your actual Telegram link
                  className="p-4 rounded-full bg-night-800/50 border border-night-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-blue-400/10"
                  >
                  <FaTelegramPlane className="w-7 h-7 text-blue-400" />
                  </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Coin Details */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent tracking-wide">
              💫 Coin Details
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="w-72 h-72 mx-auto rounded-full bg-gradient-to-br from-yellow-500/20 via-orange-500/20 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center text-9xl group-hover:rotate-12 transition-transform duration-700 shadow-2xl shadow-yellow-500/10">
                🧚‍♀️
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-night-900/50 backdrop-blur-sm rounded-xl p-8 border border-night-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-2xl font-serif font-bold mb-6 text-purple-300">Token Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Name:</span>
                    <span className="font-mono text-white font-medium">Fairy</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Symbol:</span>
                    <span className="font-mono text-white font-medium">FAIRY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Blockchain:</span>
                    <span className="font-mono text-white font-medium">Solana</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 font-medium">Platform:</span>
                    <span className="font-mono text-white font-medium">Pump.fun</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-night-900/50 backdrop-blur-sm rounded-xl p-8 border border-night-700/50 hover:border-purple-500/30 transition-all duration-300">
                <h3 className="text-xl font-serif font-bold mb-4 text-purple-300">Contract Address</h3>
                <div className="flex items-center gap-3 bg-night-800/50 rounded-lg p-4 border border-night-700/30">
                  <code className="text-sm font-mono text-green-300 flex-1 break-all">
                    {contractAddress}
                  </code>
                  <button 
                    onClick={() => copyToClipboard(contractAddress)}
                    className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-200"
                    title="Copy contract address"
                  >
                    <Copy className="w-4 h-4 text-purple-300" />
                  </button>
                </div>
                {copied && (
                  <p className="text-green-400 text-sm mt-2">✓ Copied to clipboard!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wide">
              📜 Magical Roadmap
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              { text: "Fairy launched on Pump.fun", completed: true },
              { text: "Private community opened", completed: true },
              { text: "Second coin launch (Join community, top secret 🌚)", completed: false },
              { text: "Contests & giveaways", completed: false },
              { text: "Fairy NFT airdrops", completed: false },
              { text: "Fairy Private Meetup!", completed: false }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 group">
                <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 transition-all duration-300 ${
                  item.completed 
                    ? 'bg-green-500/20 border-green-400 shadow-lg shadow-green-500/20' 
                    : 'border-slate-600 group-hover:border-purple-400'
                }`}>
                  {item.completed && (
                    <span className="block w-full h-full text-green-400 text-sm flex items-center justify-center font-semibold">
                      ✓
                    </span>
                  )}
                </div>
                <div className={`flex-1 p-6 rounded-xl transition-all duration-300 ${
                  item.completed 
                    ? 'bg-green-500/5 border border-green-500/20' 
                    : 'bg-slate-900/30 border border-slate-700/50 group-hover:border-purple-500/30'
                }`}>
                  <p className={`text-lg ${item.completed ? 'text-green-300' : 'text-slate-300'}`}>
                    <span className="font-medium">{item.completed ? '✅' : '🔜'} {item.text}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif font-bold mb-8 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent tracking-wide">
            🌐 Join the Fairy Garden
          </h2>
          <p className="text-xl mb-12 text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with fellow fairies and stay updated on all the magical happenings
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <GlowingButton className="text-lg px-8 py-4">
              💬 Join Telegram
            </GlowingButton>
            <GlowingButton
  variant="secondary"
  className="text-lg px-8 py-4"
  as="a"
  href="https://pump.fun"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="flex items-center gap-2">
    <ExternalLink className="w-4 h-4 text-purple-400" />
    Join Pump.fun
  </span>
</GlowingButton>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 relative border-t border-slate-800/50">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/40 rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <img 
              src="/logo (1).png" 
              alt="Fairy Logo" 
              className="w-12 h-12 mx-auto object-contain opacity-80"
            />
          </div>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href={`https://pump.fun/coin/${contractAddress}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-night-800/50 border border-night-700/50 hover:border-purple-500/50 transition-all duration-300 hover:bg-purple-500/5"
            >
              <ExternalLink className="w-4 h-4 text-purple-400" />
              <span className="text-slate-300 font-medium">Pump.fun</span>
            </a>
            <div className="flex gap-4">
  <a 
    href="https://t.me/yourusername" // replace with your actual Telegram link
    className="p-4 rounded-full bg-night-800/50 border border-night-700/50 hover:border-blue-400/50 transition-all duration-300 hover:bg-blue-400/10"
  >
    <FaTelegramPlane className="w-7 h-7 text-blue-400" />
  </a>
</div>

          </div>
          
          <p className="text-slate-400 text-lg font-light">
            Made with magic by the Fairy Team ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;