import { React, useState , useEffect } from 'react'
import User from './User'

const UserList = () => {
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
    const [users, setUsers] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
          setloading(true);
          try {
              const response = await fetch(USER_API_BASE_URL, {
                  method : "GET",
                  headers: {
                      "Content-Type":"application/json",
                  },
              });
              const users = await response.json();
              setUsers(users);
          } catch (error) {
              console.log(error);
          }
          setloading(false);
      };
      fetchData();
    },[]);
    
  return (
    <div className='container mx-auto my-8'>
        <div className='flex shadow border-b'>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>FirstName</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>LastName</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Email</th>
                        <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody className='bg-white'>
                    {users?.map((user) => (
                    <User user= {user} key={user.id}/>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default UserList