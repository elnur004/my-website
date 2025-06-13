const CV = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-2 sm:p-4">
      <div className="w-full max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl relative">
        {/* Download button and message for mobile */}
        <div className="block md:hidden w-full text-center mb-6">
          <a
            href="/cv/ELNUR_MAMMADOV_CV.pdf"
            download
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-2"
          >
            Download PDF
          </a>
          <div className="text-gray-600 text-sm mt-2">
            For best viewing experience, please download and open the CV on your device.
          </div>
        </div>
        {/* Embedded PDF for desktop/tablet only */}
        <div className="hidden md:block bg-white rounded shadow overflow-hidden w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
          <iframe
            src="/cv/ELNUR_MAMMADOV_CV.pdf"
            title="Elnur Mammadov CV"
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: '400px', minWidth: '100%', display: 'block' }}
            className="w-full h-[70vh] md:h-[80vh] lg:h-[90vh]"
          />
        </div>
      </div>
    </main>
  );
};

export default CV;