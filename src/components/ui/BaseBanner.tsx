const BaseBanner = () => {
  return (
    <div className="overflow-hidden">
      <picture>
        <source
          srcSet="/images/heapix-with-gen-3x.webp"
          media="(min-width: 1201px)"
          type="image/webp"
        />
        <source
          srcSet="/images/heapix-with-gen-2x.webp"
          media="(min-width: 601px)"
          type="image/webp"
        />
        <img
          src="/images/heapix-with-gen-1x.webp"
          alt="heapix-banner"
          className="w-full rounded hover:scale-[1.1] transition duration-700"
          loading="lazy"
          height={100}
          width={100}
        />
      </picture>
    </div>
  );
};

export default BaseBanner;
