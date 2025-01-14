'use client'

import { useReactToPrint } from 'react-to-print';
import { RefObject, useEffect, useState } from 'react';

interface DownloadButtonProps {
    contentRef: RefObject<HTMLDivElement | null>;
}

const DownloadButton = ({ contentRef }: DownloadButtonProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent || navigator.vendor;
            return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
        };
        setIsMobile(checkMobile());
    }, []);

    const handlePrint = useReactToPrint({
        documentTitle: 'CV - Elnur',
        contentRef: contentRef,
        onAfterPrint: () => console.log('Printed successfully'),
    });

    const handleMobileDownload = async () => {
        if (contentRef.current) {
            try {
                const html2pdf = (await import('html2pdf.js')).default;
                const element = contentRef.current;
                const opt = {
                    margin: 10,
                    filename: 'CV-Elnur.pdf',
                    image: { type: 'jpeg', quality: 0.98 },
                    html2canvas: {
                        scale: 2,
                        useCORS: true,
                        logging: true,
                        scrollY: -window.scrollY,
                        windowHeight: document.documentElement.scrollHeight
                    },
                    jsPDF: {
                        unit: 'mm',
                        format: 'a4',
                        orientation: 'portrait',
                        compress: true,
                        enableLinks: true,
                        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
                    }
                };

                // Create a promise to handle the PDF generation
                await new Promise((resolve, reject) => {
                    html2pdf()
                        .set(opt)
                        .from(element)
                        .save()
                        .then(() => resolve(true))
                        .catch((error) => reject(error));
                });

            } catch (error) {
                console.error('Error generating PDF:', error);
                alert('Failed to generate PDF. Please try again.');
            }
        }
    };

    return (
        <button
            onClick={isMobile ? handleMobileDownload : () => handlePrint()}
            className="fixed sm:top-4  bottom-4 right-4 sm:bottom-auto 
                     bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     py-2 px-4 rounded shadow transition-colors
                     sm:py-2 sm:px-4 text-sm sm:text-base
                     w-[calc(100%-2rem)] sm:w-auto sm:mx-0 z-10"
        >
            {isMobile ? 'Download PDF' : 'Download CV'}
        </button>
    );
};

export default DownloadButton; 