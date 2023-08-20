import React from 'react';
import { useContext } from 'react';
import {  BackgroundContext } from '../../Context/BackGroundProvider/BackGroundProvider';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const{createUser,updateUserProfile,loading}=useContext(BackgroundContext)

    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const fname=form.firstName.value;
        const lname=form.lastName.value;
        const img=form.imageUrl.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            form.reset();
            handleUpdateProfile(fname,lname,img)
        })
        .catch(error=>{
            console.error(error);
        })
       
    }

    const handleUpdateProfile=(fname,lname,imageUrl)=>{
        const profile = {
            displayName: fname + ' ' + lname, // Assuming you want to set the displayName
            photoURL: imageUrl
        };
        updateUserProfile(profile)
            .then(() => {
                console.log('Profile updated successfully');
            })
            .catch(error => {
                console.error('Error updating profile:', error);
            });
    }
    return (
        <div>
                <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
                
                {/* Sign-Up Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email"   className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password"  className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" id="firstName" name="firstName"  className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" id="lastName" name="lastName"  className="mt-1 p-2 w-full border rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">Profile Image URL</label>
                        <input type="url" id="imageUrl" name="imageUrl"  className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                   <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default SignUp;