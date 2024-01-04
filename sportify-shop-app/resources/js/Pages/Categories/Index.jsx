import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import {useForm, Head} from '@inertiajs/inertia-react'

const index = () => {

    return (
        <>
            <Head title="Categories" />
            <Authenticated>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <h1 className="text-3xl font-bold">Categories</h1>
                        <PrimaryButton href={route('categories.create')} className="bg-green-500 hover:bg-green-600">Create</PrimaryButton>
                    </div>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto">
                            <table className="table-auto border-collapse border border-green-800">
                                <thead>
                                    <tr className="bg-green-500 text-white">
                                        <th className="border border-green-600 px-4 py-2">Name</th>
                                        <th className="border border-green-600 px-4 py-2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category, index) => (
                                        <tr key={index} className="text-center">
                                            <td className="border border-green-600 px-4 py-2">{category.name}</td>
                                            <td className="border border-green-600 px-4 py-2">
                                                <div className="flex flex-row justify-center">
                                                    <PrimaryButton href={route('categories.edit', category.id)} className="bg-blue-500 hover:bg-blue-600">Edit</PrimaryButton>
                                                    <form action={route('categories.destroy', category.id)} method="POST">
                                                        <input type="hidden" name="_method" value="DELETE" />
                                                        <PrimaryButton type="submit" className="bg-red-500 hover:bg-red-600">Delete</PrimaryButton>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-row justify-center mt-4">
                            {categories.length > 0 && (
                                <Pagination links={categories.links} />
                            )}
                        </div>
                    </div>
                </div>
            </Authenticated>

        </>
    )
}

export default index
