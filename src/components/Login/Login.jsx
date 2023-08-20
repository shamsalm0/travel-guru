import React from 'react';



const Login = () => {
    return (
        <div>
           <div className="flex items-center justify-center min-h-screen h-full bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white rounded shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                
                {/* Email and Password Form */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md" />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
                
                {/* Google and Facebook Login Buttons */}
                <div className="mt-6">
                    <p className="text-gray-600 mb-2">Or log in with:</p>
                    <div className="flex space-x-2">
                        <button className="btn btn-google">Google 
</button>
                        <button className="btn btn-facebook">Facebook </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;