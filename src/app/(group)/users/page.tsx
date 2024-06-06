'use client';

// Import necessary dependencies
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { UserTable } from '@/components/pages/users/UserTable';

// Define the Users component
export default function Users() {
  // Define state variables to manage users, loading state, and errors
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get the session status and router
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch users from the API
        const response = await fetch('/api/Getusers');
        // Check if the response is successful
        if (response.ok) {
          // Parse the JSON response
          const data = await response.json();
          // Update the state with the fetched users
          setUsers(data);
          // Log the users' data to the console
          console.log('Users:', data);
        } else {
          // If the response is not successful, throw an error
          throw new Error('Failed to fetch users');
        }
      } catch (error) {
        // If an error occurs, set the error state
        setError(error.message);
      } finally {
        // Set loading to false after fetching
        setLoading(false);
      }
    };

    // Call the fetchUsers function
    fetchUsers();
  }, []);


  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`/api/deleteuser/${id}`, { // Make sure the correct route is called
        method: 'DELETE'
      });
      if (response.ok) {
        // Remove the deleted user from the users state
        setUsers(users.filter(user => user._id !== id));
      } else {
        throw new Error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  
  // Render the component
  return (
    <div className="flex justify-center items-start h-screen bg-gray-100">
      <div className="w-full max-w-4xl">
        <h1 className="mb-4 text-center mt-10 text-4xl text-slate-700 font-serif font-bold">
          All Users
        </h1>
        <div className="w-full flex justify-center">
          {/* Check if there is an error */}
          {error && <p>Error: {error}</p>}
          {/* Check if the data is still loading */}
          {loading ? (
            <p>Loading...</p>
          ) : (
            // Render the UserTable component with the fetched users data
            <UserTable users={users} onDelete={handleDeleteUser} />
          )}
        </div>
      </div>
    </div>
  );
}
