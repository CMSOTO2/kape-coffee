import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <footer className="px-3 bg-kape-black font-bold text-white">
            <div className="flex flex-col max-w-[1200px] mx-auto">
                <div className="py-12 md:flex md:justify-between md:pb-0">
                    {/* Brand Container */}
                    <div className="flex flex-col items-center mb-12">
                        {/* <Image src={kapeLogo} alt={'Kape Cafe Logo'} className='mb-6' loading='lazy' /> */}
                        <p className="opacity-70 text-center text-sm">Asian-Inspired Cafe in Ohio</p>
                    </div>
                    <div>
                        <div className="md:flex md:gap-20">
                            {/* Links Container */}
                            <ul className="text-base flex flex-col gap-8 items-center mb-12 md:flex-row">
                                {/* Todo add link hrefs */}
                                <li className="md:hover:scale-110 md:hover:text-kape-orange"><a href="#">Home</a></li>
                                <li className="md:hover:scale-110 md:hover:text-kape-orange"><a href="#">About Us</a></li>
                                <li className="md:hover:scale-110 md:hover:text-kape-orange"><a href="#">Contact Us</a></li>
                                <li className="md:hover:scale-110 md:hover:text-kape-orange"><a href="#">Our Story</a></li>
                            </ul>
                            {/* Socials Container */}
                            <div className="flex gap-6 justify-center mb-12">
                                <a href="#" className="md:hover:scale-110">
                                    {/* <Image src={facebookLogo} alt={"Link to Kape Facebook"} /> */}
                                </a>
                                <a href="https://www.instagram.com/kapecoffee.co/" target="_blank" className="md:hover:scale-110">
                                    {/* <Image src={instagramLogo} alt={"Link to Kape Instagram"} /> */}
                                </a>
                            </div>
                        </div>
                        {/* Locations Container */}
                        <div className="text-lg flex flex-col items-center gap-8 md:flex-row md:gap-16">
                            <div className="md:hover:text-kape-orange md:hover:scale-110">
                                <a href="https://maps.app.goo.gl/e4L15S1j2aeWHxhS7" className="flex justify-center items-center" target="_blank">
                                    <span>
                                        FRI. 8a-1p @ The Branch
                                        <span className="flex gap-2 justify-center md:justify-start">
                                            {/* <Image src={location} alt={"FRI. 8a-1p @ The Branch google map link"} /> */}
                                            1636 Oak St
                                        </span>
                                    </span>
                                </a>
                            </div>
                            <div className="md:hover:text-kape-orange md:hover:scale-110">
                                <a href="https://maps.app.goo.gl/bbg3J73qGFx3Gh697" className="flex justify-center md:justify-start" target="_blank">
                                    <span>
                                        SAT. 9a-3p @ Leisure Club
                                        <span className="flex gap-2 justify-center md:justify-start">
                                            {/* <Image src={location} alt={"SAT. 9a-3p @ Leisure Club google map link"} /> */}
                                            1610 Oak St
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Privacy Policy Container */}
                <div className="pt-8 pb-6 text-sm flex flex-col gap-4 text-center border-t-[1px] border-t-white border-opacity-10 md:flex-row md:gap-0 md:justify-between">
                    <p className="opacity-70">Privacy Policy</p>
                    <p className="opacity-50">&copy; 2024 Kape Coffee - All rights preserved.</p>
                </div>
            </div>
        </footer>

    )
}