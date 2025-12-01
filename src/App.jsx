import React, { useState, useEffect } from 'react';
import { Github, MessageCircle, Star, Check, X, AlertCircle, Code, Zap, Lock, Palette, Package, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const screenshots = [
    { caption: "Three-panel layout: Navigator, Editor, Properties", id: 1 },
    { caption: "Drag-drop component hierarchy with visual tree", id: 2 },
    { caption: "Type-specific property editors with validation", id: 3 },
    { caption: "Visual logic flows with React Flow canvas", id: 4 },
    { caption: "Live preview with hot reload and state updates", id: 5 },
    { caption: "Clean, readable React code you completely own", id: 6 }
  ];

  const nextScreenshot = () => {
    setActiveScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setActiveScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded transform rotate-45" />
              <span className="text-2xl font-black tracking-tight">RISE</span>
              <span className="px-2 py-0.5 text-xs bg-green-500/20 text-green-400 rounded border border-green-500/30 font-mono">
                ALPHA
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
              <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
              <a href="#community" className="hover:text-cyan-400 transition-colors">Community</a>
              <a href="https://github.com/yourusername/rise" className="hover:text-cyan-400 transition-colors flex items-center gap-1" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Join Discord
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Visual Programming
                </span>
                <br />
                <span className="text-white">Meets Clean Code</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Stop paying AI <span className="text-cyan-400 font-bold">$2 to center a div</span>.
                <br />
                Start building with the best of both worlds.
              </p>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Rise bridges the gap between no-code builders and AI coding tools. Get AI-powered generation, 
                visual refinement, and clean React code—all in one tool.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a href="https://github.com/yourusername/rise" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
                  <Star className="w-5 h-5" /> Star on GitHub
                </a>
                <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur rounded-lg font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" /> Join Discord
                </a>
              </div>

              <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm">
                🟢 Alpha (Level 1.5) - Working Now
              </div>
            </div>

            {/* Hero Screenshot Placeholder */}
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-600/30 blur-3xl" />
              <div className="relative bg-slate-900/50 backdrop-blur border-2 border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 font-mono ml-4">Rise Editor - Full UI</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="text-center space-y-4 p-12">
                    <Code className="w-16 h-16 mx-auto text-cyan-400" />
                    <p className="text-slate-400">Three-panel editor with component tree, logic canvas, and live preview</p>
                    <p className="text-sm text-slate-500">Replace with actual screenshot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            The Current Tools <span className="text-cyan-400">Make You Choose</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Nobody offers all three: AI generation, visual refinement, and clean code output
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Tools */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Coding Tools</h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">Loveable, v0, Cursor</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">AI generates instantly</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Natural language interface</span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">$2 to center a div</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">No visual refinement tools</span>
                </div>
              </div>
            </div>

            {/* Low-Code Builders */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Low-Code Builders</h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">Bubble, Webflow, Noodl</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Visual control</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">No coding required</span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Proprietary runtime</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Vendor lock-in</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Can't export real code</span>
                </div>
              </div>
            </div>

            {/* Traditional IDEs */}
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Traditional IDEs</h3>
              <p className="text-sm text-cyan-400 font-mono mb-4">VS Code, IDEs</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Full control</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">Clean code output</span>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Requires coding knowledge</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">No visual tools</span>
                </div>
                <div className="flex items-start gap-2">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400">Slower iteration</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl">
            <p className="text-xl">
              <span className="font-bold text-cyan-400">The Gap:</span> Nobody offers AI generation + 
              Visual refinement + Clean code output. <span className="font-bold text-white">Until now.</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="features" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Rise Gives You <span className="text-cyan-400">All Three</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            The only tool combining AI power, visual control, and code ownership
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visual Component Editor</h3>
                  <p className="text-slate-400">
                    Drag-drop hierarchy, properties panel, type-specific editors, and real-time preview. 
                    Build visually without touching code.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI-Powered Generation</h3>
                  <p className="text-slate-400">
                    Natural language to React components. Cost controls, schema-enforced quality, 
                    Claude API integration.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Visual Logic Programming</h3>
                  <p className="text-slate-400">
                    React Flow canvas for event handlers. Page state management. 
                    Action nodes for SetState, Alert, and Console.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Clean Code Output</h3>
                  <p className="text-slate-400">
                    Standard React + TypeScript. Readable, maintainable, Prettier formatted. 
                    Zero vendor lock-in—you own the code.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 blur-3xl" />
              <div className="relative bg-slate-900/80 backdrop-blur border-2 border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm text-slate-400 font-mono">rise-editor.tsx</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2 overflow-x-auto">
                  <div className="text-purple-400">import <span className="text-cyan-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                  <div className="text-purple-400">import <span className="text-cyan-400">{'{ useState }'}</span> from <span className="text-green-400">'react'</span>;</div>
                  <div className="mt-4 text-purple-400">export default function <span className="text-yellow-400">MyComponent</span>() {'{'}</div>
                  <div className="ml-4 text-purple-400">const [<span className="text-cyan-400">count</span>, <span className="text-cyan-400">setCount</span>] = <span className="text-yellow-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                  <div className="ml-4 mt-2 text-purple-400">return (</div>
                  <div className="ml-8 text-cyan-400">&lt;<span className="text-green-400">div</span>&gt;</div>
                  <div className="ml-12 text-cyan-400">&lt;<span className="text-green-400">button</span> onClick={'{'}() =&gt; <span className="text-yellow-400">setCount</span>(count + <span className="text-orange-400">1</span>){'}'}&gt;</div>
                  <div className="ml-16 text-slate-300">Count: {'{'}count{'}'}</div>
                  <div className="ml-12 text-cyan-400">&lt;/<span className="text-green-400">button</span>&gt;</div>
                  <div className="ml-8 text-cyan-400">&lt;/<span className="text-green-400">div</span>&gt;</div>
                  <div className="ml-4 text-purple-400">);</div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Build Faster, <span className="text-cyan-400">Own Your Code</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Three simple steps from idea to production-ready React
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent md:block hidden" />
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 relative hover:border-cyan-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 font-black text-2xl">
                  1
                </div>
                <h3 className="text-2xl font-bold mb-4">Generate with AI</h3>
                <p className="text-slate-400 mb-6">
                  Describe what you want in natural language. Rise generates the component structure 
                  and logic scaffolding using Claude AI.
                </p>
                <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-4 font-mono text-sm">
                  <span className="text-cyan-400">&gt;</span> Create a login form with email and password
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-8 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent md:block hidden" />
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 relative hover:border-cyan-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 font-black text-2xl">
                  2
                </div>
                <h3 className="text-2xl font-bold mb-4">Refine Visually</h3>
                <p className="text-slate-400 mb-6">
                  Tweak styling, adjust properties, and build logic flows—all with visual tools. 
                  No more "$2 to center a div".
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-950/80 border border-slate-800 rounded p-2 text-xs">
                    <div className="text-slate-500">Padding</div>
                    <div className="text-cyan-400 font-mono">16px</div>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 rounded p-2 text-xs">
                    <div className="text-slate-500">Width</div>
                    <div className="text-cyan-400 font-mono">100%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 font-black text-2xl">
                  3
                </div>
                <h3 className="text-2xl font-bold mb-4">Export Clean Code</h3>
                <p className="text-slate-400 mb-6">
                  Get production-ready React code you completely own. Deploy anywhere. 
                  Continue development in any IDE.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs font-mono">React</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs font-mono">TypeScript</span>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded text-xs font-mono">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo / Screenshots */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            See It <span className="text-cyan-400">In Action</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Experience Rise's powerful features through our interactive demo
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="relative bg-slate-900/50 backdrop-blur border-2 border-cyan-500/30 rounded-xl overflow-hidden">
              <div className="bg-slate-800 px-4 py-2 flex items-center justify-between border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-sm text-slate-400 font-mono">Screenshot {activeScreenshot + 1} of {screenshots.length}</span>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center relative">
                <button 
                  onClick={prevScreenshot}
                  className="absolute left-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="text-center space-y-4 p-12">
                  <Code className="w-16 h-16 mx-auto text-cyan-400" />
                  <p className="text-slate-300 font-medium">{screenshots[activeScreenshot].caption}</p>
                  <p className="text-sm text-slate-500">Replace with actual screenshots</p>
                </div>
                
                <button 
                  onClick={nextScreenshot}
                  className="absolute right-4 w-10 h-10 bg-slate-800/80 hover:bg-slate-700/80 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="bg-slate-800 px-4 py-3 border-t border-slate-700">
                <div className="flex gap-2 justify-center">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeScreenshot 
                          ? 'bg-cyan-400 w-8' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Alpha Ready - <span className="text-cyan-400">Try It Today</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Level 1.5 is complete and fully functional
          </p>

          <div className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 md:p-12">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-mono text-lg">
                🟢 Alpha - Fully Functional
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">What Works Today:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Visual component editor with drag-drop</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">AI-powered generation with Claude</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Logic canvas with 4 node types</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Page state management</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Live preview with hot module replacement</span>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Clean React + TypeScript code output</span>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8">
              <h3 className="text-2xl font-bold mb-6 text-center">What's Coming (Level 2):</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-400">Expression system (template syntax)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-400">Reusable workflows (like n8n)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-400">More node types (API calls, conditions, loops)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                  </div>
                  <span className="text-slate-400">App-level state (persistent)</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-6">
              <a href="https://github.com/yourusername/rise" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
                <Star className="w-5 h-5" /> Star on GitHub and Follow Progress
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Built in Public - <span className="text-cyan-400">Join the Journey</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Follow our transparent development roadmap
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2" />

              {/* Milestones */}
              <div className="space-y-12">
                {/* Current - Month 3 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:gap-8">
                    <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                      <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 font-mono text-sm mb-2">
                        Month 3 - NOW
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Level 1.5 Alpha</h3>
                      <ul className="text-slate-400 space-y-1">
                        <li>✅ Visual editor + AI generation</li>
                        <li>✅ Logic canvas with basic nodes</li>
                        <li>✅ Page state management</li>
                        <li>✅ Clean code output</li>
                      </ul>
                    </div>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900 shadow-lg shadow-green-500/50" />
                    <div className="md:w-1/2" />
                  </div>
                </div>

                {/* Next 6 Months - Month 9 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:gap-8 md:flex-row-reverse">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-400 font-mono text-sm mb-2">
                        Month 9
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Level 2: Enhanced Interactivity</h3>
                      <ul className="text-slate-400 space-y-1">
                        <li>🔵 Expression system</li>
                        <li>🔵 Reusable workflows</li>
                        <li>🔵 API calls, conditions, loops</li>
                        <li>🔵 App-level state</li>
                      </ul>
                    </div>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900" />
                    <div className="md:w-1/2" />
                  </div>
                </div>

                {/* Next 12 Months - Month 15 */}
                <div className="relative">
                  <div className="md:flex md:items-center md:gap-8">
                    <div className="md:w-1/2 md:text-right mb-4 md:mb-0">
                      <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-400 font-mono text-sm mb-2">
                        Month 15
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Level 3: Advanced Features</h3>
                      <ul className="text-slate-400 space-y-1">
                        <li>🔮 Database connections</li>
                        <li>🔮 Step-through debugger</li>
                        <li>🔮 Framework plugins (Vue, Svelte)</li>
                        <li>🔮 Component marketplace</li>
                      </ul>
                    </div>
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform -translate-x-1/2 border-4 border-slate-900" />
                    <div className="md:w-1/2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl">
              <p className="text-lg text-slate-300">
                <span className="font-bold text-cyan-400">Transparency:</span> We're building in public. 
                Star the repo to follow along and help shape the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Join the <span className="text-cyan-400">Rise Community</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Be part of the future of visual development
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contribute Code</h3>
              <p className="text-slate-400 mb-6">
                React developers, UX designers, plugin creators—help build the future of visual development.
              </p>
              <a href="https://github.com/yourusername/rise/issues" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all">
                View Issues on GitHub
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Join Discord</h3>
              <p className="text-slate-400 mb-6">
                Chat with contributors, ask questions, share what you're building, and help shape the roadmap.
              </p>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Join Server
              </a>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-8 hover:border-cyan-500/50 transition-all text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-slate-400 mb-6">
                Help fund development. Get early access to features and influence the product direction.
              </p>
              <a href="https://github.com/sponsors/yourusername" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg font-semibold transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rise */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Built by Developers, <span className="text-cyan-400">For Developers</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Six principles that make Rise different
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Zero Lock-in</h3>
                <p className="text-slate-400 text-sm">
                  Standard React code you completely own. Deploy anywhere. Continue development outside Rise.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">AI as Copilot</h3>
                <p className="text-slate-400 text-sm">
                  You decide when to use AI. You review what it generates. You're always in control.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Visual Where It Matters</h3>
                <p className="text-slate-400 text-sm">
                  Component tree, properties panel, logic canvas. No "$2 to center a div".
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Open Source</h3>
                <p className="text-slate-400 text-sm">
                  Transparent development. Community-driven roadmap. No black boxes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Security First</h3>
                <p className="text-slate-400 text-sm">
                  OS keychain integration, input sanitization, expression sandboxing (Level 2).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Framework Agnostic</h3>
                <p className="text-slate-400 text-sm">
                  React ships with MVP. Vue, Svelte, Angular via plugins. Build for any framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            How Rise <span className="text-cyan-400">Compares</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            The only tool with all six checkmarks
          </p>

          <div className="max-w-4xl mx-auto overflow-x-auto">
            <table className="w-full bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-800">
                  <th className="text-left p-4 font-bold">Feature</th>
                  <th className="text-center p-4 font-bold">Bubble</th>
                  <th className="text-center p-4 font-bold">Loveable</th>
                  <th className="text-center p-4 font-bold">Noodl</th>
                  <th className="text-center p-4 font-bold bg-gradient-to-r from-cyan-500/20 to-blue-600/20">Rise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">Visual Editor</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">AI Generation</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">Clean Code Export</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><AlertCircle className="w-5 h-5 text-yellow-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">Logic Canvas</td>
                  <td className="text-center p-4"><AlertCircle className="w-5 h-5 text-yellow-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">Zero Lock-in</td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="p-4">Visual Refinement</td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4"><X className="w-5 h-5 text-red-400 mx-auto" /></td>
                  <td className="text-center p-4"><Check className="w-5 h-5 text-green-400 mx-auto" /></td>
                  <td className="text-center p-4 bg-cyan-500/10"><Check className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-slate-300">
              Rise is the only tool with all six checkmarks. <span className="font-bold text-cyan-400">We're not competing in a category—we're creating one.</span>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Everything you need to know about Rise
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Is Rise production-ready?</h3>
              <p className="text-slate-400">
                Rise is currently in alpha (Level 1.5). The generated code is production-ready React, but the tool itself is early-stage. Perfect for POCs and learning.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">How much does it cost?</h3>
              <p className="text-slate-400">
                Rise will be free and open source. We'll have optional paid tiers in the future for cloud collaboration and advanced features.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Can I use Vue or Svelte instead of React?</h3>
              <p className="text-slate-400">
                Not yet. React ships with MVP. Framework plugins (Vue, Svelte, Angular) are planned for post-MVP.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Do I need to know React?</h3>
              <p className="text-slate-400">
                Basic understanding helps, but Rise is designed for visual developers with minimal coding knowledge.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">What's the difference vs. Bubble/Webflow?</h3>
              <p className="text-slate-400">
                Bubble and Webflow use proprietary runtimes (vendor lock-in). Rise generates standard React code you completely own and can take anywhere.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">What's the difference vs. Loveable/v0?</h3>
              <p className="text-slate-400">
                Loveable and v0 are pure AI coding tools. Every change requires an AI prompt. Rise gives you visual refinement tools so you don't have to pay AI for simple tweaks.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Is my API key secure?</h3>
              <p className="text-slate-400">
                Yes. Rise stores API keys in your OS keychain (Keychain on Mac, Credential Manager on Windows). Keys never leave your machine.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl font-bold mb-3">Can I contribute?</h3>
              <p className="text-slate-400">
                Absolutely! We need React developers, UX designers, plugin creators, and documentation writers. Check out the GitHub repo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Ready to <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Rise</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              The future of visual development starts here. Join the community building the bridge between no-code and AI coding.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="https://github.com/yourusername/rise" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all transform hover:scale-105 flex items-center gap-2">
                <Star className="w-5 h-5" /> Star on GitHub
              </a>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 backdrop-blur rounded-lg font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                <MessageCircle className="w-5 h-5" /> Join Discord
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span>⭐ <strong className="text-white">Star</strong> on GitHub</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-cyan-400" />
                <span>💬 <strong className="text-white">Join</strong> Discord</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                <span>👨‍💻 <strong className="text-white">Contribute</strong> Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded transform rotate-45" />
                <span className="text-2xl font-black">RISE</span>
              </div>
              <p className="text-sm text-slate-400">
                Visual Programming Meets Clean Code
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="https://github.com/yourusername/rise" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
                <li><a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Discord</a></li>
                <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Docs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Press Kit</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © 2024 Rise. Open Source. MIT License.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/yourusername/rise" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}