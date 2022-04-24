import { Form } from "react-bootstrap";

export default function WInput({
    field,
    label = 'Ingrese el campo',
    form: {touched, errors},
    ...props
})
{
    return (
        <div>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>{label}</Form.Label>
                <Form.Control {...field} {...props} />
                {errors[field.name] && touched[field.name] && (
                    <Form.Text className="text-danger">
                        {errors[field.name]}
                    </Form.Text>
                )}
            </Form.Group>
        </div>
    )
}