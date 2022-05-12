import {ContentAgents} from "./style"
const Agent = ({item}) => {
    return(
    
    <ContentAgents>
        
       <div>
           <img src={item.img} alt={item.alt} />
           <h2>{item.name}</h2>
       </div>        
    </ContentAgents>
    )
}


export {Agent}