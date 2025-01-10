import { Link } from "react-router-dom";
//import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import {Button, FormControl, Input} from "@chakra-ui/react";
//import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        // gender: "",
    });
    //const [name, setName] = useState('');

    //const { loading, signup } = useSignup();

    // const handleCheckboxChange = (gender) => {
    //     setInputs({ ...inputs, gender });
    // };
    const postDetails =(pics)=>{

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("inputs = ");
        //await signup(inputs);
    };
    const submitHandler =(e) => {
        e.preventDefault();
    };

    return (
            <div className='loginFormBlock'>
                <h1 className='display1'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='label p-2'>
                            <span className='text-base text-white'>Full Name</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter full name'
                            className='form-control'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label p-2 '>
                            <span className='text-base text-white'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Email-username'
                            className='form-control'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base text-white'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='form-control'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base text-white'>Confirm Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Confirm Password'
                            className='form-control'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <FormControl>
                        <label className='label'>
                            <span className='text-base text-white'>Upload your picture</span>
                        </label>
                        <Input type="file" className='inputFile' p={1.5} accept="image/*" onChange={(e)=>postDetails(e.target.files[0])} />
                    </FormControl>
                    <div>
                        <Link to={"/login"} className='' href='#'> Already have an account? </Link>
                    </div>
                    <Button className='button' disabled={'loading'} onClick={()=>submitHandler()}>
                        {!'loading' ? <span className='loading loading-spinner'></span> : "Sign Up"}
                    </Button>

                </form>
            </div>
    );
};
export default SignUp;

// STARTER CODE FOR THE SIGNUP COMPONENT
// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Sign Up <span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Full Name</span>
// 						</label>
// 						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
// 					</div>

// 					<div>
// 						<label className='label p-2 '>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Confirm Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Confirm Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>

// 					<GenderCheckbox />

// 					<a className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
// 						Already have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default SignUp;
