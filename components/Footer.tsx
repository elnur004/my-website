import { Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="max-w-screen mx-auto bg-gradient-to-r from-stone-600 via-stone-800 to-stone-950">
            <div className="container mx-auto text-center w-full py-7 sm:py-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-slate-200">Let&apos;s Connect</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
                    <a href="https://www.linkedin.com/in/elnur-mammadov-94530579/" className="flex items-center justify-center gap-2 text-slate-200 hover:text-blue-600">
                        <SiLinkedin size={20} /> www.linkedin.com
                    </a>
                    <a href="mailto:lnur004@gmail.com" className="flex items-center justify-center gap-2 text-slate-200 hover:text-blue-600">
                        <Mail size={20} /> lnur004@gmail.com
                    </a>
                    <a href="https://github.com/elnur004" className="flex items-center justify-center gap-2 text-slate-200 hover:text-blue-600">
                        <SiGithub size={20} /> github.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;