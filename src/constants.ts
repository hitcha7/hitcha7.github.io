
export interface Experience {
  title: string;
  company: string;
  period: string;
  summary: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

export interface Award {
  title: string;
  date: string;
  description?: string;
}

export interface Qualification {
  title: string;
  date: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  videoUrl?: string;
  shortsUrls?: string[];
  status: 'WIP' | 'Completed';
}

export const PROFILE_DATA = {
  name: "Amelia Hitchcock",
  title: "Robotics and Mechatronics Engineer",
  location: "Australia",
  resumeUrl: "https://drive.google.com/file/d/1LW_Kkl89A1aUhjrxXM2OXqlrk9w_mH7L/view?usp=drive_link",
  certificatesUrl: "https://drive.google.com/drive/folders/1HD_dNPjUgpoGwxo00WTe0J_h6rW0wQwK?usp=drive_link",
  bio: "I am a graduate Robotics and Mechatronics Engineer with a Bachelor of Engineering (Honours) from Swinburne University of Technology. I have strong stakeholder communication and technical skills, with experience in project leadership, engineering consulting and conducting Technical Certification activities. I find innovative ways to approach and execute problems, have the dedication to learn and will bring valuable enthusiasm and energy to any team.",
  education: [
    {
      degree: "Bachelor of Engineering (Honours) major in Robotics and Mechatronics",
      institution: "Swinburne University of Technology",
      period: "March 2020 – December 2024",
      details: [
        "Graduated with High Distinction",
        "GPA: 3.853/4.000",
        "Focus on Robotics, Mechatronics, and Autonomous Systems"
      ]
    },
    {
      degree: "Victorian Certificate of Education (VCE)",
      institution: "Doncaster Secondary College",
      period: "January 2014 – December 2019",
      details: ["Completed secondary education with a focus on STEM subjects"]
    }
  ],
  experience: [
    {
      title: "Graduate Robotics & Mechatronics Engineer",
      company: "Automation & Robotic Technologies",
      period: "Aug 2025 - Present",
      summary: "I am working full time as a Robotics & Mechatronics Engineer at Automation & Robotic Technologies (A&RT), providing factory automation using custom solutions and ABB robots.",
      description: [
        "Providing factory automation using custom solutions and ABB robots",
        "Designing and implementing robotic cells for industrial applications",
        "Developing mechatronic systems for specialized automation tasks"
      ]
    },
    {
      title: "Engineer",
      company: "Technotia Laboratories",
      period: "Jan 2025 – May 2025",
      summary: "I worked full time as an Engineer in a multidisciplinary team, providing engineering consulting with automation solutions and contributing to a range of projects across the software development lifecycle.",
      description: [
        "Working with senior engineers to improve communications to external clients on current and future projects",
        "Improving internal API documentation by utilising established industry tools",
        "Implementing a dark mode toggle with a modular component so it could be used on Technotia and client websites",
        "Part of an automation project which helped to deliver weekly documentation efficiencies to an external client",
        "Participating in domestic and international travel for internal and external stakeholders to better understand client needs and requirements"
      ]
    },
    {
      title: "Undergraduate Analyst",
      company: "Science Engineering Technology (SET), Alvarez & Marsal (A&M)",
      period: "Apr 2024 – Dec 2024",
      summary: "I worked part time as an Undergraduate Analyst in the Science Engineering Technology (SET) team, providing engineering consulting with automation solutions and collaborating to design, build and maintain software.",
      description: [
        "Leading and designing an internal automation project for Human Resources (HR) to assist with recruitment and management",
        "Writing a Design Manual Specification to document processes to design, develop and deploy an automation solution",
        "Research and Development (R&D), Testing and Evaluation (T&E) along with Python programming for Natural Language Processing (NLP) to support a broader project that was rolled out across all divisions in Alvarez & Marsal (A&M)"
      ]
    },
    {
      title: "Undergraduate Engineer",
      company: "Indirect Fires Support (IFS) Program, Department of Defence (DoD)",
      period: "Feb 2023 – Feb 2024",
      summary: "I worked part time as an Undergraduate Engineer in Defence, supporting the Indirect Fires Support (IFS) Program while assisting the Systems Engineering Manager (SEM) with Technical Certification artefacts and management tasks.",
      description: [
        "Writing and reviewing multiple Safety Case Reports (SCRs) for numerous mechanical and electrical systems",
        "Writing a Trial Instruction (TI) for a trial that was conducted interstate to test a new capability",
        "Compiling artefacts into a Technical Certification pack and drafting an SCR for a significant capability",
        "Assessing the issues raised in an Engineering Change Proposal (ECP) of system",
        "Provisioning devices with the correct firmware, settings, certificates, files and applications onto the network"
      ]
    },
    {
      title: "Industry Placement Program (IPP) Intern",
      company: "LAND 125 Phase 4 (L125-4), Department of Defence (DoD)",
      period: "Feb 2022 – Feb 2023",
      summary: "For my 12-month Professional Placement I worked full time as an Industry Placement Program (IPP) Intern with Land Engineering Agency (LEA) in Defence, supporting the acquisition project LAND 125 Phase 4 (L125-4).",
      description: [
        "Drafting technical documentation that included a Systems Engineering Management Plan (SEMP), Transition of Support Requirements Process (TSRP) and a Technical Certification Plan (TCP) that achieved endorsement by the Principal Engineer (PENG)",
        "Compiling Technical Certification procedural documents that were sent to the Prime Vendor",
        "Writing Safety Case Reports (SCRs) for various field equipment items ensuring they achieve technical certification"
      ]
    }
  ],
  skills: {
    technical: [
      "Technical Certification", "CAD (Solidworks, Fusion360)", "Programming (Python, C++, MATLAB, JavaScript)", 
      "Microsoft Office (Word, Excel, PowerPoint, Outlook, Visio)", "Adobe (Acrobat, Premier Pro, Photoshop, Illustrator)",
      "ABB RobotStudio", "Robot Programming (ABB)", "Factory Automation"
    ],
    conceptual: ["Innovative", "Problem Solving", "Inquisitiveness", "Teamwork", "Critical Thinking", "Leadership"],
    interpersonal: ["Passionate", "Hardworking", "Motivated", "Persistent", "Resilient", "Compassionate", "Conflict Resolution"]
  },
  awards: [
    { 
      title: "Winner of the Best Project Award Engineering Technologies Capstone Project Expo 2024", 
      date: "Nov 2024",
      description: "The Robotic Fish project was awarded the Best Project Award for the School of Science, Computing and Engineering Technologies Capstone Project Expo 2024 in the Engineering Technologies Category."
    },
    { 
      title: "Swinburne Engineering Excellence Group (SNXG) Engineering Scholarship", 
      date: "Sep 2023",
      description: "The SNXG Engineering Scholarship supports high achieving students to excel in the field of engineering. I was the recipient of the third year undergraduate scholarship."
    },
    { 
      title: "Letter of Commendation", 
      date: "Dec 2021",
      description: "Letter of commendation from Professor Chris Pilgrim commending me on my excellent results, which placed me among Swinburne's top students for Semester 1 and Semester 2 of 2021."
    },
    { 
      title: "Letter of Commendation", 
      date: "Dec 2020",
      description: "Letter of commendation from Professor Chris Pilgrim commending me on my excellent results, which placed me among Swinburne's top students for Semester 1 and Semester 2 of 2020."
    },
    { title: "Golden Key International Honour Society", date: "Jun 2021" },
    { title: "Certificate of Recognition Personal Achievement for English & Specialist Mathematics", date: "Nov 2019" }
  ],
  qualifications: [
    { title: "Panel Member for Selection of the 2024 SNXG Engineering Scholarship", date: "2024" },
    { title: "Swinburne Emerging Leader", date: "2 July 2024" },
    { title: "Engineers Australia International Women’s Day luncheon (Invited)", date: "6 March 2024" },
    { title: "UNSW CASG Cyber Security Bootcamp Course", date: "September 2022" },
    { title: "DOORS Course", date: "14 June 2022" },
    { title: "Performance Based Contracting (PBC) Course", date: "April 2022" },
    { title: "Member of Engineers Australia", date: "2020 - Present" }
  ],
  projects: [
    {
      title: "6 Axis Robotic Arm",
      period: "Dec 2023 - Present",
      status: "WIP",
      description: "A current project focusing on the development of a 6-axis robotic arm. The goal is to achieve control using ROS2 with inverse kinematics. The project involves mechanical design, electronics integration, and software development.",
      shortsUrls: [
        "https://www.youtube.com/shorts/CwzjNdkQ3CU",
        "https://www.youtube.com/shorts/5FJPn7_KNf0",
        "https://www.youtube.com/shorts/hIxDOb6-Xjw",
        "https://www.youtube.com/shorts/wy_CZNd4YYI",
        "https://www.youtube.com/shorts/0QGq0PrIArM",
        "https://www.youtube.com/shorts/xkj8yVUUERY",
        "https://www.youtube.com/shorts/3_9PdCCVcS4",
        "https://www.youtube.com/shorts/32o4gA1H4BQ",
        "https://www.youtube.com/shorts/NlA8WSPqg2s",
        "https://www.youtube.com/shorts/ZG555aEvGxk",
        "https://www.youtube.com/shorts/BzvzZOHQCFI",
        "https://www.youtube.com/shorts/DY94g_olxfg",
        "https://www.youtube.com/shorts/p5NxMUDZIHg",
        "https://www.youtube.com/shorts/lqZUI3qo8_4"
      ]
    },
    {
      title: "Ying Yang ☯️ Ninja Star ✴️ Clock ⏰️",
      period: "Dec 2024 - Dec 2024",
      status: "Completed",
      description: "A creative project combining mechanical design and aesthetics to create a unique Ying Yang Ninja Star themed clock.",
      videoUrl: "https://www.youtube.com/shorts/WvidRAiCfE4"
    },
    {
      title: "Robotic Fish 🐟⚙️",
      period: "Mar 2024 – Oct 2024",
      status: "Completed",
      description: "Honours project (ENG40001/ENG40002). An untethered robotic fish utilising Shape Memory Alloy (SMA) wires was designed, developed and tested to achieve a maximum speed of 348.7mm/s (0.59BL/s).",
      videoUrl: "https://www.youtube.com/watch?v=yNPAX8hmRsU"
    },
    {
      title: "3D Printed Pick and Place Robotic Arm 🤖⚙️🕹️",
      period: "Aug 2023 – Nov 2023",
      status: "Completed",
      description: "Mechatronics Systems Design project (RME40002). Mechanical engineer for a robotic arm designed to pick and place blocks within specific time and distance requirements. Achieved high distinction requirements for block placement.",
      videoUrl: "https://www.youtube.com/watch?v=sXG60eB0xAs"
    },
    {
      title: "ABB IRB 120 Robot Controls 3D Printed 7 Segment Display 📟🦾🤖",
      period: "Sep 2023 – Nov 2023",
      status: "Completed",
      description: "Robot Systems Design project (RME40003). Hand-Eye Coordination Project using an ABB IRB 120 robot to control a custom 3D printed seven-segment display.",
      videoUrl: "https://www.youtube.com/watch?v=lozmTYQx2H8"
    },
    {
      title: "ABB Robot Simulation Tracing Custom Part 🤖🌊🛹🎮",
      period: "Sep 2023 – Oct 2023",
      status: "Completed",
      description: "Robot Systems Design project (RME40003). Designed and created a simulation in ABB RobotStudio for an ABB robot to trace a custom part.",
      videoUrl: "https://www.youtube.com/watch?v=KFQKE_JBZI8"
    },
    {
      title: "Acrylic Planetary Gearbox ⚙️",
      period: "Mar 2023 – Jun 2023",
      status: "Completed",
      description: "Machine Design project (MEE30003). Designed on SOLIDWORKS and manufactured from acrylic. Consisted of requirements, research, calculations, ideation, evaluation, prototyping, manufacturing, and testing. Achieved best performance requirements (5kg load on 45-degree incline).",
      videoUrl: "https://www.youtube.com/watch?v=vhinZIe-Tuc"
    },
    {
      title: "Postie Bike Project 🛵✉️",
      period: "Mar 2023 – Jun 2023",
      status: "Completed",
      description: "Design and Product Visualisation Project (MEE20007). Group project using SOLIDWORKS to create a Postie Bike. Responsible for Wheel and Brake Assembly, Axle Assembly, Hydrogen Tank/Fuel Cell, and full major assembly."
    },
    {
      title: "Heart Rate Monitor and Analyser MATLAB Project 🫀",
      period: "Aug 2020 – Nov 2020",
      status: "Completed",
      description: "Digital and Data Systems project (ENG10004). Developed a heart rate monitor and analyser using MATLAB.",
      videoUrl: "https://www.youtube.com/watch?v=vrurh1cntoA"
    },
    {
      title: "Warren Truss Bridge Project 🛠️🌉💥",
      period: "Aug 2020 – Nov 2020",
      status: "Completed",
      description: "Mechanics of Structures project (ENG10003). DIY project creating a Warren Truss bridge out of jumbo popsicle sticks and hot glue.",
      videoUrl: "https://www.youtube.com/watch?v=Q5ZYdJ9Gd4s"
    },
    {
      title: "Hat Power Concept Design 🧢⚡🔋",
      period: "Mar 2020 – Jun 2020",
      status: "Completed",
      description: "Engineering, Design and Innovation project (ENG10001). Concept design video pitching an innovation in energy storage for the EWB Challenge.",
      videoUrl: "https://www.youtube.com/watch?v=dEhbmiPqIzY"
    }
  ],
  interests: [
    { name: "Basketball", since: 7, icon: "Dribbble" },
    { name: "Skateboarding", since: 11, icon: "Zap" },
    { name: "AFL (Footy)", since: 14, icon: "Trophy" },
    { name: "Boxing", since: 16, icon: "Target" },
    { name: "Gaming", since: null, icon: "Gamepad2" }
  ],
  videos: [
    { id: "dQw4w9WgXcQ", title: "Engineering & 3D Printing Showcase", category: "Engineering" },
  ]
};
