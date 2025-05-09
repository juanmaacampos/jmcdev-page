import React, { useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoSection from "../../websections/VideoSection/VideoSection";
import JmcDevLogoMaskPath from '../../assets/images/logoeffect.svg'; // Path to your DESKTOP MASK image
import JmcDevMobileLogoMaskPath from '../../assets/images/mobilelogoeffect.svg'; // Path to your MOBILE MASK image

// gsap.registerPlugin(ScrollTrigger); // Already registered in App.jsx

const VideoMaskEffect = ({ videoSectionRef, videoOverlayRef, contentVisible }) => {
  useEffect(() => {
    let videoTl;
    const actualVideoOverlayElement = videoOverlayRef.current;

    // Determine if mobile for selecting the correct mask
    const isMobile = window.innerWidth <= 768;
    const maskPath = isMobile ? JmcDevMobileLogoMaskPath : JmcDevLogoMaskPath;
    // Set initialMaskSize for mobile to be very large for a more pronounced "zoom-out" effect initially
    // Increased further to ensure opaque parts of the SVG are initially tiny
    const initialMaskSize = isMobile ? '40000vw 40000vh' : '6300vw 6300vh'; 

    // The main animation logic will now run if conditions are met, regardless of device type.
    if (
      contentVisible &&
      videoSectionRef.current &&
      actualVideoOverlayElement &&
      videoSectionRef.current.offsetHeight > 0
    ) {
      const videoSectionElement = videoSectionRef.current;
      // actualVideoOverlayElement is already defined

      gsap.set(actualVideoOverlayElement, {
        opacity: 1,
        backgroundColor: '#000000',
        webkitMaskImage: `url(${maskPath})`, // Use conditional maskPath
        webkitMaskRepeat: 'no-repeat',
        webkitMaskPosition: 'center center',
        webkitMaskSize: initialMaskSize, // Use conditional initial mask size
        maskImage: `url(${maskPath})`, // Use conditional maskPath
        maskRepeat: 'no-repeat',
        maskPosition: 'center center',
        maskSize: initialMaskSize, // Use conditional initial mask size
      });

      const animationScrollDuration = window.innerHeight * 0.75;
      const holdScrollDuration = window.innerHeight * 0.5;

      // Define conditional target mask size for the animation
      const targetWebkitMaskSize = isMobile ? '300% 300%' : '120% 120%';
      const targetMaskSize = isMobile ? '330% 330%' : '120% 120%';


      videoTl = gsap.timeline({
        scrollTrigger: {
          trigger: videoSectionElement,
          start: "top top",
          end: `+=${animationScrollDuration + holdScrollDuration}`,
          scrub: 1.2,
          pin: true,
          pinSpacing: true,
        }
      });

      videoTl.to(actualVideoOverlayElement, {
        webkitMaskSize: targetWebkitMaskSize, // Use conditional target size
        maskSize: targetMaskSize,            // Use conditional target size
        ease: "power1.inOut"
      }, 0); // Start at the beginning of the timeline

      return () => {
        if (videoTl) videoTl.kill();
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === videoSectionElement) {
            st.kill();
          }
        });
        if (actualVideoOverlayElement) {
          gsap.set(actualVideoOverlayElement, { clearProps: "all" });
        }
      };
    } else if (contentVisible && videoSectionRef.current && videoSectionRef.current.offsetHeight === 0) {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    } else if (!actualVideoOverlayElement && contentVisible) {
    }
    // Removed mobile-specific static mask or hiding logic.
  }, [contentVisible, videoSectionRef, videoOverlayRef]);

  return (
    <VideoSection ref={videoSectionRef} overlayRef={videoOverlayRef} />
  );
};

export default VideoMaskEffect;