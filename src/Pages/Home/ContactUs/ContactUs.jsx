import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import Aos from 'aos';
import 'aos/dist/aos.css';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h50yejs', 'template_yrb0vmo', form.current, '7LHDRcM3zlRsAesTO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div className='mt-28' id='contact'>
            <h2 data-aos="fade-left"  data-aos-duration="2000" className='text-4xl font-bold text-cyan-400 text-center mb-4'>CONNECT WITH ME</h2>
            <div className='flex justify-center'>
                <div className='w-1/3'>
                    <form ref={form} onSubmit={sendEmail}>
                        <label data-aos="fade-right" data-aos-duration="2000" className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white mt-6">Enter Your Name</span>
                            </div>
                            <input type="text" name='user_name' placeholder="Type here" className="input input-bordered rounded-none w-full bg-transparent border-[1px] border-white text-white focus:border-white input-sm" />
                        </label>
                        <label data-aos="fade-left" data-aos-duration="2000" className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-white mt-4">Enter Your Email</span>
                            </div>
                            <input type="text" name='user_email' placeholder="Type here" className="input input-bordered rounded-none w-full bg-transparent border-[1px] border-white text-white focus:border-white input-sm" />
                        </label>
                        <label data-aos="fade-right" data-aos-duration="2000" className="form-control">
                            <div className="label">
                                <span className="label-text text-white mt-4">Your Message</span>
                            </div>
                            <textarea className="textarea textarea-bordered rounded-none h-24 bg-transparent border-[1px] border-white text-white focus:border-white" placeholder="Type Message" name='message'></textarea>
                        </label>
                        <input data-aos="fade-left" data-aos-duration="2000" className='btn btn-outline text-cyan-500 mt-6' type="submit" value="Send Message" />
                    </form>
                </div>
            </div>
        </div>
    );
};