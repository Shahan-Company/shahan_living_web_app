import React, { useState, useEffect } from 'react';

const ShahanLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const features = [
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/shahan-life.appspot.com/o/app%20screen%20shoot%2FFINGERTIPS.png?alt=media&token=d37baf99-2dec-434a-9512-a11af8b6ef2d',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/shahan-life.appspot.com/o/app%20screen%20shoot%2Fexplore.png?alt=media&token=116c5492-3038-428a-aea8-fa27132a15b5',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/shahan-life.appspot.com/o/app%20screen%20shoot%2FBOOKv.png?alt=media&token=75152d9e-f34d-4046-80df-0ec9e037baaf',
    },
    {
      image: 'https://firebasestorage.googleapis.com/v0/b/shahan-life.appspot.com/o/app%20screen%20shoot%2FEXPLORE%20SHARE%20copy.png?alt=media&token=9b0fb0d8-75f2-4a53-b787-341948597df7',
    }
  ];

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        setLoading(true);
             const proxyUrl = import.meta.env.VITE_PROXY_URL;
      const targetUrl = import.meta.env.VITE_TARGET_URL;
        const response = await fetch(proxyUrl + targetUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
              const xhr = new XMLHttpRequest();
      const targetUrl = import.meta.env.VITE_TARGET_URL;
        xhr.open('GET', targetUrl);
        xhr.onload = function () {
          if (xhr.status === 200) {
            try {
              const result = JSON.parse(xhr.responseText);
              setData(result);
            } catch (parseError) {
              console.error('JSON parse error:', parseError);
            }
          } else {
            console.error('XHR failed with status:', xhr.status);
          }
          setLoading(false);
        };
        xhr.onerror = function () {
          console.error('XHR network error');
          setLoading(false);
        };
        xhr.send();
        return; 
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, []);

  const handleDownload = (platform) => {
    if (platform === 'iOS') {
      window.open('https://apps.apple.com/app/shahan', '_blank');
    } else if (platform === 'Android') {
      if (data?.downloadUrl) {
        window.open(data.downloadUrl, '_blank');
      } else {
        alert('Android download link not available yet. Please try again in a moment.');
      }
    }
  };
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Grid Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Additional fine grid overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      />

      {/* Subtle radial gradients for depth */}
      <div
        className="absolute -left-[20%] top-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.000000) 70%)'
        }}
      />
      <div
        className="absolute right-0 top-[25%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.000000) 70%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-20">
        {/* Hero Section */}
        <div className="flex items-center min-h-screen gap-16 flex-col lg:flex-row py-12 lg:py-0 text-center lg:text-left">

          {/* Content Section */}
          <div className="flex-1 space-y-10">

            {/* Logo Section */}
            <div>
              <div className="w-80 sm:w-96 lg:w-[450px] h-auto mx-auto lg:mx-0">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-[6px] text-white mb-3">
                  SHAHAN
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl font-light tracking-wider text-gray-300">
                  The Art of Construction
                </p>
              </div>
            </div>

            {/* Company Info */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Luxury Living
                <span className="block text-gray-400">Redefined</span>
              </h2>
              <p className="text-lg lg:text-xl font-light leading-relaxed text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Experience unparalleled residential excellence with our comprehensive digital platform.
                From premium amenities to personalized concierge services, every aspect of luxury living
                is thoughtfully designed and seamlessly integrated.
              </p>
            </div>

            {/* Download Section */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Download Our App
              </h3>
              <div className="flex gap-5 flex-wrap justify-center lg:justify-start">
                <button
                  onClick={() => handleDownload('iOS')}
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex-1 sm:flex-none min-w-[160px] justify-center"
                >
                  <span className="text-xl font-bold">iOS</span>
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDownload('Android')}
                  disabled={loading}
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex-1 sm:flex-none min-w-[160px] justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-xl font-bold">
                    {loading ? 'Loading...' : 'Android'}
                  </span>
                  {!loading && (
                    <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5889 8.6039 13.8684 8.1921 12.0003 8.1921c-1.8681 0-3.5886.4118-5.2893.8069L4.6887 5.4944a.416.416 0 00-.5972-.1518.416.416 0 00-.1518.5972L5.9370 9.3214C2.6331 10.6825.8514 13.2088.8514 16.0581h22.2972c0-2.8493-1.7817-5.3756-5.0856-6.7367" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wide">Connect With Us</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://shahancompany.com/"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.51211712,15 L8.17190229,15 C8.05949197,14.0523506 8,13.0444554 8,12 C8,10.9555446 8.05949197,9.94764942 8.17190229,9 L3.51211712,9 C3.18046266,9.93833678 3,10.9480937 3,12 C3,13.0519063 3.18046266,14.0616632 3.51211712,15 L3.51211712,15 Z M3.93551965,16 C5.12590433,18.3953444 7.35207678,20.1851177 10.0280093,20.783292 C9.24889451,19.7227751 8.65216136,18.0371362 8.31375067,16 L3.93551965,16 L3.93551965,16 Z M20.4878829,15 C20.8195373,14.0616632 21,13.0519063 21,12 C21,10.9480937 20.8195373,9.93833678 20.4878829,9 L15.8280977,9 C15.940508,9.94764942 16,10.9555446 16,12 C16,13.0444554 15.940508,14.0523506 15.8280977,15 L20.4878829,15 L20.4878829,15 Z M20.0644804,16 L15.6862493,16 C15.3478386,18.0371362 14.7511055,19.7227751 13.9719907,20.783292 C16.6479232,20.1851177 18.8740957,18.3953444 20.0644804,16 L20.0644804,16 Z M9.18440269,15 L14.8155973,15 C14.9340177,14.0623882 15,13.0528256 15,12 C15,10.9471744 14.9340177,9.93761183 14.8155973,9 L9.18440269,9 C9.06598229,9.93761183 9,10.9471744 9,12 C9,13.0528256 9.06598229,14.0623882 9.18440269,15 L9.18440269,15 Z M9.3349823,16 C9.85717082,18.9678295 10.9180729,21 12,21 C13.0819271,21 14.1428292,18.9678295 14.6650177,16 L9.3349823,16 L9.3349823,16 Z M3.93551965,8 L8.31375067,8 C8.65216136,5.96286383 9.24889451,4.27722486 10.0280093,3.21670804 C7.35207678,3.81488234 5.12590433,5.60465556 3.93551965,8 L3.93551965,8 Z M20.0644804,8 C18.8740957,5.60465556 16.6479232,3.81488234 13.9719907,3.21670804 C14.7511055,4.27722486 15.3478386,5.96286383 15.6862493,8 L20.0644804,8 L20.0644804,8 Z M9.3349823,8 L14.6650177,8 C14.1428292,5.03217048 13.0819271,3 12,3 C10.9180729,3 9.85717082,5.03217048 9.3349823,8 L9.3349823,8 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/shahan_company/?hl=en"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/shahan-company/"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg> 
                </a>
              </div>
            </div>
          </div>

          {/* Mobile App Preview */}
          <div className="flex justify-center lg:flex-shrink-0">
            <div className="relative">
              <img
                className="w-80 sm:w-96 lg:w-[420px] rounded-[45px] lg:rounded-[60px] transition-all duration-500"
                src={features[activeFeature].image}
                alt="Shahan App Features"
                style={{
                  boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 100px 0px'
                }}
              />

              {/* Feature Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeFeature === index
                        ? 'bg-white scale-125'
                        : 'bg-white/30 hover:bg-white/50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        
      </div>
    </div>
  );
};

export default ShahanLanding;