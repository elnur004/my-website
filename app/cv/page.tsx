const CV = () => {
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl relative">

        <div className="bg-white rounded shadow overflow-hidden" style={{ minHeight: '80vh' }}>
            <iframe
              src="/cv/ELNUR_MAMMADOV_CV.pdf"
              title="Elnur Mammadov CV"
              width="100%"
              height="900px"
              style={{ border: 'none' }}
            />
        </div>
      </div>
    </main>
  );
};

export default CV;