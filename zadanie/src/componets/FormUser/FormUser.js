import { Formik, Form } from "formik";
import {UserFormSchemas} from "../../schemas/UserFormSchemas";
import UserInput from "../UserInput/UserInput";
import SelectGender from "../SelectGender/SelectGender";
import CheckboxElement from "../CheckboxElement/CheckboxElement";
import Button from '@mui/material/Button';
import './FormUser.css';

const FormUser = ({ takeForm }) =>
        <Formik initialValues={{ surname: "", name: "", age: "", checkboxElement: false }}
                validationSchema={ UserFormSchemas }
                onSubmit={( values, actions ) => {
                    takeForm(values)
                    actions.resetForm()
                }}
        >
            {() => (
                <Form className="form">
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
                        label="Age"
                        name="age"
                        type="number"
                    />
                    <SelectGender
                        label="Gender"
                        name="gender"
                    >
                        <option value="She">She</option>
                        <option value="He">He</option>
                        <option value="Them/They">They / Them</option>
                    </SelectGender>
                    <CheckboxElement type="checkbox" name="checkboxElement" />
                    <Button variant="contained" type="submit">Submit</Button>
                </Form>
            )}
        </Formik>

export default FormUser;
