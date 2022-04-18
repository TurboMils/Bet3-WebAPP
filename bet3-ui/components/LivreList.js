import { React, useState, useEffect } from 'react'
import EditLivre from "./EditLivre"
import Livre from './Livre'

const LivreList = ({ livre }) => {
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/livres";
    const [livres, setLivres] = useState(null);
    const [loading, setLoading] = useState(true);
    const [livreId, setLivreId] = useState(null);
    const [responseLivre, setResponseLivre] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(USER_API_BASE_URL, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const livres = await response.json();
                setLivres(livres);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, [livre, responseLivre]);

    const deleteLivre = (e, id) => {
        e.preventDefault();
        fetch(USER_API_BASE_URL + "/" + id, {
            method: "DELETE",
        }).then((res) => {
            if (livres) {
                setLivres((prevElement) => {
                    return prevElement.filter((livre) => livre.id !== id);
                });
            }
        });
    };
    const editLivre = (e, id) => {
        e.preventDefault();
        setLivreId(id);
      };

        return (
            <>
            <div className='container px-10 my-10'>
                <div className='flex shadow border-b'>
                    <table className='min-w-full'>
                        <thead className='bg-gray-50'>
                            <tr>
                            <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Titre</th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Auteur</th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Nombre de pages</th>
                                <th className='text-left font-medium text-gray-500 uppercase tracking-wide py-3 px-6'>Actions</th>
                           </tr>
                        </thead>
                        {!loading && (
                            <tbody className='bg-white'>
                                {livres?.map((livre) => (
                                    <Livre livre={livre} key={livre.id} deleteLivre={deleteLivre} editLivre={editLivre} />
                                ))}
                            </tbody>
                        )}
                    </table>
                </div>
                
            </div>
            
            <EditLivre livreId={livreId} setResponseLivre={setResponseLivre} />
            </>
        )
    
}



    export default LivreList