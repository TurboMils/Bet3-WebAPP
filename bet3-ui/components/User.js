import React from 'react'

const User = ({ user, deleteUser, editUser }) => {
    return (
        <tr key={user.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.firstName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.lastName}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user.emailId}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 ">

                    <button
                        onClick={(e, id) => editUser(e, user.id)}
                        className="rounded bg-slate-300 text-black px-6 py-2 font-semibold">
                        Edit
                    </button>
                    <button
                        onClick={(e, id) => deleteUser(e, user.id)}
                        className="rounded  bg-slate-600 text-white px-6 py-2 font-semibold">
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default User