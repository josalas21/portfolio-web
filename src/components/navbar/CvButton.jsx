import cv from "../../assets/josue_salas.pdf";

export const CvButton = () => {
  return (
    <a
      type="button"
      href={cv}
      target="_blank"
      className="text-[#A9D6E5] border-[#A9D6E5] hover:text-[#00FFBF] hover:border-[#00FFBF] border p-2 w-12 text-center"
    >
      <span> CV </span>
    </a>
  );
};
