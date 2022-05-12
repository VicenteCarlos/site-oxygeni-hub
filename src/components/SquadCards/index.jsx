import { ContentSquad } from "./style";
const SquadCard = ({ item }) => {
  return (
    <ContentSquad>
    <div>
        <img src={item.img} alt={item.alt} />
        <h2>{item.name}</h2>
    </div>
      
    </ContentSquad>
  );
};

export { SquadCard };
