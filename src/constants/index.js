import {    
  presales,
  start,
  go,
  communication,
  scope, 
  control,
  execution,
} from "../assets";


export const navLinks = [
    {
    id: "start",
    title: "Start",
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const experiences = [
  {
    title: "Presales",
    company_name: "",
    icon: presales,    
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "The pre-sales process covers all the activities that take place before closing a project.",
      "The owners of the Pre-sales and the Delivery processes should work together seamlessly, but they are distinct roles and have different procedures.",      
      "The pre-sales process plays a critical role in identifying and capitalizing on opportunities with new and existing partners and accelerating the sales process.",      
    ],
    items:  [],
  },
  {
    title: `"Go" from the Client`,
    company_name: "Client X",
    icon: go,    
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "After the deal is closed, pre-sales works with the delivery team to ensure successful implementation of the proposal, and manage customer needs throughout the ongoing relationship.",
      "Pre-sales profiles continue to work behind the scenes to follow up with the customer and identify future opportunities for growth, improving client satisfaction and increasing retention.",      
    ],
    items:  [],
  },
  {
    title: "Project Start",
    company_name: "",
    icon: start,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "The ultimate goal of project delivery management is to perform and complete projects successfully - on time, under budget and within customer expectations",
      "The beginning of a project is often a crucial time to set up the project for success.",
      "We have located two critical initial actions that lead to the project management stages of Communication, Scope and Control.",      
    ],
    items:  [{title: "External: Client Validation", files:["Project-Charter-Template-1.5.docx", "MeetingMinutes.docx"]}, {title: "Internal: Kick-off", files:["MeetingMinutes.docx"]}],
  }, 
  {
    title: "Communication plan",
    company_name: "",
    icon: communication,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "A communication plan is a policy-driven approach to providing stakeholders with information.",
      "The plan formally defines who should be given specific information, when that information should be delivered and what communication channels will be used to deliver the information.",      
    ],
    items:  [],
  },
  {
    title: "Scope plan",
    company_name: "",
    icon: scope,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Project scope planning is concerned with the definition of all the work needed to successfully meet the project objectives.",
      "As the project progresses, you need to keep that scope up to date and written down in the project’s scope management plan.",     
    ],
    items:  [],
  },
  {
    title: "Control Plan",
    company_name: "",
    icon: control,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Project control contains the tools and procedures to provide the right information at the right time, to enable to correct decisions to be made.",
      "Control comprises tracking performance against agreed plans and taking the corrective action required to meet defined objectives.",     
    ],
    items:  [],
  }, 
  {
    title: "Execution",
    company_name: "",
    icon: execution,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "The Executing Process Group consists of those processes performed to complete the work defined in the project management plan to satisfy the project specifications.",
      "The implementation of the previous rage of project management processes (Communication, Scope and Control) will enable monitoring and controlling the project.",     
      "These will provide tools to manage time, cost, quality, change, risks and issues.",   
    ],
    items:  [],
  },     
  
];

export { experiences };
