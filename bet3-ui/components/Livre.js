import React from 'react'

const Livre = ({ livre, deleteLivre, editLivre }) => {
    return (
        <tr key={livre.id}>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{livre.titre}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{livre.auteur}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{livre.npPages}</div>
            </td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500 ">

                    <button
                        onClick={(e, id) => editLivre(e, livre.id)}
                        className="rounded bg-slate-300 text-black px-6 py-2 font-semibold">
                        Editer
                    </button>
                    <button
                        onClick={(e, id) => deleteLivre(e, livre.id)}
                        className="rounded  bg-slate-600 text-white px-6 py-2 font-semibold">
                        Supprimer
                    </button>
                </div>
            </td>
        </tr>
    );
};
export default Livre