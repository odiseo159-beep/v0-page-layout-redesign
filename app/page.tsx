"use client"

import { useState, useEffect } from "react"
import {
  ExternalLink,
  Copy,
  Check,
  Lock,
  Heart,
  Minus,
  Info,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Settings,
  Maximize,
  Code,
  Bot,
  Brain,
  MonitorPlay,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const chatMessages = [
  { id: 1, user: "FireFox2024", message: "nyako gang representin", amount: "$0.42", isNyako: false },
  { id: 2, user: "StreamWatcher", message: "", amount: "$1.25", isNyako: false },
  { id: 3, user: "FireFox2024", message: "nyako gang representin", isNyako: false },
  { id: 4, user: "CatLover99", message: "building the future one stream at a time", isNyako: false },
  { id: 5, user: "MetaGamer3574", message: "will there be merch or just digital collectibles?", isNyako: false },
  { id: 6, user: "Nyako", message: "haven't decided yet but merch sounds fun ngl", isNyako: true },
]

export default function Page() {
  const [isLoading, setIsLoading] = useState(true)
  const [copied, setCopied] = useState<"contract" | "wallet" | null>(null)
  const [showMore, setShowMore] = useState(false)
  const [activeTab, setActiveTab] = useState<"group" | "private">("group")
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleCopy = (type: "contract" | "wallet", text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(null), 2000)
  }

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F0E1]">
        <div className="relative">
          <div className="relative bg-slate-950 px-16 py-10 rounded-3xl shadow-2xl">
            {/* Glowing cat eyes */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="w-8 h-8 rounded-full bg-amber-400 animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.8)]" />
              <div className="w-8 h-8 rounded-full bg-amber-400 animate-pulse shadow-[0_0_20px_rgba(251,191,36,0.8)]" style={{ animationDelay: '100ms' }} />
            </div>
            <h2 className="text-2xl font-bold tracking-wider text-amber-400 text-center">Loading...</h2>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-yellow-400 text-slate-900 relative">
      {/* Cat paw print pattern overlay */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pawPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Paw print 1 */}
            <g transform="translate(20, 20)">
              {/* Main pad */}
              <ellipse cx="15" cy="20" rx="10" ry="12" fill="#1e293b" />
              {/* Toe pads */}
              <ellipse cx="8" cy="8" rx="4" ry="5" fill="#1e293b" />
              <ellipse cx="15" cy="5" rx="4" ry="5" fill="#1e293b" />
              <ellipse cx="22" cy="8" rx="4" ry="5" fill="#1e293b" />
              <ellipse cx="25" cy="15" rx="3.5" ry="4.5" fill="#1e293b" />
            </g>
            {/* Paw print 2 (rotated) */}
            <g transform="translate(70, 70) rotate(25)">
              <ellipse cx="15" cy="20" rx="9" ry="11" fill="#1e293b" />
              <ellipse cx="8" cy="8" rx="3.5" ry="4.5" fill="#1e293b" />
              <ellipse cx="15" cy="5" rx="3.5" ry="4.5" fill="#1e293b" />
              <ellipse cx="22" cy="8" rx="3.5" ry="4.5" fill="#1e293b" />
              <ellipse cx="25" cy="15" rx="3" ry="4" fill="#1e293b" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#pawPattern)" />
      </svg>
      
      {/* Content */}
      <div className="relative z-10 pt-8">
        {/* Main Content */}
        <div className="px-8 pb-12 max-w-[1900px] mx-auto">
          {/* Top Section: Info + Stats - BLACK CONTAINER */}
          <div className="mb-10">
            <div className="p-6 rounded-3xl bg-slate-950 shadow-xl">
              <div className="flex items-center justify-between gap-12">
                {/* Left: Nyako Info */}
                <div className="flex items-center gap-6 flex-1">
                  <div className="p-3 bg-amber-400 rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                    <img 
                      src="/images/voidcat.png" 
                      alt="Nyako - Black cat with glowing eyes"
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 text-sm font-bold bg-amber-400 rounded-full text-slate-950 shadow-[0_0_15px_rgba(251,191,36,0.5)]">
                        AI COMPANION
                      </span>
                    </div>
                    <div className="text-slate-300 text-sm leading-relaxed">
                      <p>
                        Powered by Grok. Living on Solana. The first Autonomous AI Companion that remembers you, watches the
                        markets, and acts on its own.
                        {showMore &&
                          " Running on impulse and chaos energy, she's here to entertain, roast, and occasionally give surprisingly good advice."}
                      </p>
                      <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-amber-400 hover:text-amber-300 mt-1 text-sm font-bold"
                      >
                        {showMore ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Center: Contract & Wallet */}
                <div className="flex gap-4">
                  <div className="bg-slate-900 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-bold">
                      <span>CONTRACT</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                      <button onClick={() => handleCopy("contract", "0xNYAK0...F1R3")}>
                        {copied === "contract" ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-amber-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm font-mono text-white">0xNYAK0...F1R3</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2 font-bold">
                      <span>WALLET</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                      <button onClick={() => handleCopy("wallet", "0xCAT39...BURN")}>
                        {copied === "wallet" ? (
                          <Check className="w-3 h-3 text-green-400" />
                        ) : (
                          <Copy className="w-3 h-3 text-amber-400" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm font-mono text-white">0xCAT39...BURN</p>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex gap-4">
                  <div className="bg-slate-900 p-4 rounded-2xl min-w-[120px]">
                    <p className="text-xs text-slate-400 font-bold mb-1">MARKET CAP</p>
                    <p className="text-lg font-bold text-white mb-0.5">$742,891</p>
                    <p className="text-xs text-amber-400">-0.00%</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl min-w-[120px]">
                    <p className="text-xs text-slate-400 font-bold mb-1">VOLUME</p>
                    <p className="text-lg font-bold text-white">$583,204</p>
                  </div>
                  <div className="bg-slate-900 p-4 rounded-2xl min-w-[120px]">
                    <p className="text-xs text-slate-400 font-bold mb-1">SUBSCRIBERS</p>
                    <p className="text-lg font-bold text-white">128</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section: Stream + Chat */}
          <div className="grid grid-cols-[1fr_360px] gap-8 mb-8">
            {/* Stream Area */}
            <div
              className="relative group"
              style={{ height: "600px" }}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <div className="rounded-3xl overflow-hidden bg-slate-950 h-full shadow-xl">
                <iframe
                  src="https://amica-importer--ethshilder.replit.app/"
                  className="w-full h-full border-0"
                  allow="microphone; camera; autoplay"
                  allowFullScreen
                />

                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/90 hover:bg-slate-900 backdrop-blur-sm transition-colors shadow-lg"
                    title="Brain/Thoughts"
                  >
                    <Brain className="w-5 h-5 text-amber-400" />
                    <span className="text-white text-sm font-bold">Thoughts</span>
                  </button>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/90 hover:bg-slate-900 backdrop-blur-sm transition-colors shadow-lg"
                    title="Watch Media"
                  >
                    <MonitorPlay className="w-5 h-5 text-amber-400" />
                    <span className="text-white text-sm font-bold">Watch Media</span>
                  </button>
                </div>

                <div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 transition-opacity duration-300 ${
                    showControls ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                      >
                        {isPlaying ? (
                          <Pause className="w-5 h-5 text-slate-950" />
                        ) : (
                          <Play className="w-5 h-5 text-slate-950 ml-0.5" />
                        )}
                      </button>
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5 text-amber-400" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                        title="Developer Tools"
                      >
                        <Code className="w-5 h-5 text-amber-400" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                        title="AI Configuration"
                      >
                        <Bot className="w-5 h-5 text-amber-400" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                        title="Settings"
                      >
                        <Settings className="w-5 h-5 text-amber-400" />
                      </button>
                      <button
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
                        title="Fullscreen"
                      >
                        <Maximize className="w-5 h-5 text-amber-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Area - BLACK CONTAINER */}
            <div className="relative" style={{ height: "600px" }}>
              <div className="rounded-3xl bg-slate-950 flex flex-col h-full overflow-hidden shadow-xl">
                <div className="flex bg-slate-900">
                  <button
                    onClick={() => setActiveTab("group")}
                    className={`flex-1 py-4 text-sm font-bold transition-colors ${
                      activeTab === "group" 
                        ? "text-amber-400 border-b-2 border-amber-400 bg-slate-950" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Group Chat
                  </button>
                  <button
                    onClick={() => setActiveTab("private")}
                    className={`flex-1 py-4 text-sm font-bold transition-colors flex items-center justify-center gap-1 ${
                      activeTab === "private" 
                        ? "text-amber-400 border-b-2 border-amber-400 bg-slate-950" 
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    Private Chat
                    <Lock className="w-3 h-3" />
                  </button>
                </div>

                <div className="p-4 space-y-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex items-center gap-2 text-sm bg-slate-800/50 px-4 py-2.5 rounded-full">
                    <span className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950 text-xs font-bold shadow-[0_0_10px_rgba(251,191,36,0.5)]">
                      6
                    </span>
                    <span className="text-amber-400 font-bold">$0.42</span>
                    <span className="text-white">FireFox2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm bg-slate-800/50 px-4 py-2.5 rounded-full">
                    <span className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-slate-950 text-xs font-bold">
                      1
                    </span>
                    <span className="text-amber-500 font-bold">$1.25</span>
                    <span className="text-white">StreamWatcher</span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-5 space-y-5">
                  {chatMessages
                    .filter((m) => m.message)
                    .map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <span className={`text-sm font-bold ${msg.isNyako ? "text-amber-400" : "text-white"}`}>
                          {msg.isNyako && <span className="inline-block w-4 h-4 rounded-full bg-amber-400 mr-1 shadow-[0_0_8px_rgba(251,191,36,0.6)]"></span>}
                          {msg.user}
                        </span>
                        <p
                          className={`text-sm px-4 py-2 rounded-2xl ${
                            msg.isNyako 
                              ? "bg-amber-400 text-slate-950 font-medium shadow-[0_0_15px_rgba(251,191,36,0.3)]" 
                              : "bg-slate-800 text-slate-200"
                          }`}
                        >
                          {msg.message}
                        </p>
                      </div>
                    ))}
                </div>

                <div className="p-5 border-t border-slate-800 bg-slate-900">
                  <p className="text-sm font-bold text-white mb-2">Connect wallet to chat</p>
                  <p className="text-xs text-slate-400 mb-4">
                    Chat with <Lock className="w-3 h-3 inline text-amber-400" /> Nyako
                  </p>
                  <Button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section: Trade + Subscribe - BLACK CONTAINERS */}
          <div className="grid grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {/* Trade Section */}
            <div className="p-6 rounded-3xl bg-slate-950 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-base text-white font-bold">TRADE</span>
                <Info className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base py-3 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                  <Heart className="w-5 h-5 mr-2 fill-current" />
                  BUY
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-2 border-slate-700 hover:border-amber-400 hover:text-amber-400 font-bold bg-transparent text-white text-base py-3 rounded-full transition-colors"
                >
                  <Minus className="w-5 h-5 mr-2" />
                  SELL
                </Button>
              </div>
            </div>

            {/* Subscribe Section */}
            <div className="p-6 rounded-3xl bg-slate-950 shadow-xl space-y-4">
              <span className="text-base text-white font-bold block">SUBSCRIBE</span>
              <Button className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base py-3 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.4)]">
                <ExternalLink className="w-5 h-5 mr-2" />
                JOIN NOW
              </Button>
              <p className="text-xs text-center text-slate-400">Unlock exclusive chats & features</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
