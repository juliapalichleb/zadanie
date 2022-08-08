import * as YupObj from "yup";

export const UserFormSchemas = YupObj.object().shape ({
    name: YupObj.string()
        .max(10, 'Too long'),
    age: YupObj.number().positive()
        .min(18, 'Too young')
        .max(40, 'Too old'),
    gender: YupObj.string()
        .oneOf(["she","he", "Them_They"]),
    });
