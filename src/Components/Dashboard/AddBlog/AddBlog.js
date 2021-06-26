import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

const AddBlog = () => {
    const [uploadImg, setUploadImg] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    
    const onSubmit = data => {
        const newBlog = {
            title: data.title,
            blogContent: data.blogContent,
            subTitle: data.subTitle,
            imgURL: uploadImg.display_url,
            email: loggedInUser.email,
            postDate: new Date(),
            author: data.author
        }
        fetch('https://blogger-dairies.herokuapp.com/addBlog', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog)
        })
            .then(res => {
                if (res) {
                    alert('SuccessFully Added Your Blog to MongoDb');
                    history.push('/dashboard')
                }
            })
    };

    const handleChangeImg = (event) => {
        const imageData = new FormData()
        imageData.set('key', '1e2e9479967e7d1e75e2420a0a5c0c7a');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setUploadImg(response.data.data);
                // console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div >
            <h4 className='text-white p-3'>Add Blog:</h4>
            <form className=" pt-4 pl-1 row add-blog" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-6">
                    <label>Blog Title: </label>
                    <input className="form-control" name="title" placeholder="Enter Blog Title Name" {...register("title", { required: true })} /> <br />
                    {errors.title && <span>This field is required</span>} <br />
                    <label>Blog Content: </label>
                    <textarea rows="4" cols="50" className="form-control" type="textarea" name="blogContent" placeholder="Enter Blog Content" {...register("blogContent", { required: true })} /> <br />
                    {errors.blogContent && <span>This field is required</span>} <br />
                </div>
                <div className="col-md-6">
                    <label>Blog Sub Title: </label>
                    <input className="form-control " name="subTitle" placeholder="Enter Sub Title" {...register("subTitle", { required: true })} /> <br />
                    {errors.subTitle && <span>This field is required</span>} <br />
                    <label>Author Name: </label>
                    <input className="form-control " name="author" placeholder="Enter Author Name" {...register("author", { required: true })} /> <br />
                    {errors.author && <span>This field is required</span>} <br />
                    <label>Add Blog Cover Photo: </label>
                    <input className="form-control pb-3" name="image" type="file" {...register("image", { required: true })} onChange={handleChangeImg} /> <br />
                    {errors.image && <span>This field is required</span>} <br />
                </div>
                <input style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2 ml-auto" value='Add Blog' type="submit" />
            </form>
        </div>
    );
};

export default AddBlog;