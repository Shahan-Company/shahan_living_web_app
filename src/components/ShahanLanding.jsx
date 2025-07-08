import React, { useState } from 'react';

const ShahanLanding = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "Book Anytime, Anywhere",
      subtitle: "Seamless Booking Experience",
      description: "Access premium facilities like DDK Sport Club with our intuitive booking system. Reserve gym equipment, spa services, and recreational facilities 24/7 from the comfort of your home.",
      image: "/screen_1.png", // Book Anytime image
      highlights: ["24/7 Booking Access", "Premium Facilities", "Real-time Availability", "Instant Confirmation"]
    },
    {
      title: "All Services, One Tap Away",
      subtitle: "Comprehensive Concierge Services",
      description: "From rubbish collection to valet parking, manage all your residential needs through our comprehensive service platform. Submit requests, track progress, and communicate with our team effortlessly.",
      image: "/app-screen-1.png", // All Services image
      highlights: ["Concierge Services", "Maintenance Requests", "Valet Parking", "Emergency Support"]
    },
    {
      title: "Everything You Need At Your Fingertips",
      subtitle: "Centralized Living Management",
      description: "Your personal dashboard provides instant access to bookings, home management, enquiries, and community announcements. Stay connected with your living environment like never before.",
      image: "/screen_3.png", // Dashboard image
      highlights: ["Personal Dashboard", "Community Updates", "Home Management", "Quick Access Menu"]
    },
    {
      title: "Explore, Share",
      subtitle: "Community Social Platform",
      description: "Connect with your neighbors, share experiences, and discover community events. Our social platform fosters a vibrant residential community where residents can interact and engage.",
      image: "/screen_2.png", // Social feed image
      highlights: ["Resident Network", "Community Posts", "Event Discovery", "Social Interaction"]
    }
  ];

  const detectOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return 'iOS';
    }
    if (/android/i.test(userAgent)) {
      return 'Android';
    }
    return 'Unknown';
  };

  const handleDownload = () => {
    const os = detectOS();
    if (os === 'iOS') {
      window.open('https://apps.apple.com/app/shahan', '_blank');
    } else if (os === 'Android') {
      window.open('https://play.google.com/store/apps/details?id=com.shahan', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Dotted texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Radial gradient backgrounds */}
      <div 
        className="absolute -left-[20%] top-0 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.000000) 60%)'
        }}
      />
      <div 
        className="absolute right-0 top-[25%] w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.000000) 60%)'
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
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex-1 sm:flex-none min-w-[160px] justify-center"
                >
                  <span className="text-xl font-bold">iOS</span>
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 flex-1 sm:flex-none min-w-[160px] justify-center"
                >
                  <span className="text-xl font-bold">Android</span>
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5972.416.416 0 00-.5972.1518l-2.0223 3.5046C15.5889 8.6039 13.8684 8.1921 12.0003 8.1921c-1.8681 0-3.5886.4118-5.2893.8069L4.6887 5.4944a.416.416 0 00-.5972-.1518.416.416 0 00-.1518.5972L5.9370 9.3214C2.6331 10.6825.8514 13.2088.8514 16.0581h22.2972c0-2.8493-1.7817-5.3756-5.0856-6.7367"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-sm font-semibold mb-4 text-gray-300 uppercase tracking-wide">Connect With Us</p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-black hover:transform hover:-translate-y-1 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeFeature === index 
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
        <div className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              App Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how our comprehensive platform transforms residential living through innovative technology and seamless user experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`space-y-8 transition-all duration-700 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-60'
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="space-y-4">
                  <h3 className="text-3xl sm:text-4xl font-bold">
                    {feature.title}
                  </h3>
                  <h4 className="text-xl text-gray-400 font-medium">
                    {feature.subtitle}
                  </h4>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {feature.highlights.map((highlight, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span className="text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShahanLanding;