const SquadCard = ({item}) => {
    return(
    
    <div>
        
       <div>
           <img src={item.img} alt={item.alt} />
           <h2>{item.name}</h2>
       </div>        
    </div>
    )
}


export {SquadCard}