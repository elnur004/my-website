'use client'

import { useReactToPrint } from 'react-to-print';
import { RefObject, useEffect, useState } from 'react';
import html2pdf from 'html2pdf.js';

interface DownloadButtonProps {
    contentRef: RefObject<HTMLDivElement | null>;
}

const DownloadButton = ({ contentRef }: DownloadButtonProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    }, []);

    const handlePrint = useReactToPrint({
        documentTitle: 'CV - Elnur',
        contentRef: contentRef,
        onAfterPrint: () => console.log('Printed successfully'),
    });

    const handleMobileDownload = async () => {
        if (contentRef.current) {
            const element = contentRef.current;
            const opt = {
                margin: 10,
                filename: 'CV-Elnur.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            try {
                await html2pdf().set(opt).from(element).save();
            } catch (error) {
                console.error('Error generating PDF:', error);
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