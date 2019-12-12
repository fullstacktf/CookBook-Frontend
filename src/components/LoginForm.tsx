import React, { FC, useState } from 'react';

export const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isFormDisabled, setIsFormDisabled] = useState(true);

    const validateForm = () => {
        const isValid = username.length > 3 && password.length > 3;
        setIsFormDisabled(!isValid);
    };

    const handleOnChange = ({ currentTarget: { name, value } }) => {
        if (name === 'username') {
            setUsername(value);
        } else {
            setPassword(value);
        }
        validateForm();
    };

    const doLogin = (event) => {
        event.preventDefault();
        console.log('Envio al backend', username, password);
        // const url = 'htt...';
        // request
        //     .post(url)
        //     .send({ title, description })
        //     .set('Authorization', `Bearer ${myJWTToken}`)
        //     .set('Accept', 'application/json')
        //     .then(res => {
        //             localStorage.setItem('MY_TOKEN', res.token);
        //     });
        // TODO llamo al backend
    };

    return <form onSubmit={doLogin}>
        <input value={username} name="username" onChange={handleOnChange}/>
        <input value={password} name="password" type="password" onChange={handleOnChange}/>
        <button disabled={isFormDisabled} type="submit"/>
    </form>
};
