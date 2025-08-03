export default function Contact(){
    const config = {
        email : 'farinfaris008@gmail.com',
        phone : '+91 8098624035'
    }
    return <section id='contact' className='flex flex-col bg-primary text-white px-5 py-32'>
        <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4  border-white mb-5 w-[150px] font-bold'>Contact</h1>
                <p className='pb-5'>If you want to discuss more in detail, Please contact me<a className='btn' href='#'>Download</a> </p> 
                <p className='py-2'><span className='font-bold'>Email : </span>{config.email}</p>
                <p className='py-2'><span className='font-bold'>Phone : </span>{config.phone}</p>        
            </div>
    </section>
}