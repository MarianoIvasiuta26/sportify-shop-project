import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className='min-w-full text-left text-sm font-light'>
                                <thead className='border-b font-medium dark:border-neutral-500'>
                                    <tr>
                                        <th scope="col" className='px-6 py-4'>Name</th>
                                        <th scope="col" className='px-6 py-4'>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b dark:border-neutral-500'>
                                        <td className='whitespace-nowrap px-6 py-4'>{auth.user.name}</td>
                                        <td className='whitespace-nowrap px-6 py-4'>{auth.user.email}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
