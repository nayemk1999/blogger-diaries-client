import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    const { register, handleSubmit} = useForm();
    const history = useHistory()

    const onSubmit = data => {
        const newAdmin = {
            email: data.email,
        }
        fetch('https://blogger-dairies.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAdmin)
        })
         .then(res => {
                if (res) {
                    alert('SuccessFully Added Admin')
                    history.push('/dashboard/addAdmin')
                }
            })
    };
    return (
        <div>
            <form className=" pt-4 pl-1 row" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-12">
                    <label>Email: </label>
                    <input className="form-control" name="email" placeholder="Enter Email" {...register("email")} /> <br />
                    <input style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2 ml-auto" value='Add Admin' type="submit" />
                </div> 
            </form>
        </div>
    );
};

export default MakeAdmin;