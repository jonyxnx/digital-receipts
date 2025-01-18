import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLogin, setIsLogin] = useState(true); 
    const [isResetPassword, setIsResetPassword] = useState(false); 

    const backToLogin = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsResetPassword(false);
        setIsLogin(true);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLogin) {
        console.log('Iniciar sesión con:', email, password);
        } else {
        console.log('Registrarse con:', username, email, password);
        }
    };

    const handleForgotPassword = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); 
        setIsResetPassword(true); 
    };

    const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Recuperación de contraseña para:', email);

        setIsResetPassword(false); 
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 w-full">
        <div className="bg-white rounded-lg shadow-xl p-12 max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
            {isResetPassword ? 'Reset Password' : isLogin ? 'Log In' : 'Sign Up'}
            </h2>
            {isResetPassword ? (

            <form onSubmit={handleResetPassword} className="space-y-6">
                <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="youremail@example.com"
                    required
                />
                </div>

                <button
                type="submit"
                className="w-full py-3 px-6 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition"
                >
                Reset Password
                </button>

                {/* Enlace para regresar al login */}
                <div className="mt-4 text-center">
                <Link to="#" onClick={backToLogin} className="text-green-600 font-semibold hover:underline">
                    Back to Log In
                </Link>
                </div>
            </form>
            ) : (

            isLogin ? (
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="youremail@example.com"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your password"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition"
                >
                    Log In
                </button>
                
                {/* Enlace de recuperación de contraseña */}
                <div className="mt-4 text-center">
                    <Link to="#" onClick={handleForgotPassword} className="text-green-600 font-semibold hover:underline">
                    Forgot Password?
                    </Link>
                </div>
                </form>
            ) : (
        
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="username" className="block text-gray-700 font-semibold mb-2">Username</label>
                    <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Choose a username"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="youremail@example.com"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                    <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Your password"
                    required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition"
                >
                    Sign Up
                </button>
                </form>
            )
            )}

            {/* Enlace para cambiar entre log in, register */}
            <div className="mt-6 text-center">
            { isResetPassword ? <></> : isLogin ? (
                <p className="text-gray-600">
                Don't have an account?{' '}
                <Link to="#" onClick={() => setIsLogin(false)} className="text-green-600 font-semibold hover:underline">
                    Sign up here
                </Link>
                </p>
            ) : (
                <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="#" onClick={() => setIsLogin(true)} className="text-green-600 font-semibold hover:underline">
                    Log in here
                </Link>
                </p>
            )}
            </div>
        </div>
        </div>
    );
};

export default Login;
