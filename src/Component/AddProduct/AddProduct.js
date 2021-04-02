import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import './AddProduct.css'
import { Button } from 'react-bootstrap';
import upload from '../../images/cloud-upload-outline 1.png'

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [fileName, setFileName] = useState('Upload Image');

    const onSubmit = (data) => {
        const eventData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            ImageURL: imageURL
        }
        const url = 'https://still-sierra-25000.herokuapp.com/addProduct'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                alert("Product added Successfully")
            })
    };
    const handleImageUpload = event => {
        setFileName(event.target.files[0].name)
        const imageData = new FormData()
        imageData.set('key', '3cc9f1c005a3c4ac0be1edb9ddfb87ef')
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='products'>
            <h2 style={{paddingLeft:'10px'}}>Add Product</h2>
            <div className='formContainer'>
                <form  onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row spaceInput">
                        <div className="form-group col-md-5 spaceBetween">
                            <label><h6>Product Name</h6></label>
                            <input name="name" className="form-control" placeholder="product name" ref={register} />
                        </div>
                        <div className="form-group col-md-5">
                            <label><h6>Weight</h6></label>
                            <input name="weight" className="form-control" placeholder="product weight" ref={register} />
                        </div>
                    </div>
                    <div className="form-row spaceInput">
                        <div className="form-group col-md-5 spaceBetween">
                            <label> <h6>Add Price</h6></label>
                            <input className="form-control" name="price" placeholder="product price" ref={register} />
                        </div>
                        <div className="form-group col-md-5 ">
                            <label htmlFor="myInput"> <br />
                                <img src={upload} alt="" /> {fileName}
                            </label>
                            <input name="addPhoto" id='myInput' type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
                        </div>
                    </div>
                    <Button disabled={imageURL?'':"true"} className='submitButton' variant='outline-success' type="submit">Save</Button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;