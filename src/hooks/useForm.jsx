import { useState } from 'react'

export const useForm = (callback) => {
	const [values, setValues] = useState({});

    const handleSubmit = e => {
        e.preventDefault();
        callback();
    }

    const handleChanges = e => {
		setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
	};

    const clear = () => setValues({});

    return {
        values,
        handleChanges,
        handleSubmit,
        clear
    }
}
