import { useModal } from "../../providers/ModalProvider";
import { StyledMain } from "./style";

const Modal = () => {
  const { modalIsOpen, setModalIsOpen } = useModal();

  return (
    <StyledMain>
      <div>
       <button onClick={() => setModalIsOpen(!modalIsOpen)}>X</button>
        <figure>
          <img src="https://code4coders.files.wordpress.com/2017/03/angular-js.png" alt="language" />
          <figcaption>Angular</figcaption>
        </figure>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum in,
          doloribus et harum cupiditate debitis? Dolore, dignissimos quibusdam
          exercitationem neque porro sint saepe voluptatem iusto necessitatibus
          repudiandae praesentium excepturi? Fugiat.
        </p>
      </div>
    </StyledMain>
  );
};



export { Modal };
