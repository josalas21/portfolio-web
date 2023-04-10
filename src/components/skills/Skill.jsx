export const Skill = ({ tech }) => {
  return (
    <div className="flex gap-4 font-light">
      <img className="w-10 h-10" src={tech.img} alt={tech.img} />
      <p> {tech.tech}</p>
    </div>
  );
};
