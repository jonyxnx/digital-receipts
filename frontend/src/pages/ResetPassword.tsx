import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden.');
      return;
    }

    console.log('Nueva contraseña:', newPassword);

    navigate('/login'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 w-full">
      <div className="bg-white rounded-lg shadow-xl p-12 max-w-md w-full">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="newPassword" className="block text-gray-700 font-semibold mb-2">New Password</label>
            <input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Enter your new password"
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              placeholder="Confirm your new password"
              required
            />
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm text-center mt-2">{errorMessage}</div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-6 bg-green-600 text-white text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
