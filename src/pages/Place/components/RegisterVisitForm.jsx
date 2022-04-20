import { Modal } from "bootstrap"
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import WInput from '../../../components/Form/Input';
import * as Yup from 'yup'

const registerFormSchema = {
  description: Yup.string().required('Ingrese una descripción interesante sobre el lugar'),
  // stars: Yup.number().required('Ingrese una ')
}

export const RegisterVisitForm = () => {

  const handleSubmit = async () => {
    // const res = await login({email: values.email, password: values.password})
    // if(res === 'ok'){
    //     handleClose()
    //     dispatch(loginAction)
    //     navigate('/home')
    // }
  }

  return (
    <Formik
        initialValues={{description: '', star: 0, image: ''}}
        validationSchema={registerFormSchema}
        onSubmit={handleSubmit}>
        { () => (
            <Form>
                <Field  name="email"  type="email"  placeholder="Correo electrónico"  label="Ingrese su email"  component={WInput} />
                <Field  name="password" type="password" placeholder="Contraseña" label="Ingrese su contraseña" component={WInput} />

                <div className="d-grid gap-2">
                    <Button type="submit" variant="primary" >
                        Ingresar
                    </Button>
                </div>
            </Form>
        ) }
    </Formik>
  )
}