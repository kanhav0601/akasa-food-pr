"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import GlobalApi from '@/app/_utils/GlobalApi'; // Ensure this path is correct
import { Button } from '@/components/ui/button';
import Footer from '@/app/_components/Footer'; // Import Footer

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [success, setSuccess] = useState(''); // State for success messages

  const onCreateAccount = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Invalid email format'); // Set error message
      return;
    }

    setError(''); // Clear previous errors
    setSuccess(''); // Clear previous success messages

    try {
      const resp = await GlobalApi.registerUser(username, email, password);
      console.log('User registered:', resp.data); // Log the response
      
      // Assuming the token is returned as `jwt` in the response
      localStorage.setItem('token', resp.data.jwt); // Store the JWT token

      // Verify the token is stored and redirect to sign-in page
      if (localStorage.getItem('token')) {
        setSuccess('Account created successfully!'); // Set success message
        window.location.href = '/sign-in'; // Redirect to sign-in page
      } else {
        setError('Failed to obtain token.'); // Set error message if token is not found
      }
    } catch (err) {
      console.error('Error creating account:', err); // Handle any errors
      if (err.response) {
        setError(err.response.data.message || 'Error creating account'); // Update error message
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-pink-400 transition-shadow duration-300 w-full max-w-md">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-6">
              <Image src='/logo.png' width={200} height={200} alt='logo' />
            </div>
            <h1 className="text-2xl font-bold">Create Account</h1>
          </div>
          <form className="space-y-4" onSubmit={onCreateAccount}>
            <Input
              placeholder="Username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username} // Controlled input
            />
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email} // Controlled input
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password} // Controlled input
            />
            {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
            {success && <p className="text-green-500 text-center">{success}</p>} {/* Display success message */}
            <Button
              type="submit"
              disabled={!(username && email && password)} // Disable if any field is empty
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Create Account
            </Button>
          </form>
          <p className="text-center mt-4">
            Already have an account?{' '}
            <a href="/sign-in" className="text-pink-500 hover:underline">
              Sign In
            </a>
          </p>
        </div>
      </div>
      <Footer className="mt-0" /> {/* Add footer at the bottom */}
    </div>
  );
}

export default CreateAccount;
