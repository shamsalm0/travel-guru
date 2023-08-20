import React, { useContext } from 'react';
import { BackgroundContext } from '../../Context/BackGroundProvider/BackGroundProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {

const{signIn}=useContext(BackgroundContext)
const location=useLocation();
const navigate=useNavigate();
const from=location.state?.from?.pathname || '/';
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user);
            form.reset();
            navigate(from,{replace:true})
        })
        .then(error=>{
            console.error(error)
        })
    }
    return (
        <div>
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
                
                {/* Sign-In Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email"  className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password"  className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Sign In</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignIn;