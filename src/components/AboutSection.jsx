import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";
import { GiKatana, GiMoonOrbit, GiPalette, GiBookCover } from "react-icons/gi";
import { IoLogoGithub, IoLogoLinkedin, IoMail, IoLocationSharp } from 'react-icons/io5'

export const AboutSection = () => {
    return <section id="about" className="relative min-h-relative flex flex-col px-25">



        <div className="flex gap-2 px-150 justify-center">
            <div className="flex flex-col gap-2 text-base inline-flex">

                <div className="inline-flex gap-3 justify-center">
                    <IoLocationSharp />
                    <p> long island, NY </p>
                </div>
                

                <p className="mt-8">
                    recent cs grad from the university of rochester with a fintech and AI/ML background.
                </p>

                <p className="mt-4">
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