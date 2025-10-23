function Card(){
const card=[
    {
        bg: "#8272DA",
    title: "23",
    subtitle: "Chennai",
    },
     {
    bg: "#FD6663",
    title: "December 20",
    subtitle: "14:25:08",
  },
  {
    bg: "#FC8201",
    title: "Built",
    subtitle: "Using React",
  },
];

   
    
    return(
        <>
        <div className='flex gap-7 justify-between flex-grow mt-5 flex-wrap'>
 {card.map((items,index)=>(
    <div key={index} className="px-10 py-5 border rounded-lg"
          style={{ backgroundColor:items.bg}}
         
    >
         <h1 className="font-medium text-2xl">{items.title}</h1>
          <p className="font-mono">{items.subtitle}</p>
    </div>


 ))}
       </div>
        </>
    )
}
export default Card

