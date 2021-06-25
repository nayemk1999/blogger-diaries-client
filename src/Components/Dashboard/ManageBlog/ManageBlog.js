import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const url = 'http://localhost:3003/allblogs';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBlogs(data)
                setLoading(true)
            })

    }, [])

    const deletedProduct = (id) => {
        const url = `http://localhost:3003/deleted/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('SuccessFully Delete your Blogs from Database.')
                }
            })
    }
    return (
        <div className="">
            <h1 className='text-white p-3'>Manage Service</h1>
                <table className="table table-striped w-100 text-white">
                    <thead className='dashboardWel'>
                        <tr>
                            <th scope="col">Blog Title Name</th>
                            <th scope="col">Author</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading && blogs.length > 0 ?
                            blogs.map(blog =>
                                <tr>
                                    <td>{blog.title}</td>
                                    <td>{blog.author}</td>
                                    <button className="text-white btn my-2 my-sm-0 me-md-2 ml-3 mt-3" style={{ backgroundColor: '#C91729' }} onClick={() => deletedProduct(blog._id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </tr>
                            )
                            :
                            <div className="text-center">
                                {loading ?
                                    <h4 className="mt-3 p-3 text-danger">You haven't any Service yet. Please add Service and come to this page.</h4>
                                    : <div class="spinner-border text-danger" style={{ width: '3rem', height: '3rem', marginTop: '20%', marginLeft: '60%' }} role="status">
                                    </div>
                                }
                            </div>
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default ManageBlog;