import {ContentAmbassador} from "./style"

const Ambassador = ({item}) => {
    return(
    
    <ContentAmbassador>
        
       <div>
           <img src={item.img} alt={item.alt} />
           <h2>{item.name}</h2><p>{item.job}</p>
       </div>        
    </ContentAmbassador>
    )
}


export {Ambassador}