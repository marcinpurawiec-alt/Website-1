
const villas=[
{name:'Villa Azure',price:'€1250/night'},
{name:'Ocean Retreat',price:'€980/night'},
{name:'Santorini Escape',price:'€1400/night'}
];
export default function PropertyGrid(){
 return <div style={{padding:40}}>
 <h2>Featured Villas</h2>
 {villas.map(v=><div key={v.name} style={{padding:20,border:'1px solid #ddd',margin:'10px 0'}}>{v.name} - {v.price}</div>)}
 </div>
}
