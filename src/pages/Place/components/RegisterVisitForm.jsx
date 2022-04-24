import { Modal } from "bootstrap"
import { Field, Form, Formik } from "formik";
import { Button } from "react-bootstrap";
import WInput from '../../../components/Form/Input';
import * as Yup from 'yup'
import { useState } from "react";
import { Rating } from 'react-simple-star-rating'

const registerFormSchema = Yup.object().shape({
    review: Yup.string().required('Ingrese una descripción interesante sobre el lugar'),
    // stars: Yup.number().required('Ingrese una calificación correcta')
})

export const RegisterVisitForm = ({idPlace}) => {
  const [rating,setRating] = useState(5);
  const handleSubmit = async () => {
    // const res = await login({email: values.email, password: values.password})
    // if(res === 'ok'){
    //     handleClose()
    //     dispatch(loginAction)
    //     navigate('/home')
    // }
  }

  const handleRating = (rating) => {
    setRating(rating)
  }

  return (
    <Formik
        initialValues={{description: '', star: 0, image: ''}}
        validationSchema={registerFormSchema}
        onSubmit={handleSubmit}>
        { () => (
            <Form>
                <Field name="description"  type="text"  placeholder="Ingrese una descripción interesante sobre el lugar"  label="Descripción"  component={WInput} />
                <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />
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