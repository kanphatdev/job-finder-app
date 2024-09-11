import Simplicity from "../../assets/images/simplicity.jpg";

const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem]">
      <h1 className="capitalize text-lg py-[2rem] font-bold block text-energy">
        the value that holds us true and to account
      </h1>

      <div className="grid grid-cols-3 gap-[10rem] items-center">
        <div className="card bg-calm w-96 shadow-xl transform transition-transform hover:scale-105">
          <div className="card-body flex flex-row items-center gap-4">
            <img src={Simplicity} alt="Simplicity" className="w-16 h-16 object-contain" />
            <p className="font-semibold capitalize text-growth card-title">simplicity</p>
          </div>
        </div>
        <div className="card bg-calm w-96 shadow-xl transform transition-transform hover:scale-105">
          <div className="card-body flex flex-row items-center gap-4">
            <img src={Simplicity} alt="Simplicity" className="w-16 h-16 object-contain" />
            <p className="font-semibold capitalize text-growth card-title">simplicity</p>
          </div>
        </div>
        <div className="card bg-calm w-96 shadow-xl transform transition-transform hover:scale-105">
          <div className="card-body flex flex-row items-center gap-4">
            <img src={Simplicity} alt="Simplicity" className="w-16 h-16 object-contain" />
            <p className="font-semibold capitalize text-growth card-title">simplicity</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
