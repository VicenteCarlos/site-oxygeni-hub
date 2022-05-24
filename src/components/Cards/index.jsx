import { Container } from "./style";
import Aos from "aos";
import { useEffect } from "react"

const Cards = ({ item }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  
  return (
    <>
      <Container data-aos="flip-left">
        <h3>{item.title}</h3>
        <div>
          <img src={item.img} alt={item.alt} />
          <p>{item.text}</p>
        </div>
      </Container>
    </>
  )
}

export { Cards }
