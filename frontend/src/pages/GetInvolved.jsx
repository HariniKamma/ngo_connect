import React from 'react'
import VolunteerForm from '../components/VolunteerForm'
import DonateForm from '../components/DonateForm'


export default function GetInvolved(){
return (
<div className="grid md:grid-cols-2 gap-6">
<VolunteerForm />
<DonateForm />
</div>
)
}