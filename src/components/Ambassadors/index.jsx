const Embassador = ({item}) => {
    return(
    
    <div>
        
       <div>
           <img src={item.img} alt={item.alt} />
           <h2>{item.name}</h2><p>{item.job}</p>
       </div>        
    </div>
    )
}


export {Embassador}