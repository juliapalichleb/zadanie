import { useFormik } from "formik";
import * as YupObj from "yup";

const Form = ({ takeForm }) => {
    const formik = useFormik ({
        initialValues: {
            surname: "",
            name: "",
            age: "",
        },
        validationSchema: YupObj.object ({
        }),
        onSubmit: ( values ) => takeForm(values)
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                id="surname"
                name="surname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.surname}
            />
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />
            <input
                id="age"
                name="age"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.age}
            />
            <button  type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;