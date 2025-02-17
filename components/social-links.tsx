import { SiFacebook, SiInstagram, SiX, SiTiktok } from '@icons-pack/react-simple-icons'

export function SocialLinks() {
  return (
    <div className="fixed bottom-6 right-6 flex gap-4">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <SiFacebook className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <SiInstagram className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://x.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <SiX className="w-6 h-6 text-white" />
      </a>
      <a 
        href="https://Tiktok.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-zinc-800 p-3 rounded-full hover:bg-zinc-700 transition-colors"
      >
        <SiTiktok className="w-6 h-6 text-white" />
      </a>
    </div>
  )
} 