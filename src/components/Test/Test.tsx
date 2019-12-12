import React, { FC, useEffect } from 'react';

const bearer = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJsdWNhcyIsImlhdCI6MTU3NjE3ODU0NywiZXhwIjoxNTc3Mzg4MTQ3fQ.dVkmathpRJOiy0ggA3i3PvCtKG36ww6DQR1yO_JnWKY";

export const Test: FC = () => {
    useEffect(() => {
        fetch('https://chefs4.me/api/users/lucas', {
            headers: {
                'Authorization': `Bearer ${bearer}`
            }
        })
            .then(res => res.json())
            .then(response => console.log('a', response))
            .catch(err => console.error(err));
    }, []);


    return <div>Test</div>
};
