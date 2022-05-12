import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    tel: yup.string().required("Campo obrigatório"),
    portf: yup.string().required("Campo obrigatório") 
})

export { formSchema }