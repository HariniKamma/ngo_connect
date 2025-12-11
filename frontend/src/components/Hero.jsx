import React from 'react'
import { motion } from 'framer-motion'


export default function Hero(){
return (
<section className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-12">
<div>
<motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="text-4xl md:text-5xl font-extrabold leading-tight">Serve with heart — help children & elders thrive</motion.h1>
<p className="mt-4 text-gray-600">Weekly volunteer meetups, instant updates, and easy ways to donate essentials or funds. Join our youth-driven movement.</p>
<div className="mt-6 flex gap-4">
<a href="/get-involved" className="px-6 py-3 rounded-full bg-primary text-white font-medium">Get Involved</a>
<a href="#updates" className="px-6 py-3 rounded-full border border-gray-200">See Updates</a>
</div>
</div>
<div className="bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl p-6 shadow-lg">
<div className="h-64 rounded-xl bg-white/70 flex items-center justify-center">
{/* Placeholder for compassionate illustration */}
<div className="text-center text-gray-500">[Illustration/Photo of volunteering]</div>
</div>
</div>
</section>
)
}