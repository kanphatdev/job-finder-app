import { Clock5 } from "lucide-react";
import Logo1 from "../../assets/images/line.png";
import Logo2 from "../../assets/images/figma.png";
import Logo3 from "../../assets/images/huawei.png";

// Define the interface for the job data
interface JobData {
  id: number;
  image: string;
  title: string;
  time: string;
  desc: string;
  location: string;
  company: string;
}

// Sample job data
const Data: JobData[] = [
  {
    id: 1,
    image: Logo1,
    title: "web developer",
    time: "now",
    desc: "We are looking for a passionate and experienced Web Developer to join our dynamic team at Novac Linus Co. As a Web Developer, you will be responsible for designing, coding, and modifying websites, from layout to function, according to client specifications. You will work closely with our design team and backend developers to create visually appealing, user-friendly websites with optimal functionality and performance.",
    location: "thailand",
    company: "novac linus .co",
  },
  {
    id: 2,
    image: Logo2,
    title: "UI DESIGNER",
    time: "14Hrs",
    desc: "Liquid Accessment is seeking a talented and creative UI Designer to join our growing team. As a UI Designer, you will be responsible for crafting visually stunning, user-centric interfaces that enhance the overall user experience. You will collaborate closely with our UX designers, developers, and stakeholders to ensure the designs are not only aesthetically pleasing but also intuitive and functional.",
    location: "manchester",
    company: "liquid accessment",
  },

  {
    id: 3,
    image: Logo3,
    title: "Frontend Developer",
    time: "2 Days Ago",
    desc: "Join our innovative team at PixelSoft as a Frontend Developer. You'll be responsible for creating interactive user interfaces using modern technologies such as React and Tailwind CSS. Collaborate with backend developers and designers to deliver optimal web experiences",
    location: "New York, USA",
    company: "PixelSoft Solutions",
  },
];

const Job = () => {
  return (
    <div>
      <div className="container flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map((job) => (
          <div key={job.id} className="card bg-calm w-96 shadow-xl transform transition-transform hover:scale-105">
            <div className="card-body">
              <div className="flex gap-3 justify-between items-center">
                <h1 className="card-title capitalize text-energy">{job.title}</h1>
                <span className="flex items-center text-clarity gap-1">
                  {job.time} <Clock5 className="text-clarity" />
                </span>
              </div>
              <h6 className="capitalize text-growth">{job.location}</h6>
              <div className="divider"></div>
              <p className="text-gray-700 text-sm">{job.desc}</p>
              <div className="flex items-center gap-2">
                <img src={job.image} alt="Company logo" className="w-[10%]" />
                <span className="text-sm py-[1rem] capitalize">{job.company}</span>
              </div>
              <div className="card-actions justify-start">
                <button className="btn btn-wide capitalize bg-energy text-white hover:bg-attention transition-all">
                  apply now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Job;
