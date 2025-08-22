import HeroImg  from '../assets/hero.png';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle:'Im a React Developer and Designer',
        social  : {
            instagram:'https://www.instagram.com/mr.mohd_faris?igsh=MXJqc21yNm53bXA3Yg==',
            facebook:'',
            linkedin:'https://www.linkedin.com/in/mohamed-faris-97302b205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRmoQF%2BW1TnmWIYO%2FMDsRVw%3D%3D'
        }

    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white text-4xl font-hero-font'>Hi, <br/> Im <span className='text-black'>MD</span> Faris
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                <a href={config.social.linkedin}className='hover:text-white' ><AiOutlineLinkedin size={40}/></a>
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} alt='MD Faris - React Developer and Designer' />
    </section>
}