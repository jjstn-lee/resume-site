import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { GiKatana, GiMoonOrbit, GiPalette, GiBookCover } from "react-icons/gi";
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5'

export const AboutSection = () => {
    return <section id="about" className="relative min-h-relative flex flex-col px-25 py-10">



        <div className="flex gap-2 justify-center">


            <div className="sm:p-6 md:px-20 lg:px-30 xl:px-100 flex flex-col gap-2 text-base inline-flex">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary"> about me</span>
                </h2>
                <div className="inline-flex gap-3 text-base items-center justify-center ">
                    <IoLocationSharp />
                    <p> long island, NY </p>
                </div>
                

                <p className="mt-4 text-left">
                    recent cs grad from the university of rochester with a fintech and AI/ML background.
                    passionate about all things computer and software.
                    currently getting over my obsession with the Three Body Problem series and Mario Kart by hyperfixating on the Dune series and Cyberpunk 2077. 
                </p>

                <p className="mt-4 text-left">
                    interests outside of software include art/design, kendo, reading, and astronomy.
                </p>
            </div>
        </div>

        <div className="inline-flex justify-center gap-10 py-5">
            <GiPalette />
            <GiKatana />
            <GiBookCover />
            <GiMoonOrbit />
        </div>




    </section>
}