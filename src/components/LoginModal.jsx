import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import bg from '../assets/img/bg-travel-1.png'
import * as Yup from 'yup'
import WInput from "./Form/Input";
import { login } from "api/AuthApi";

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { loginAction } from "store/auth/authSlice";

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Formato inválido').required('El correo es requerido'),
    password: Yup.string().min(4).required('La contraseña es requerida')
})

export default function LoginModal(){

    console.log('MODAL');

    const [show, setShow] = useState(false);
  
    const dispatch = useDispatch()

    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const navigate = useNavigate()

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Ingresar
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body className="p-5">
                    <MHead/>
                    <div className="d-grid gap-2 mt-3">
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={LoginSchema}
                            onSubmit={ async (values) => {
                                const res = await login({email: values.email, password: values.password})
                                if(res === 'ok'){
                                    handleClose()
                                    dispatch(loginAction)
                                    navigate('/home')
                                }
                            }}>
                            { () => (
                                <Form>
                                    <Field name="email"  type="email"  placeholder="Correo electrónico"  label="Ingrese su email"  component={WInput} />
                                    <Field name="password" type="password" placeholder="Contraseña" label="Ingrese su contraseña" component={WInput} />

                                    <div className="d-grid gap-2">
                                        <Button type="submit" variant="primary" >
                                            Ingresar
                                        </Button>
                                    </div>
                                </Form>
                            ) }
                        </Formik>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

function Head() {
    console.log('HEAD');
    return (
        <>
            <img src={bg} alt="s" style={{width: '100%'}}></img>
            <div sx={{paddingBottom: '100px'}} >
                <h4 className="my-2">
                    <strong>Desbloquea tu mapa</strong>
                </h4>
            </div>
            <div id="modal-modal-description" className="my-2">
                Inicia sesión para empezar a desbloquear lugares alrededor del mundo.
                <strong>¡Explora tu alrededor ahora mismo!</strong>
            </div>
        </>
    )
}

const MHead = React.memo(Head)