import React from 'react'


export default function Footer(){
return (
<footer className="bg-white/90 mt-8 py-6">
<div className="max-w-[var(--max-w)] mx-auto px-6 flex justify-between items-center">
<div className="text-sm">© {new Date().getFullYear()} NGO-Connect — Empowering communities</div>
<div className="text-sm">Follow us — Instagram | Facebook | X</div>
</div>
</footer>
)
}