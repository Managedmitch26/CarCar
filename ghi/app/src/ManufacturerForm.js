import React, { useState } from 'react';

function ManufacturerForm(){
    const [name, setName] = useState("")
    const [hasSignedUp, sethasSignedUp] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault();
        const data = {
            "name":name,
        }

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            }
        }

        const response = await fetch(manufacturerUrl, fetchConfig)

        if (response.ok){
            setName('')
            sethasSignedUp(true)

        }
    }

    function handleName(event){
        const {value} = event.target
        setName(value)
    }

    let messageClasses = 'alert alert-success d-none mb-0';
    let formClasses = '';
    if (hasSignedUp) {
        messageClasses = 'alert alert-success mb-0';
        formClasses = 'd-none';
    }


    return(
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Create a manufacturer</h1>
                    <form className={formClasses} onSubmit={handleSubmit} id="create-location-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleName} placeholder="name" required type="text" name="name" id="name" className="form-control" />
                            <label htmlFor="name">Manufacturer Name</label>
                        </div>
                        <button className="btn btn-primary">Create</button>
                    </form>
                    <div className={messageClasses} id="success-message">
                        Manufacturer was created!
                     </div>
                </div>
            </div>
        </div>

    )

}
export default ManufacturerForm
