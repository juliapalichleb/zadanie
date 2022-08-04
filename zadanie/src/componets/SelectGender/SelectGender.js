import { useField } from "formik";

const SelectGender = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error && <div>{meta.error}</div>}
        </>
    )
}
export default SelectGender;