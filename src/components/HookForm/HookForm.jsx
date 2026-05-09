import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submit', name, email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange}  placeholder='Enter Name'/>
                <br />
                <input type="email" onChange={emailOnChange} name=""  placeholder='Enter Email' />
                <br />
                <input type="password" name="" onChange={passwordOnChange} placeholder='Enter Password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;