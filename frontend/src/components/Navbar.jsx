import React from 'react'



export default function Navbar(){
const loc = useLocation()
return (
<nav className="w-full bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
<div className="max-w-[var(--max-w)] mx-auto flex items-center justify-between px-6 py-3">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">NG</div>
<div className="font-semibold text-lg">NGO-Connect</div>
</div>
<div className="hidden md:flex items-center gap-6">
{links.map(l => (
<Link key={l.to} to={l.to} className={`relative px-2 py-1 ${loc.pathname===l.to? 'text-primary font-semibold':''} hover:text-primary transition`}>
{l.label}
{loc.pathname===l.to && (
<motion.span layoutId="nav-active" className="absolute left-0 right-0 -bottom-2 h-1 rounded-full bg-primary" />
)}
</Link>
))}
<Link to="/get-involved" className="ml-4 px-4 py-2 rounded-lg bg-primary text-white glow-hover">Volunteer</Link>
</div>
<div className="md:hidden">{/* mobile burger - simple */}
<MobileMenu />
</div>
</div>
</nav>
)
}


function MobileMenu(){
return (
<div className="text-gray-700">☰</div>
)
}