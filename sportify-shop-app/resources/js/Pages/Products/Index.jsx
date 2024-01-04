import React from 'react'
import Authenticated from '@/Layouts/AuthenticatedLayout'
import PrimaryButton from '@/Components/PrimaryButton'

const index = ({products}) => {
  return (
    <>
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <h1 className="text-3xl font-bold">Products</h1>
            </div>
            <div className="flex flex-col">

                <h1>Products</h1>

                <div className="overflow-x-auto">
                <table className="table-auto border-collapse border border-green-800">
                    <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="border border-green-600 px-4 py-2">Name</th>
                        <th className="border border-green-600 px-4 py-2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.length > 0 ? (
                        products.map((product, index) => (
                            <tr key={index} className="text-center">
                                <td className="border border-green-600 px-4 py-2">{product.name}</td>
                                <td className="border border-green-600 px-4 py-2">
                                    <div className="flex flex-row justify-center">
                                    <form action={route('products.destroy', product.id)} method="POST">
                                        <input type="hidden" name="_method" value="DELETE" />
                                        <PrimaryButton type="submit" className="bg-red-500 hover:bg-red-600">Delete</PrimaryButton>
                                    </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="2">No hay productos disponibles.</td>
                        </tr>
                    )}
                    </tbody>
                </table>
                </div>
                <div className="flex flex-row justify-center mt-4">
                {products.length > 0 && (
                    <Pagination links={products.links} />
                )}
                </div>
            </div>
        </div>
    </>
  )
}

export default index
