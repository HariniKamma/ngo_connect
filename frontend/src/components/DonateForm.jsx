import React, {useState} from 'react'


export default function DonateForm(){
const [amount,setAmount]=useState('')
const submit=async e=>{
e.preventDefault()
await fetch('/api/donations',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({amount})})
alert('Donation recorded (demo).')
setAmount('')
}
return (
<form onSubmit={submit} className="p-6 rounded-xl bg-white shadow">
<h4 className="font-semibold">Quick Donate</h4>
<input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount (₹)" className="mt-3 w-full p-2 border rounded" />
<div className="mt-3 flex gap-2">
<button className="px-4 py-2 bg-warm text-white rounded">Donate</button>
<button type="button" className="px-4 py-2 border rounded">Pay via UPI (demo)</button>
</div>
</form>
)
}