import WInput from '../../../components/Form/Input';

import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { Button } from "react-bootstrap"
import { Rating } from "react-simple-star-rating"
import * as Yup from 'yup'
import { storeReseña } from 'api/ReseñaApi';
import { toast } from 'react-toastify';

const registerFormSchema = Yup.object().shape({
    review: Yup.string().required('Ingrese una descripción interesante sobre el lugar'),
    // stars: Yup.number().required('Ingrese una calificación correcta')
})

export const RegisterReseñaForm = ({idGuide = null,idPlace = null, createdSuccessfully}) => {
    const [rating,setRating] = useState(0);
    const handleSubmit = async (values) => {
        if(!rating || rating <= 0){
            alert('Ingrese una calificación correcta')
            return;
        }
        storeReseña({...values, stars: rating, guide: idGuide, place: idPlace})
        .then(r => {
            toast.success(r.message)
            createdSuccessfully(r.data)
        })
        .catch(e => {
            alert('Error')
        })
    }

    return (
        <Formik
            initialValues={{review: '', star: 0, image: ''}}
            validationSchema={registerFormSchema}
            onSubmit={handleSubmit}>
            { () => (
                <Form>
                    <div className="text-center mb-4">
                        <Rating  showTooltip onClick={(rating) => setRating(rating/20)} ratingValue={rating} /* Available Props */ />
                    </div>
                    <Field name="review"  type="text"  placeholder="Ingrese una descripción interesante sobre el lugar"  label="Descripción"  component={WInput} />
                    <div className="d-grid gap-2">
                        <Button type="submit" variant="primary" >
                            Enviar reseña
                        </Button>
                    </div>
                </Form>
            ) }
        </Formik>
    )
}