import { object, SchemaOf, string } from "yup";

interface ILoginValidation {
  email: string;
  password: string;
}

interface IRegisterValidation {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export const loginSchema: SchemaOf<ILoginValidation> = object({
  email: string()
    .email()
    .required("Por favor, verifique se seu email está correto"),
  password: string().required("Por favor, verifique se sua senha está correta"),
});

export const registerSchema: SchemaOf<IRegisterValidation> = object().shape({
  name: string().required("Nome é obrigatório"),
  email: string().email().required("Email é obrigatório"),
  password: string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmedPassword: string()
    .oneOf(
      [object.ref("password")],
      "A senha deve ser igual a passada anteriormente"
    )
    .required("Confirmação de senha é obrigatória"),
  bio: string().required("Bio é obrigatório"),
  contact: string().required("Contato é obrigatório"),
  course_module: string().required("Modulo é obrigatório"),
});
