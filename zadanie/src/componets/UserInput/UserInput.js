import { useField } from "formik";

const UserInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{ label }</label>
            <input{ ...field} {...props }/>
            {meta.touched && meta.error && <div>{ meta.error }</div>}
        </>
    );
};

export default UserInput;