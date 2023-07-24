import './index.css';
// import map from './map.png'

export default function Discription() {
    return (
        <>
            <div className='container p-5 flex flex-wrap'>
                <div className='sm:w-5/12'>
                    <h1 className='font-medium'>Description</h1>
                    <textarea className='border rounded-md  border-black resize-none w-11/12 h-48 p-2 mt-3'></textarea>
                </div>
                <div className='sm:w-7/12'>
                    <h1 className='font-medium'>Customer Details</h1>
                    <div className='border rounded-md border-black mt-3'>
                        <div className='flex flex-wrap my-2'>
                            <p className='sm:w-3/12 text-end'>Customer Name :</p>
                            {/* <p className='sm:w-1/12'>&nbsp;</p> */}
                            <p className='sm:w-8/12 ml-4'>Bala</p>
                        </div>
                        <div className='flex flex-wrap my-3'>
                            <p className='sm:w-3/12 text-end'>Address Line1 :</p>
                            {/* <p className='sm:w-1/12'>&nbsp;</p> */}
                            <p className='sm:w-4/12 ml-4'>Kothu Karar Street  </p>
                            <p className='sm:w-4/12'>&nbsp;</p>
                        </div>
                        <div className='flex flex-wrap my-3'>
                            <h3 className='sm:w-3/12 text-end'>Address Line2 :</h3>
                            {/* <p className='sm:w-1/12'>&nbsp;</p> */}
                            <p className='sm:w-4/12 ml-4'>Periyavalasu </p>
                            <p className='sm:w-4/12'>&nbsp;</p>
                        </div>
                        <div className=' flex flex-wrap my-3'>
                            <div className='sm:w-6/12 flex flex-wrap'>
                                <p className='sm:w-6/12 text-end'>City:</p>
                                {/* <p className='sm:w-2/12'>&nbsp;</p> */}
                                <p className='sm:w-5/12 ml-4'>Erode</p>
                            </div>
                            <div className='sm:w-6/12 flex flex-wrap text-start'>
                                <p className='sm:w-6/12 text-end'>State:</p>
                                {/* <p className='sm:w-2/12'>&nbsp;</p> */}
                                <p className='sm:w-3/12 ml-4'>Tamilnadu</p>
                            </div>
                        </div>
                        <div className=' flex flex-wrap my-3'>
                            <div className='sm:w-6/12 flex flex-wrap'>
                                <p className='sm:w-6/12 text-end'>Phone Number:</p>
                                {/* <p className='sm:w-2/12'>&nbsp;</p> */}
                                <p className='sm:w-5/12 ml-4'>0987654321</p>
                            </div>
                            <div className='sm:w-6/12 flex flex-wrap text-start'>
                                <p className='sm:w-6/12 text-end'>Pin Code:</p>
                                {/* <p className='sm:w-2/12'>&nbsp;</p> */}
                                <p className='sm:w-3/12 ml-4'>638004</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container flex flex-wrap p-5'>
                <div className='sm:w-6/12'>
                    <h1 className='font-medium'>Location</h1>
                    <img src="" className='w-full h-60 rounded-lg mt-3' />
                </div>
                <div className='sm:w-6/12'>
                    <p className='w-full h-52'></p>
                    <div className='flex flex-wrap'>
                        <p className='ml-5 font-medium'>Work Status: Started</p>
                    </div>
                    <div className='flex flex-wrap mt-2'>
                        <button className='bg-gray-300 w-28 ml-5 h-8 rounded-md font-medium'>Start</button>
                        <button className='bg-gray-300 w-28 ml-5 h-8 rounded-md font-medium'>Finish</button>
                    </div>
                </div>
            </div>
            {/* <div className='container p-5 grid'>
                <div className=' border col-start-1 col-end-5'>
                    <h1>Description</h1>
                    <textarea className='border border-black'></textarea>
                </div>
                <div className=' border col-start-5 col-end-12'>
                    <h1>Customer Details</h1>
                    <div className='border border-black'>
                        <div className='grid p-2 border'>
                            <p className='col-start-1 col-end-2 text-end border'>customer name :</p>
                            <p className='col-start-2 col-end-12'>Bala</p>
                        </div>
                        <div className='grid p-2'>
                            <p className='col-start-1 col-end-2 text-end border'>Address Line1 :</p>
                            <p className='col-start-2 col-end-12 '>Kothu Karar Street</p>
                        </div>
                        <div className='grid p-2'>
                            <p className='col-start-1 col-end-2 text-end'>Address Line2 :</p>
                            <p className='col-start-2 col-end-12'>Periyavalasu</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
