import { getAuthUser } from "api/AuthApi";
import { useEffect, useState } from "react";
import { Field, Form, Formik } from 'formik'
import Axios from 'axios'
import { Button, Col, Row } from 'react-bootstrap'
import * as Yup from 'yup'
import WInput from "components/Form/Input"
import {sendFormRegisterGuide} from 'api/AuthApi'


const GuideFormSchema = () => Yup.object().shape({

  descripcion: Yup.string().required('Ingrese una descripción'),
  email: Yup.string().required('Ingrese una descripción')
})


export const GuideCTA = () => {
  

  const [imageSelected, setImageSelected] = useState("");
  const uploadImage=()=>{
    const fomData=new FormData();
    fomData.append("file",imageSelected);
    fomData.append("upload_preset","qngviyaq");

    Axios.post("https://api.cloudinary.com/v1_1/vittest/image/upload",fomData).then((response)=>{
     console.log(response);
    });

  }


  const [user, setUser] = useState(null);
  useEffect(() => {
    getAuthUser().then((user) => {
      console.log('USER', user);
     
      setUser(user);
    });
  },[]);

 
  

  const handleSubmit = (formik) => {
    console.log(formik);
    uploadImage();
    sendFormRegisterGuide(formik)
      .then(r => {
        window.location.href = r
      })
  }
  
  return (
    <>
      <Row className="align-items-center mx-5">
        <Col>
          <h4>Formulario para convertirse en guía de turismo</h4>

          <Formik
            initialValues={{email:"", descripcion: ''}}
            validationSchema={GuideFormSchema}
            onSubmit={(handleSubmit)}>
            { (formProps) => (
              <Form  >
                <input
              
                  type="file"
                  placeholder="Correo electrónico"
                  label="Subir documento de indentidad - Carnet de guía"
                  onChange={(event)=>setImageSelected(event.target.files[0])}
                   />

                <Field
                  name="descripcion"
                  placeholder="Breve descripción"
                  label="Descripción"
                  component={WInput} />

                 <Field
                  name="email"
                  placeholder="Correo de Pago"
                  label="Correo de Afiliacion"
                  
                  component={WInput} />

                <div className="d-grid gap-2">
                  <Button type="submit" variant="primary" >
                    ¡Vamos!
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Col>
        <Col>
          <div className="text-center">
            <img
              style={{width: '250px'}}
              src="https://img.freepik.com/vector-gratis/ilustracion-concepto-cartera_114360-1985.jpg?t=st=1647717431~exp=1647718031~hmac=dd2aa33d3b90f30602d288d476d780ea9efd8f2c7fdb8b168608490611d0d8c1&w=740" alt="" />

            <h5>Genera ingresos enseñando lo maravilloso que es el mundo.</h5>

            <p className="my-4">
              Aplica por tan solo <strong>S/. 40.00</strong> mensuales.
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}