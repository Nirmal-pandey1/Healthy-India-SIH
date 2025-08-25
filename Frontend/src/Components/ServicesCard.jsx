const ServiceCard = ({ icon: Icon, title }) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <div className="bg-sky-200 p-5 rounded-full">
        <Icon size={50} />
      </div>
      <h3 className="text-[1.2rem] font-[500]">{title}</h3>
    </div>
  );
};

export default ServiceCard;