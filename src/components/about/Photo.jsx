import photo from "../../assets/imgs/foto-perfil.webp";
export const Photo = () => {
  return (
    <div className="avatar w-full lg:w-1/2 p-8 justify-center align-items-center">
      <div className="rounded-xl flex w-[20rem] justify-center">
        <img src={photo} />
      </div>
    </div>
  );
};
