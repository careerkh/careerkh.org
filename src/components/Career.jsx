import React, { useState, useEffect } from 'react';
import axios from 'axios';

const token = 'cabd2c6851cc480ea399ac81fe263bab1ee4bc6fc057f431eb4f8b87a130a26fb53c3d46a41f005aa949b6ff2911bc4290a806f1364a74333b7fd536653c1d6e1883de2ea3782f23f0332540979d38b66cd35bf4f99c27e8dbb821f33649644362c7fc9557efdefbbdf1c00595ee653fc4797e3998a5360865d99bbf01c0565b'
const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export default function Career() {
    const [ careers, setCareers ] = useState([]);
    const { data } = careers;

    useEffect(() => {
        axios.get('https://strapi-production-cf63.up.railway.app/api/careers', config)
            .then(res => {
                console.log(res)
                setCareers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-14">
            <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none ">
                {data && data.length
                    ? data.slice(data.length - 5, data.length).map((career) => (
                        <div key={career.attributes.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={career.attributes.imageUrl} alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <a href={career.attributes.href} className="mt-2 block">
                                        <div className='grid grid-flow-row-dense grid-cols-3'>

                                            <div className=' col-span-2'>
                                                <p className="text-xl font-semibold text-gray-900">{career.attributes.position}</p>
                                                <p className="my-3 text-base text-gray-500">{career.attributes.caption}</p>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                                    <p className="mx-3 text-base text-gray-500">{career.attributes.term}</p>
                                                </div>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>                                            <p className="mx-3 text-base text-gray-500">{career.attributes.location}</p>
                                                </div>

                                                <div className="flex align-middle items-center text-center py-2">
                                                    <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>                                            <p className="mx-3 text-base text-gray-500">{career.attributes.date}</p>
                                                </div>
                                            </div>
                                            <div className=' flex justify-end'>
                                                <div className='w-[200px] h-[200px] bg-[#F8F8F8] grid grid-flow-cols-dense grid-row-3 content-center'>
                                                    <div className=' font-bold text-xl text-center' >
                                                        10 Views
                                                    </div>
                                                    <div className=' text-center mt-[10px]'>
                                                        Learn more about membership policy
                                                    </div>

                                                    <div className=' flex justify-center'>
                                                        <button
                                                            type="button"
                                                            className="inline-flex items-center rounded-md border border-transparent bg-[#1F2937] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary_700 justify-center mt-6 w-3/4"
                                                        >
                                                            Expand
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className=''>

                                        </div>

                                    </a>
                                </div>
                            </div>
                        </div>
                    )) : "No Careers"
                }
            </div>
        </div>
    )
}