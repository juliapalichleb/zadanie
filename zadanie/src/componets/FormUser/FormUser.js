import { Formik, Form } from "formik";
import './FormUser.css';
import {UserFormSchemas} from "../../schemas/UserFormSchemas";
import UserInput from "../UserInput/UserInput";
import SelectGender from "../SelectGender/SelectGender";
import CheckboxElement from "../CheckboxElement/CheckboxElement";

const FormUser = ({ takeForm }) => {
    return (
        <Formik initialValues={{ surname: "", name: "", age: "",}}
                validationSchema={ UserFormSchemas }
                onSubmit={( values, actions ) => {
                    values.checkboxElement = values.checkboxElement ? 'yes' : 'no';
                    takeForm(values)
                    actions.resetForm()
                }}
        >
            {() => (
                <Form>
                    <UserInput
                    label="Surname"
                    name="surname"
                    type="text"
                    />

                    <UserInput
                        label="Name"
                        name="name"
                        type="text"
                    />

                    <UserInput
                        label="age"
                        name="age"
                        type="number"
                    />

                    <SelectGender
                        label="Gender"
                        name="gender"
                    >
                        <option value="">Select gender</option>
                        <option value="She">She</option>
                        <option value="He">He</option>
                        <option value="Them/They">They / Them</option>
                    </SelectGender>
                    <CheckboxElement type="checkbox" name="checkboxElement" />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>


    );
};
export default FormUser;
