import { useField } from "formik";

const CheckboxElement = ({ ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="checkbox">
                <span>Are you a Polish?</span>
                <input{ ...field} {...props }/>
                {meta.touched && meta.error && <div>{ meta.error }</div>}
            </div>
        </>
    );
};

export default CheckboxElement;