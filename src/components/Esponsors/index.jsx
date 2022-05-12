import {ContentEsponsor} from "./style"

const Esponsor = ({ item }) => (
  <ContentEsponsor>
    <h3>{item.title}</h3>
    <div>
      
      <img src={item.img} alt={item.alt} />
       <p>{item.text}</p>
    </div>
    </ContentEsponsor>
);

export { Esponsor };
