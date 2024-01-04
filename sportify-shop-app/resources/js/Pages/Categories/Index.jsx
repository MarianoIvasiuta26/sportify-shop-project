import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton'

const index = ({categories, auth}) => {
  return (
    <>

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Categorías</h2>}
        >
            <Head title="Categorías" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <table className="min-w-full text-left text-sm font-light">
                                    <thead>
                                        <tr className="border-b font-medium dark:border-neutral-500">
                                            <th className="border px-4 py-2">Name</th>
                                            <th className="border px-4 py-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {categories.length > 0 ? (
                                            categories.map((category, index) => (
                                                <tr key={index} className="text-center">
                                                    <td className="border border-green-600 px-4 py-2">{category.name}</td>
                                                    <td className="border border-green-600 px-4 py-2">
                                                        <div className="flex flex-row justify-center">
                                                        <form action={route('categories.destroy', category.id)} method="POST">
                                                            <input type="hidden" name="_method" value="DELETE" />
                                                            <PrimaryButton type="submit" className="bg-red-500 hover:bg-red-600">Delete</PrimaryButton>
                                                        </form>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2">No hay categorías disponibles.</td>
                                            </tr>
                                        )}
                                    </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-center mt-4">
                        {categories.length > 0 && (
                            <Pagination links={categories.links} />
                        )}
                    </div>
                </div>
        </AuthenticatedLayout>
    </>
  )
}

export default index
