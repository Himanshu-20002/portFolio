import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 text-center">
      <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent italic">404</h2>
      <p className="text-xl text-neutral-400 mb-8 font-mono tracking-widest uppercase">The universe hasn&apos;t expanded to this page yet.</p>
      <Link 
        href="/"
        className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-xs font-mono uppercase tracking-[0.2em] transition-all duration-300"
      >
        Return Home
      </Link>
    </div>
  )
}
