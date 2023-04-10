export const IconButton = ({ href, h, w, alt, src, target = "" }) => {
  return (
    <a className="hover:scale-125" href={href} target={target}>
      <img src={src} alt={alt} height={h} width={w} />
    </a>
  );
};
