import React from 'react'

const User = () => {
  return (
    <tr>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                Milan
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                Kot
                            </div>
                        </td>
                        <td className='text-left px-6 py-4 whitespace-nowrap'>
                            <div className='text-sm text-gray-500'>
                                milan.kot@orange.com
                            </div>
                        </td>
                        <td className='text-right px-6 py-4 whitespace-nowrap'>
                            <a href='#' className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4'> Edit </a>
                            <a href='#' className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'> Delete </a>
                        </td>
                    </tr>
  )
}

export default User