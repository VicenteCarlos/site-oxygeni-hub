import { Container } from "./style";
import { motion } from "framer-motion";

const Cards = ({ item }) => (
  <Container as={motion.div} whileHover={{ scale: 1.1 }}>
    <h3>{item.title}</h3>
    <div>
      <img src={item.img} alt={item.alt} />
      <p>{item.text}</p>
    </div>
  </Container>
);

export { Cards };
