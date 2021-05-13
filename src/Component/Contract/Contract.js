import React from 'react';
import './Contract.scss'
import { useForm } from "react-hook-form";
const Contract = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="contract" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-6 col-md-7 offset-md-5">
                        <div data-aos="fade-left">
                            <div className="InputFild">
                                <div className="title">
                                    <p>Reach Us Quickly</p>
                                    <h1>CONTACT US</h1>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input className="form-control inputCon" placeholder="Your name" {...register("name")} />
                                    {/* <br /> */}
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input className="form-control inputCon" placeholder="Your email" {...register("email")} />
                                            {/* <br/> */}
                                        </div>
                                        <div className="col-md-6">
                                            <input className="form-control inputCon" placeholder="Your phone" {...register("phone")} />
                                        </div>
                                    </div>
                                    {/* <br /> */}
                                    <textarea className="form-control inputMessege" placeholder="Message"{...register("exampleRequired", { required: true })} />
                                    {errors.exampleRequired && <span>This field is required</span>}
                                    {/* <br /> */}
                                    <input className="conBtn" type="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contract;