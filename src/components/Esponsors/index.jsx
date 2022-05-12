

const Esponsor = ({ item }) => (
  <div>
    <h3>{item.title}</h3>
    <div>
      <img src={item.img} alt={item.alt} />
      <p>{item.text}</p>
    </div>
    </div>
);

export { Esponsor };
