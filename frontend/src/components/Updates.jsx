import React, {useEffect, useState} from 'react'


export default function Updates(){
const [updates, setUpdates] = useState([])
useEffect(()=>{
fetch('/api/updates').then(r=>r.json()).then(setUpdates).catch(()=>setUpdates([]))
},[])
return (
<section id="updates" className="mt-8">
<h3 className="text-xl font-semibold">Latest Updates</h3>
<div className="mt-4 space-y-3">
{updates.length? updates.map(u=> (
<div key={u.id} className="p-3 bg-white rounded shadow-sm">
<div className="text-sm text-gray-500">{new Date(u.date).toLocaleDateString()}</div>
<div className="font-medium">{u.title}</div>
<div className="text-sm text-gray-600">{u.body}</div>
</div>
)) : <div className="text-gray-500">No updates yet — check back soon.</div>}
</div>
</section>
)
}