import React from 'react';

const SimpleForm = () => {
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <h2>simple form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your name' />
                <br></br>
                <input type="email" name="email" placeholder='Enter email' />
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;