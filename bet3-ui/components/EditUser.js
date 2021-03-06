import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";

const EditUser = ({ userId, setResponseUser }) => {
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: "",
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(USER_API_BASE_URL + "/" + userId, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const _user = await response.json();
                setUser(_user);
                setShowModal(true);
            } catch (error) {
                console.log(error);
            }
        };
        if (userId) {
            fetchData();
        }
    }, [userId]);

    function closeModal() {
        setShowModal(false);
    }

    function openModal() {
        setShowModal(true);
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setUser({ ...user, [event.target.name]: value });
    };

    const reset = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const updateUser = async (e) => {
        e.preventDefault();
        const response = await fetch(USER_API_BASE_URL + "/" + userId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const _user = await response.json();
        setResponseUser(_user);
        reset(e);
    };

    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modifier
                                    </h3>
                                </div>

                                <div className="flex max-w-md max-auto">

                                    <div className="py-2">
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">
                                                Prenom
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={user.firstName}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2 font-semibold"></input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600 text-sm font-normal">
                                                Nom
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={user.lastName}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2 font-semibold"></input>
                                        </div>
                                        <div className="h-14 my-4">
                                            <label className="block text-gray-600  text-sm font-normal">
                                                Email Id
                                            </label>
                                            <input
                                                type="text"
                                                name="emailId"
                                                value={user.emailId}
                                                onChange={(e) => handleChange(e)}
                                                className="h-10 w-96 border mt-2 px-2 py-2">

                                            </input>
                                        </div>


                                    </div>


                                </div>
                                <div className="h-14 my-4 space-x-4 pt-4">

                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-14 py-8 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={reset}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-slate-500 text-white active:bg-slate-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={updateUser}
                                    >
                                        Modifier
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>


                </>
            ) : null}


        </>
    );
};

export default EditUser;