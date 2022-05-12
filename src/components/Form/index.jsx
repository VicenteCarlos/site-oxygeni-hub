import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema";
import {StyledForm} from "./style"

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  console.log(errors);

  const formSubmit = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(formSubmit)}>
      <TextField
        label={"Name"}
        margin="dense"
        variant="filled"
        {...register("name")}
      />
      <TextField
        label={"Email"}
        margin="dense"
        variant="filled"
        {...register("email")}
      />
      <TextField
        label={"Telefone"}
        margin="dense"
        variant="filled"
        {...register("tel")}
      />
      <TextField
        label={"Anexar Portfólio"}
        margin="dense"
        variant="filled"
        {...register("portf")}
      />
      <Button type="submit" variant="contained">Enviar</Button>
    </StyledForm>
  );
};

export { Form };
