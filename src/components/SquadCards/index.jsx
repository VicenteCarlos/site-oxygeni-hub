import { Container } from "./style";
import { motion } from "framer-motion";

const SquadCard = ({item}) => {
    return(
       <div className="divSquad">
           <img src={item.img} alt={item.alt} />
           <h2>{item.name}</h2>
       </div>
        
    )
}


export {SquadCard}