const BannerVideoSection = () => {
  return (
    <section className="px-10 tablet:px-5 sm:px-0">
      <video className="w-full rounded" autoPlay muted playsInline loop>
        <source
          src={"/banner-video-webm-1440.webm"}
          type="video/webm"
        />
        <source
          src="/banner-video-compressed.mp4"
          type="video/mp4"
        />
        Sorry, your browser doesn't support videos.
      </video>
    </section>
  );
};

export default BannerVideoSection;
