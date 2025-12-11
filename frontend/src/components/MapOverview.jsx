import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


export default function MapOverview(){
const center = [20.5937,78.9629] // India central
const sampleOrgs = [
{pos:[28.7041,77.1025], name:'Delhi Center'},
{pos:[19.0760,72.8777], name:'Mumbai Hub'},
]
return (
<section className="mt-8">
<h3 className="text-xl font-semibold">Overview Map</h3>
<div className="mt-4 h-80 rounded-lg overflow-hidden shadow">
<MapContainer center={center} zoom={5} style={{height:'100%', width:'100%'}}>
<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
{sampleOrgs.map((o,i)=> (
<Marker key={i} position={o.pos}>
<Popup>{o.name}</Popup>
</Marker>
))}
</MapContainer>
</div>
</section>
)
}