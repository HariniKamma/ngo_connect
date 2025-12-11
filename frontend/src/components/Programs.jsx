import React from 'react'


const programs = [
{title:'Child Care Kits', desc:'Monthly essentials: food, books, stationery.'},
{title:'Senior Support', desc:'Daily necessities, home visits, medical aid.'},
{title:'Weekend Youth Drives', desc:'Youth-led volunteering every Saturday.'}
]


export default function Programs(){
return (
<section className="mt-8">
<h3 className="text-2xl font-semibold">Our Programs</h3>
<div className="mt-4 grid md:grid-cols-3 gap-4">
{programs.map(p=> (
<div key={p.title} className="p-4 rounded-xl bg-white shadow hover:translate-y-[-4px] transition">
<h4 className="font-semibold">{p.title}</h4>
<p className="text-sm text-gray-600 mt-2">{p.desc}</p>
</div>
))}
</div>
</section>
)
}