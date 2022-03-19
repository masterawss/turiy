import WInput from "components/Form/Input"
import { Field, Form, Formik } from "formik"
import { useState } from "react"
import { Container, Card, Button } from "react-bootstrap"
import * as Yup from 'yup'

const GuideFormSchema = () => Yup.object().shape({
  doc: Yup.mixed().required('El documento es requerido'),
  descripcion: Yup.string().required('Ingrese una descripción')
})

export const GuideRegister = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({})
  return (
    <>
      <Container className="py-4">
        <div className="bs-stepper">
          <div className="bs-stepper-header" role="tablist">
            <div className={`step ${step >= 1 && 'active'}`} data-target="#logins-part">
              <button type="button" className="step-trigger step" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                <span className="bs-stepper-circle">1</span>
                <span className="bs-stepper-label">Formulario</span>
              </button>
            </div>
            <div className="line"></div>
            <div className={`step ${step >= 2 && 'active'}`} data-target="#information-part">
              <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                <span className="bs-stepper-circle">2</span>
                <span className="bs-stepper-label">Pago</span>
              </button>
            </div>
            <div className="line"></div>
            <div className={`step ${step >= 3 && 'active'}`} data-target="#information-part">
              <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                <span className="bs-stepper-circle">3</span>
                <span className="bs-stepper-label">Validación</span>
              </button>
            </div>
          </div>
        </div>
        <Card>
          <Card.Body>
            {
              step === 1 && (
                <>
                  <h4>Formulario para convertirse en guía de turismo</h4>

                  <Formik
                    initialValues={{doc: '', descripcion: ''}}
                    validationSchema={GuideFormSchema}
                    onSubmit={ async (values) => {
                        setForm(values)
                        setStep(2)
                    }}>
                    { () => (
                      <Form>
                        <Field
                          name="doc"
                          type="file"
                          placeholder="Correo electrónico"
                          label="Subir documento de indentidad - Carnet de guía"
                          component={WInput} />

                        <Field
                          name="descripcion"
                          placeholder="Breve descripción"
                          label="Descripción"
                          component={WInput} />

                        <div className="d-grid gap-2">
                          <Button type="submit" variant="primary" >
                            Siguiente
                          </Button>
                        </div>
                      </Form>
                    ) }
                  </Formik>
                </>
              )
            }
            {
              step === 2 && (
                <>
                2
                </>
              )
            }
            {
              step === 3 && (
                <>
                3
                </>
              )
            }
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}