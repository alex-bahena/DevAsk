import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { object } from "yup";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../../../gql/user";
import { setLocale } from "yup";
// import {
//   BooleanSchema,
//   DateSchema,
//   MixedSchema,
//   NumberSchema,
//   ArraySchema,
//   ObjectSchema,
//   StringSchema,
// } from 'yup';
// import { toast } from "react-toastify";
// import { useMutation } from "@apollo/client";
// import { REGISTER } from "../../../gql/user";
import "./RegisterForm.scss";

export default function RegisterForm(props) {
  const { setShowLogin } = props;
  const [register] = useMutation(REGISTER);

  // const [message, setMessage] = useState();

  // const handleChange = event => {
  //   setMessage(event.target.value);
  // };

  // setLocale({
  //   mixed: {
  //     default: "Não é válido",
  //   },
  //   number: {
  //     min: "deber ser mayor a ${min} characteres",
  //   },
  // });
  // let userSchema = Yup.object().shape({
  //   name: Yup.string().required("nombre es obligatorio -j"),
  //   age: Yup.number().min(18),
  //   username: Yup.string().required("nombre de usuario incorrecto -j"),
  //   password: Yup.string().min(4).max(6).required(),
  // });

  // const onSubmit =() => {
  //   console.log("formulario enviado");
  // }
  //   const [register] = useMutation(REGISTER);

  // schema.validate({ name: 'jimmy', age: 11 }).catch(function (err) {
  //   err.name; // => 'ValidationError'
  //   err.errors; // => ['Deve ser maior que 18']
  // });

  const formik = useFormik({
    initialValues: initialValues(),

    validationSchema: Yup.object({
      // schema: Yup.object({
      name: Yup.string().required("Tu nombre es obligatorio"),
      username: Yup.string()
        .matches(
          /^[a-zA-Z0-9-]*$/,
          "El nombre del usuario no puede tener espacio"
        )
        .required("El nombre de usuario es obligatorio"),
      email: Yup.string()
        .email("El email no es valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales"),
      repeatPassword: Yup.string()
        .required("La contraseña es obligatoria")
        .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
    }),
    //  onSubmit: async (formData) => {
    //     console.log("formulario enviado formik");
    //     console.log(formData);
    //  }
    onSubmit: async (formData) => {
      try {
        const newUser = formData;
        delete newUser.repeatPassword;
        console.log(newUser);

        const result = await register({
          variables: {
            input: newUser,
          },
        });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    },
  });

  // const formik = useFormik({
  //   initialValues: initialValues(),

  //   userSchema
  //    })
  //       try {
  //         const newUser = formData;
  //         delete newUser.repeatPassword;

  //         await register({
  //           variables: {
  //             input: newUser,
  //           },
  //         });
  //         toast.success("Usuario registrado correctamente");
  //         setShowLogin(true);
  //       } catch (error) {
  //         toast.error(error.message);
  //         console.log(error);
  //       }
  //     },
  //   });

  return (
    <>
      <h2 className="register-form-title">
        Regístrate para ver fotos y vídeos de tus amigos.
      </h2>
      <Form className="register-form" onSubmit={formik.handleSubmit}>
        {/* <Form className="register-form" onSubmit={onSubmit} > */}
        <Form.Input
          type="text"
          placeholder="Nombre y apellidos"
          name="name"
          value={formik.values.name || ""}
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />
        <Form.Input
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formik.values.username || ""}
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />
        <Form.Input
          type="text"
          placeholder="Correo electronico"
          name="email"
          value={formik.values.email || ""}
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />
        <Form.Input
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formik.values.password || ""}
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />
        <Form.Input
          type="password"
          placeholder="Repetir contraseña"
          name="repeatPassword"
          value={formik.values.repeatPassword || ""}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword && true}
        />
        <Button type="submit" className="btn-submit">
          Registrarse
        </Button>
      </Form>
    </>
  );
}

function initialValues() {
  return {
    name: "javiertest",
    username: "javiertesting",
    email: "test.test@test.com",
    password: "123",
    repeatPassword: "123",
  };
}
