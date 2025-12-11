import React, {useState} from 'react'


export default function VolunteerForm(){
const [name,setName]=useState('')
const [area,setArea]=useState('')
const [msg,setMsg]=useState('')
const submit=async e=>{
e.preventDefault()
await fetch('/api/volunteers',{
method:'POST', headers:{'content-type':'application/json'},
body: JSON.stringify({name,area,msg})
})
alert('Thanks — we will contact you!')
setName(''); setArea(''); setMsg('')
}
return (
<form onSubmit={submit} className="p-6 rounded-xl bg-white shadow">
<h4 className="font-semibold">Volunteer — Weekend Drives</h4>
<input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="mt-3 w-full p-2 border rounded" />
<input value={area} onChange={e=>setArea(e.target.value)} placeholder="City/Area" className="mt-3 w-full p-2 border rounded" />
<textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Any notes" className="mt-3 w-full p-2 border rounded" />
<button className="mt-3 px-4 py-2 bg-primary text-white rounded">Sign up</button>
</form>
)
}
