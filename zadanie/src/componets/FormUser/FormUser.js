import { Formik, Field, Form, ErrorMessage } from "formik";
import './FormUser.css';
import { UserFormSchemas } from "../../schemas/UserFormSchemas"

const FormUser = ({ takeForm }) => {

 return (
     <Formik initialValues={{ surname: "", name: "", age: "",}}
             validationSchemas={ UserFormSchemas }
             onSubmit={( values ) => takeForm(values)}
     >
         <Form>
             <label htmlFor="surName">First Name</label>
             <Field name="surname" type="text" />
             <ErrorMessage name="surname" />

             <label htmlFor="Name">Last Name</label>
             <Field name="name" type="text" />
             <ErrorMessage name="name" />

             <label htmlFor="age">Email Address</label>
             <Field name="age" type="number" />
             <ErrorMessage name="age" />

             <button type="submit">Submit</button>
         </Form>
     </Formik>


 );
};
export default FormUser;
