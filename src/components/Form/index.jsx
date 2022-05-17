import { useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./schema";
import { StyledForm } from "./style";
import { themeForm } from "../../themes";
import { ThemeProvider } from "styled-components";

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
    <ThemeProvider theme={themeForm}>
      <StyledForm onSubmit={handleSubmit(formSubmit)}>
        <TextField
          label={"Name: "}
          margin="dense"
          variant="filled"
          color="grey"
          {...register("name")}
        />
        <TextField
          label={"Email: "}
          margin="dense"
          variant="filled"
          color="grey"
          {...register("email")}
        />
        <TextField
          label={"Telefone: "}
          margin="dense"
          variant="filled"
          color="grey"
          {...register("tel")}
        />
        <TextField
          label={"Anexar Portfólio: "}
          margin="dense"
          variant="filled"
          color="grey"
          {...register("portf")}
        />
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </StyledForm>
    </ThemeProvider>
  );
};

export { Form };
