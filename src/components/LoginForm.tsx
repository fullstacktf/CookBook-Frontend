import React, { FC, useState } from 'react';

export const LoginForm: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChange = (event) => {
        if (event.currentTarget.name === 'username') {
            setUsername(event.currentTarget.value);
        } else {
            setPassword(event.currentTarget.value);
        }
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
        <button type="submit"/>
    </form>
};
