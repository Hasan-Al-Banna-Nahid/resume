import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      {/* Contact Info */}
      <div className="px-[200px]">
        <div className="bg-base-200 text-center">
          <h2 className=" font-bold text-[36px] ">Hasan Al Banna</h2>
          <p className="font-medium">Full Stack Web Developer(MERN Stack)</p>
          <div className="grid grid-cols-2 gap-2 font-semibold">
            <div>
              <h2>Address : Feni,Bangladesh</h2>
            </div>
            <div>
              <a
                className=" font-semibold"
                href="mailto:iamnahid591998@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email : IamNahid591998@gmail.com
              </a>
            </div>
            <div>
              <h2>Phone : +8801330423673</h2>
            </div>
            <div>
              <a
                className="mr-4  font-semibold"
                href="https://www.linkedin.com/in/hasan-al-banna-84390b276/"
                target="_blank"
                rel="noreferrer"
              >
                1. LinkedIn
              </a>
              <a
                className=" font-semibold"
                href="https://github.com/Hasan-Al-Banna-Nahid"
                target="_blank"
                rel="noreferrer"
              >
                2.GitHub
              </a>
              <a
                className=" font-semibold ms-4"
                href="https://portfolio-afe54.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                3.Portfolio
              </a>
            </div>
          </div>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl text-center font-bold my-4">
            Career Objectives
          </h2>
          <div className="font-semibold text-[20px]">
            <li>
              To continuously expand my skill set and stay up-to-date with the
              latest trends and technologies in the MERN stack, including new
              frameworks, libraries, and tools, to enhance my ability to deliver
              cutting-edge solutions and ensure high-quality code.
            </li>
            <br />
          </div>
        </div>
        {/* Skills And Projects */}
        <div>
          <div className="p-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold   my-4">Skills </h2>
            </div>
            <div className="grid grid-cols-3 gap-4 font-medium text-[18px]">
              <div>
                <li>HTML</li>
              </div>
              <div>
                <li>CSS</li>
              </div>
              <div>
                <li>Bootstrap</li>
              </div>
              <div>
                <li>Tailwind</li>
              </div>
              <div>
                <li>React</li>
              </div>
              <div>
                <li>Javascript</li>
              </div>
              {/* <div>
                <li>Typescript(Basic)</li>
              </div> */}
              <div>
                <li>Firebase</li>
              </div>
              <div>
                <li>ExpressJs(Beginner)</li>
              </div>
              <div>
                <li>MongoDb(Beginner)</li>
              </div>
              <div>
                <li>NextJs</li>
              </div>
              {/* <div>
                <li>Object Oriented Programming(OOP)(Beginner)</li>
              </div> */}
              {/* <div>
                <li>PostgreSQL(Beginner)</li>
              </div>
              <div>
                <li>Prisma(Beginner)</li>
              </div>
              <div>
                <li>AWS(Beginner)</li>
              </div> */}
            </div>
          </div>
        </div>
        <hr className="border-4" />
        <div>
          <h2 className="text-2xl font-bold text-center my-4">Experience</h2>
          <div className="text-center text-3xl font-bold ">
            <h4>
              Company : <a>Red Rose Corporation(Recent Startup)</a>
            </h4>
            <h4>Location : Sonir Akhra,Jatrabadi,Dhaka</h4>
            <h4>Project : Red Rose Academy</h4>
            <h4>Description : EdTech Learning Site</h4>
            <a
              href="https://github.com/Red-Rose-Corporation-EdTech/Red-Rose-EdTech-Next"
              target="_blank"
            >
              Source Code
            </a>
            {/* <a href="https://academy.redrosebd.com" target="_blank">
              Site Link
            </a> */}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold  text-center my-4">Projects </h2>
          <div className="flex flex-col">
            <div>
              {" "}
              <h2 className="text-[24px] font-bold mt-6">
                Doc House(This is Hospital Management System)
              </h2>
              <div className="font-medium text-[20px] p-2 border-r-4">
                <li className="text-[20px]  font-medium">
                  Hospital Landing Page Available
                </li>
                <li className="text-[20px]  font-medium">
                  Authentication System Included
                </li>
                <li className="text-[20px]  font-medium">
                  User Can Book A Service For Doctor Appointment
                </li>
                <li className="text-[20px]  font-medium">
                  User Can Book A Service For One To One Zoom Session With
                  Doctor
                </li>
                <li className="text-[20px]  font-medium">
                  Admin & User Dashboard Available
                </li>
                <li className="text-[20px]  font-medium">
                  Admin can Accept booking And Send Confirmation Email
                </li>
                <li className="text-[20px]  font-medium">
                  Admin Credential : IamNahid591998@outlook.com/123456Hasan$$
                </li>
                <li className="text-[20px]  font-medium">
                  Technology Used : NextJS,ExpressJs,MongoDB,Tailwind,Firebase
                </li>
                <li>
                  Live Site :{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://doc-house.vercel.app/"
                  >
                    Doc House
                  </a>
                </li>{" "}
                <li>
                  Source Code :{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Hasan-Al-Banna-Nahid/Doc-House"
                  >
                    Source Code
                  </a>
                </li>{" "}
              </div>
            </div>
            <div>
              {" "}
              <h2 className="text-[24px] font-bold mt-6">
                Belletrist(This is Script Writing Site)
              </h2>
              <div className="font-medium text-[20px] p-2 border-r-4">
                <li className="text-[20px]  font-medium">
                  Used ChatGPT In This Site
                </li>
                <li className="text-[20px]  font-medium">
                  Authentication System Included
                </li>
                <li className="text-[20px]  font-medium">
                  User Can Write Script Here And Update Previous Script
                </li>
                <li className="text-[20px]  font-medium">
                  Technology Used : React,React Router
                  Dom,Tailwind,ExpressJS,MongoDB,Firebase
                </li>
                <li>
                  Live Site :{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://belletrist-8e1fe.firebaseapp.com"
                  >
                    Belletrist
                  </a>
                </li>{" "}
                <li>
                  Source Code :{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Hasan-Al-Banna-Nahid/Belletrist"
                  >
                    Source Code
                  </a>
                </li>{" "}
              </div>
            </div>

            <div>
              {" "}
              <h4 className="text-slate-700 text-[24px] font-bold mt-6">
                Vedhak(This is Summer camp activities Site)
              </h4>
              <div className="font-medium p-2 border-r-4 text-[20px]">
                {" "}
                <li>
                  In student dashboard student choose a class from classes tab
                  and show the classes in myclass tab where student can pay for
                  the class and paid class is show in my enrolled class
                </li>{" "}
                <li>
                  In Instructor dashboard Instructor can add a class and update
                  the class and show relavent information
                </li>{" "}
                <li>
                  In Admin Dashboard Admin dashboard admin can make instructor
                  and update the classes ststus and delete them
                </li>
                <li>
                  {" "}
                  Technology Used : React,React Router Dom,Firebase,Express
                  Js,MongoDb,Tanstack Query,Axios Interceptor,JWT,And Some React
                  Npm Package In This Project
                </li>{" "}
                <li>
                  Live Site :{" "}
                  <a
                    href="https://summer-camp-f4fcb.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SummerCamp
                  </a>
                </li>{" "}
                <li>
                  Source Code Client Side :{" "}
                  <a
                    href="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp
                  </a>
                </li>{" "}
                <li>
                  Source Code Server Side :{" "}
                  <a
                    href="https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp-Server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/Hasan-Al-Banna-Nahid/Summer-Camp-Server
                  </a>
                </li>
              </div>
            </div>
            <div>
              {" "}
              <h2 className="text-[24px] font-bold">
                Toy Man(This is Job Portal Site)
              </h2>
              <div className="font-medium text-[20px] p-2">
                <li>User Can Add Toy,Update Toy,Delete Toy</li>
                <li>Authentication System Included</li>
                <li>Toy Search Option Available</li>
                <li>
                  Live Site :{" "}
                  <a
                    href="https://toy-man.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Toy Man
                  </a>
                </li>{" "}
                <li className="text-[20px]  font-medium">
                  Technology Used : React,React Router
                  Dom,Tailwind,ExpressJS,MongoDB,Firebase
                </li>
                <li>
                  Source Code Client Side :{" "}
                  <a
                    href="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-React-Firebase-Express-Mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </li>{" "}
                <li>
                  Source Code Server Side :{" "}
                  <a
                    href="https://github.com/Hasan-Al-Banna-Nahid/Toy-Man-ServerSide"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code
                  </a>
                </li>{" "}
              </div>
            </div>
          </div>
          <hr className="border-4" />
          {/* Education */}

          <div>
            <div className="text-left">
              <h2 className="text-3xl font-bold  my-4">Education</h2>
              <div className="text-[20px]">
                <h2 className=" text-[17px] font-medium">
                  Degree : Diploma-in-Engineering
                </h2>{" "}
                <br />
                <h2 className=" text-[17px] font-medium">
                  College : National Institute Of Technology Chittagong
                </h2>{" "}
                <br />
                <h2 className="mb-6 text-[17px] font-medium">
                  Passing Year : 2024(approx)
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold  my-4">Language</h2>
              <div className="">
                <h2 className="mb-6 text-[17px] font-medium">
                  Native : Bengali
                </h2>
                <h2 className="mb-6 text-[17px] font-medium">
                  Conversational : English
                </h2>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold  my-4">Professional Course</h2>
              <div className="">
                <h2 className="mb-6 text-[17px] font-medium">
                  Complete Web Development With Jhankar mahbub(Programming Hero
                  Community)
                </h2>
                <a
                  href={
                    "https://drive.google.com/file/d/1EtnRdnnUsetHg6a0V74dMems6E0Hek20/view?usp=sharing"
                  }
                  target="_blank"
                >
                  Certificate Link
                </a>
              </div>
            </div>
            {/* <div>
              <h2 className="text-3xl font-bold text-slate-700  my-4">
                Interpersonal Experience
              </h2>
              <div className="font-semibold text-[20px]">
                <li>
                  Collaboration with Back-End Developers: As a front-end
                  developer, you will often collaborate with back-end developers
                  who work with technologies such as Node.js and Express.js. You
                  will need to effectively communicate with them to understand
                  the API endpoints and data structures they provide, as well as
                  any requirements or constraints they have. Regular meetings or
                  discussions can help ensure smooth coordination between
                  front-end and back-end teams.
                </li>{" "}
                <br />
                <li>
                  Communication with Designers: Front-end developers often work
                  closely with UX/UI designers to implement the visual and
                  interactive aspects of a web application. Effective
                  communication is crucial in understanding the design
                  requirements and translating them into functional and
                  aesthetically pleasing front-end code. Collaborate with
                  designers to clarify design elements, provide feedback, and
                  ensure the design is implemented accurately.
                </li>{" "}
                <br />
                <li>
                  Teamwork and Project Management: Working as part of a
                  development team requires effective teamwork and project
                  management skills. You will collaborate with other developers,
                  QA engineers, project managers, and potentially other
                  stakeholders. Clear communication, regular status updates, and
                  the ability to work collaboratively are crucial to ensuring
                  project success.
                </li>{" "}
                <br />
              </div>
            </div> */}
            {/* Career Objective */}
          </div>
          <hr className="border-4" />
        </div>
      </div>
      {/* Skills And Projects */}
    </>
  );
}

export default App;
