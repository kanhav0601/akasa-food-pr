"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import GlobalApi from '@/app/_utils/GlobalApi'; // Ensure this path is correct
import { Button } from '@/components/ui/button';
import Footer from '@/app/_components/Footer';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State for error messages
  const [success, setSuccess] = useState(''); // State for success messages

  const onSignIn = async (e) => {
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
      const resp = await GlobalApi.signin(email, password);
      console.log('User signed in:', resp); // Log the response (contains token)
      
      // Store the JWT token (assuming the token is returned as `jwt`)
      localStorage.setItem('token', resp.jwt);
      
      // Verify the token is stored and redirect
      if (localStorage.getItem('token')) {
        setSuccess('Sign in successful!'); // Set success message
        window.location.href = '/'; // Redirect to home page
      } else {
        setError('Failed to obtain token.'); // Set error message if token is not found
      }
    } catch (err) {
      console.error('Error signing in:', err); // Handle any errors
      if (err.response) {
        setError(err.response.data.message || 'Error signing in'); // Update error message
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
            <h1 className="text-2xl font-bold">Sign In</h1>
          </div>
          <form className="space-y-4" onSubmit={onSignIn}>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {error && <p className="text-red-500 text-center">{error}</p>} {/* Display error message */}
            {success && <p className="text-green-500 text-center">{success}</p>} {/* Display success message */}
            <Button
              type="submit"
              disabled={!(email && password)} // Disable if any field is empty
              className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
            >
              Sign In
            </Button>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <a href="/create-account" className="text-pink-500 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </div>
      <Footer className="mt-0" />
    </div>
  );
}

export default SignIn;
