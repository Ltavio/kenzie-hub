import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email()
    .required("Por favor, verifique se seu email está correto"),
  password: yup
    .string()
    .required("Por favor, verifique se sua senha está correta"),
});

export const registerSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email().required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula")
    .matches(/([a-z])/, "deve conter ao menos 1 letra minúscula")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/(\W)|_/, "deve conter ao menos 1 caractere especial")
    .matches(/.{8,}/, "deve conter ao menos 8 dígitos"),
  confirmedPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "A senha deve ser igual a passada anteriormente"
    )
    .required("Confirmação de senha é obrigatória"),
  bio: yup.string().required("Bio é obrigatório"),
  contact: yup.string().required("Contato é obrigatório"),
  course_module: yup.string().required("Modulo é obrigatório"),
});
