import React, { forwardRef } from 'react';
import styles from './VideoSection.module.css';
// IMPORTANT: Ensure your video is at 'src/assets/videos/parallax_servicio.mp4'
import videoBgPath from '../../assets/videos/parallax_servicio.mp4'; 

// Modified to accept an overlayRef prop
const VideoSection = forwardRef(({ overlayRef }, sectionRef) => {
  return (
    <section ref={sectionRef} className={styles.videoSectionContainer} id="video-section">
      <video
        className={styles.videoBackground}
        autoPlay
        loop
        muted
        playsInline
        src={videoBgPath}
        type="video/mp4"
      />
      {/* Attach the passed overlayRef here */}
      <div
        ref={overlayRef}
        className={styles.videoOverlay}
        style={{ willChange: 'transform, opacity' }}
      >
        {/* This overlay will be the target for the mask animation */}
      </div>
    </section>
  );
});

VideoSection.displayName = 'VideoSection';
export default VideoSection;