// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the whole site.
// Both editions ("original" and "academic") render from this file, so a CV
// update only ever happens here.
// ─────────────────────────────────────────────────────────────────────────────

import jeffFull from "../assets/img/jeff-full.jpg";
import jeffPortrait from "../assets/img/jeff-portrait.jpg";
import penguin from "../assets/img/penguin.gif";
import honk from "../assets/audio/honk.mp3";
import vibesImg from "../assets/img/vibes.jpg";
import rateMyClassesImg from "../assets/img/rate-my-classes.jpg";
import fileSystemImg from "../assets/img/file-system-design.jpg";
import oilRigImg from "../assets/img/oil-rig.jpg";

export const config = {
  // Which edition loads when the URL has no #original / #academic hash.
  defaultEdition: "original", // "original" | "academic"
  // The small "Original / Academic" switch used while comparing the two
  // versions. Set to false once you have picked one.
  showEditionSwitcher: true,
};

export const media = { jeffFull, jeffPortrait, penguin, honk };

export const person = {
  name: "Jeffrey Millan",
  firstName: "Jeffrey",
  role: "PhD student",
  field: "Computer Engineering",
  department: "Ming Hsieh Department of Electrical and Computer Engineering",
  university: "University of Southern California",
  universityShort: "USC",
  location: "Los Angeles, CA",
  hometown: "San Juan Capistrano, CA",
  // The PhD started in the Spring 2025 semester. The "second-year" wording is
  // computed from this (see src/shared/phdYear.js) so it never goes stale.
  phdStart: { year: 2025, month: 1 }, // month is 1-12
  expectedGraduation: "May 2029",
  advisor: { name: "Prof. Corey E. Baker", url: "https://netrecon.usc.edu/baker/" },
  lab: { name: "Network Reconnaissance Lab", url: "https://netrecon.usc.edu/baker/" },
  photoAlt: "Jeffrey Millan in a suit outside the Anaheim Convention Center at the SHPE National Convention",
};

export const links = {
  email: "millanj@usc.edu",
  github: "https://github.com/jmillan736",
  linkedin: "https://www.linkedin.com/in/jeffrey-millan/",
  // Leave as null to hide the button. To add a CV: put the PDF in /public
  // (e.g. public/Jeffrey_Millan_CV.pdf) and set cv to "Jeffrey_Millan_CV.pdf".
  cv: null,
  // Paste a Google Scholar profile URL here to show a Scholar link.
  scholar: null,
};

// {year} is replaced with the computed ordinal word ("second", "third", ...).
export const intro = {
  greeting: "Hi, I'm Jeffrey 👋🏼",
  // Original edition hero (casual voice).
  casual: [
    "I'm a {year}-year PhD student at USC ✌🏼 studying computer engineering.",
    "I research how information spreads through crowds of moving people, robots, and devices.",
    "I received a B.S. in Electrical Engineering and Computer Science at UC Berkeley 🐻",
    "Reach out if you'd like to learn more!",
  ],
  // Academic edition bio.
  formal: [
    "Hello!!! I'm Jeffrey, a {year}-year PhD student in Computer Engineering at the University of Southern California. I currently research in the Network Reconnaissance Lab advised by [Prof. Corey E. Baker](https://netrecon.usc.edu/baker/).",
    "My research models how information spreads among moving entities (people, robots, and devices) under real-world physical constraints, in support of opportunistic device-to-device (D2D) networks. Lately I have been building behavior-grounded crowd simulators that serve as realistic mobility models for studying message propagation.",
    "In summer 2026 I was a visiting student research collaborator in the C.A.B. Lab at Princeton University, supervised by [Prof. Christine Allen-Blanchette](https://cablanc.github.io). Before USC, I earned a B.S. in Electrical Engineering and Computer Science from UC Berkeley, where I worked on machine learning for methane leak detection with Squishy Robotics.",
    "Outside of research I run, work out, and listen to music.",
  ],
};

// Original edition "About" section (casual voice). Supports [text](url) links.
export const about = [
  "HELLO AGAIN! You made it past the intro, so I'll tell you a little bit about myself. I'm a PhD student and researcher from San Juan Capistrano, CA. These days I spend most of my time on crowd simulation and device-to-device networks, and I still love building things with React and PyTorch.",
  "I'm a graduate research assistant in the Network Reconnaissance Lab at USC, working under [Prof. Corey Baker](https://netrecon.usc.edu/baker/). In summer 2026 I visited the C.A.B. Lab at Princeton to work with [Prof. Christine Allen-Blanchette](https://cablanc.github.io).",
  "Outside of academics, I enjoy running, working out, and listening to music.",
  "Enjoy the rest of the website, and if you want to connect, my links are below ⬇",
];

export const interests = [
  "Opportunistic D2D networks",
  "Crowd simulation",
  "Stochastic opinion dynamics",
  "Mobility modeling",
  "Mobile health",
];

// Short, plain-language research threads.
export const research = [
  {
    id: "information-spread",
    emoji: "📡",
    title: "How information spreads in moving crowds",
    where: "USC Network Reconnaissance Lab",
    summary:
      "I model how information disseminates among moving entities (people, robots, and devices) under real-world physical constraints. The goal is to understand and support opportunistic device-to-device (D2D) networks, where messages hop between devices as their owners pass each other.",
  },
  {
    id: "snod",
    emoji: "🚶🏽",
    title: "Stochastic crowd simulation (SNOD)",
    where: "With the C.A.B. Lab at Princeton University",
    summary:
      "SNOD is a stochastic crowd-simulation model that reformulates nonlinear opinion dynamics as a Langevin SDE. Its latent space carries a stochastic opinion-dynamics inductive bias, so multimodal behavior is intrinsic to the model instead of being imposed by a separate sampling mechanism. It gives us a behavior-grounded, realistic mobility substrate for studying message propagation.",
  },
  {
    id: "assuage",
    emoji: "📱",
    title: "Mobile health and symptom reporting",
    where: "USC Network Reconnaissance Lab",
    summary:
      "I co-authored a 45-day clinical pilot study of Assuage, a HIPAA-compliant iOS mHealth app built on ResearchKit and CareKit, evaluating how well patients with cancer keep up with symptom reporting.",
  },
];

// `me` marks which author to emphasize. `links` entries render as buttons.
export const publications = [
  {
    id: "snod-2026",
    title: "Stochastic Opinion Dynamics for Multimodal Crowd Simulation",
    authors: ["Jeffrey Millan", "Yulong Yang", "Corey E. Baker", "Christine Allen-Blanchette"],
    me: "Jeffrey Millan",
    venue: null,
    year: 2026,
    status: "Under review",
    note: "First author",
    award: null,
    summary:
      "A stochastic crowd-simulation model (SNOD) that reformulates nonlinear opinion dynamics as a Langevin SDE.",
    links: [],
  },
  {
    id: "assuage-bsn-2025",
    title: "Motivating Adherence to Symptom Reporting Among Patients with Cancer: Pilot Study",
    authors: [
      "Alyssa Donawa",
      "Jeffrey Millan",
      "Luis Millan",
      "Thomas Reeves",
      "Ronaldo Lopez-Tucux",
      "Nazila Shafagati",
      "Ruta Arays",
      "Ralph Zinner",
      "Corey E. Baker",
    ],
    me: "Jeffrey Millan",
    venue: "IEEE-EMBS International Conference on Body Sensor Networks (BSN)",
    venueShort: "BSN 2025",
    year: 2025,
    status: null,
    note: null,
    award: null,
    summary:
      "A 45-day pilot of Assuage, a HIPAA-compliant mHealth app, studying symptom-reporting adherence among patients with cancer.",
    links: [{ label: "DOI", url: "https://doi.org/10.1109/BSN66969.2025.11337280" }],
  },
  {
    id: "methane-imece-2024",
    title:
      "Methane Detection and Characterization With AI Sensor Fusion and Decision-Analytic Placement of Rapidly Deployable Sensors",
    authors: [
      "Alice M. Agogino",
      "Adam Goldstein",
      "Ian Y. Chen",
      "Lily Hu",
      "Roy Huang",
      "Douglas Hutchings",
      "Christiana Kang",
      "Angeline Y. K. Lee",
      "Yuxin Miao",
      "Jeffrey Millan",
      "Vivek Rao",
    ],
    me: "Jeffrey Millan",
    venue: "ASME International Mechanical Engineering Congress and Exposition (IMECE)",
    venueShort: "IMECE 2024",
    year: 2024,
    status: null,
    note: null,
    award: "Best Paper Competition winner, ASME Emerging Strategic Area: Artificial Intelligence",
    summary:
      "An integrated ground and aerial sensing approach that uses machine learning and decision analysis to find and characterize methane leaks.",
    links: [
      { label: "DOI", url: "https://doi.org/10.1115/IMECE2024-145130" },
      { label: "PDF", url: "https://best.berkeley.edu/wp-content/uploads/2025/10/IMECE2024-145130-compressed.pdf" },
    ],
  },
];

export const experience = [
  {
    role: "Graduate Research Assistant",
    org: "University of Southern California",
    unit: "Network Reconnaissance Lab",
    url: "https://netrecon.usc.edu/baker/",
    dates: "Present",
    current: true,
    bullets: [
      "Model information dissemination among moving entities (people, robots, devices) under real-world physical constraints, supporting research on opportunistic device-to-device (D2D) networks.",
      "Developed behavior-grounded crowd simulation as a realistic mobility substrate for studying message propagation, culminating in a first-author paper (under review) with collaborators at Princeton University.",
      "Co-authored a 45-day clinical pilot study of Assuage, a HIPAA-compliant iOS mHealth app built on ResearchKit/CareKit, evaluating cancer-patient symptom-reporting adherence, published at IEEE-EMBS BSN 2025.",
    ],
  },
  {
    role: "Visiting Student Research Collaborator",
    org: "Princeton University",
    unit: "C.A.B. Lab",
    url: "https://cablanc.github.io",
    dates: "June 2026 – Aug. 2026",
    current: false,
    bullets: [
      "Developed SNOD, a stochastic crowd-simulation model that reformulates nonlinear opinion dynamics as a Langevin SDE, improving over the state-of-the-art CrowdES on 26 of 35 benchmark comparisons.",
      "Structured the simulator's latent space with a stochastic opinion-dynamics inductive bias, making behavioral multimodality intrinsic to the model rather than imposed by a separate sampling mechanism.",
      "Characterized the model's indecision-breaking bifurcation analytically and numerically, showing the behavioral distribution splits into multiple committed modes and that this structure survives noise.",
    ],
  },
  {
    role: "Research Scientist/Engineer Intern",
    org: "Adobe",
    unit: null,
    url: null,
    dates: "June 2025 – Aug. 2025",
    current: false,
    bullets: [
      "Investigated the planning capabilities of OpenAI LLMs on real-life scenarios such as travel planning.",
      "Experimented with GraphRAG methods that build entities and relationships out of travel documents from the TravelPlanner dataset.",
      "Compiled the findings into a written report and a final presentation for Adobe Research.",
    ],
  },
  {
    role: "Undergraduate Researcher",
    org: "Squishy Robotics",
    unit: null,
    url: "https://squishy-robotics.com",
    dates: "Feb. 2023 – July 2024",
    current: false,
    bullets: [
      "Preprocessed a dataset of 25 infrared videos with OpenCV, using background subtraction to highlight methane.",
      "Recreated and adapted machine learning models, including BEiT, using TensorFlow, PyTorch, and Hugging Face.",
      "Designed a decision tree for a leak repair program and incorporated the expected value of information to assess costs.",
      "Presented a research poster at TECHCON 2023 and contributed to a paper at IMECE 2024 that won the Best Paper Competition in ASME's Artificial Intelligence Emerging Strategic Area.",
    ],
  },
];

export const education = [
  {
    degree: "Ph.D. in Computer Engineering",
    school: "University of Southern California",
    dates: "Expected May 2029",
  },
  {
    degree: "B.S. in Electrical Engineering and Computer Science",
    school: "University of California, Berkeley",
    dates: "May 2024",
  },
];

export const teaching = [
  {
    role: "Teaching Assistant",
    course: "EE250: Distributed Systems and the Internet of Things",
    org: "USC",
    dates: "Aug. 2026 – Present",
    current: true,
    bullets: [
      "Teach and write weekly lab sections for 30+ students on networking and IoT topics such as TCP/UDP socket programming, virtual machines, and the ESP32-S3 microcontroller.",
      "Run in-person oral assessments of lab submissions and hold weekly office hours.",
    ],
  },
  {
    role: "Teaching Assistant",
    course: "NACME Applied AI/ML Bootcamp",
    org: "USC",
    dates: "June 2024 – Aug. 2024",
    current: false,
    bullets: [
      "Taught technical sessions, including \"Introduction to PyTorch\" and \"Support Vector Machines,\" for 20 students.",
      "Mentored 4 students on a group project predicting bird flock behavior with graph recurrent neural networks.",
    ],
  },
];

export const honors = [
  { year: "2026", title: "Tapia Conference Scholarship" },
  { year: "2025", title: "GEM Fellowship" },
  { year: "2023", title: "HSF Scholar" },
  { year: "2023", title: "JUMP Undergraduate Research Initiative (URI) Scholar" },
  { year: "2022", title: "National Action Council for Minority Engineers (NACME) Scholar" },
];

// Newest first. Everything here comes straight from the CV.
export const news = [
  { date: "Sep 2026", text: "Attended the ACM Richard Tapia Celebration of Diversity in Computing in Atlanta on a Tapia Conference Scholarship." },
  { date: "Aug 2026", text: "Started as a teaching assistant for USC's EE250: Distributed Systems and the Internet of Things." },
  { date: "Summer 2026", text: "Spent the summer at Princeton University as a visiting student research collaborator in the C.A.B. Lab, and submitted a first-author paper on stochastic crowd simulation." },
  { date: "Apr 2026", text: "Presented a poster at the Conference for Emerging Black Academics in STEM (CEBAS) at Caltech." },
  { date: "2025", text: "Our pilot study of the Assuage mHealth app was published at IEEE-EMBS BSN 2025." },
  { date: "Summer 2025", text: "Interned at Adobe as a research scientist/engineer, studying LLM planning and GraphRAG." },
  { date: "2025", text: "Awarded the GEM Fellowship." },
];

export const service = [
  { date: "Oct 2025", text: "IEEE Military Communications Conference, Los Angeles, CA", role: "Volunteer" },
  { date: "Feb 2025", text: "Viterbi Impact, Monte Vista Elementary School STEAM Night", role: "Teacher volunteer" },
  { date: "Dec 2024", text: "Urban TXT Hustle N Code Hackathon", role: "Developer volunteer" },
  { date: "Sep 2024", text: "ACM Richard Tapia Celebration of Diversity in Computing", role: "Student volunteer" },
  { date: "May 2022 – June 2023", text: "Breakthrough San Juan Capistrano", role: "College mentor" },
  { date: "Aug 2021 – May 2022", text: "Berkeley Mentorship Cohort", role: "Student mentor" },
];

export const conferences = [
  { date: "Sep 2026", text: "ACM Richard Tapia Celebration of Diversity in Computing, Atlanta, GA", note: null },
  { date: "Apr 2026", text: "Conference for Emerging Black Academics in STEM (CEBAS) at Caltech", note: "Poster presentation" },
  { date: "Oct 2025", text: "IEEE Military Communications Conference, Los Angeles, CA", note: null },
  { date: "Sep 2025", text: "GEM 49th Annual Board Meeting & Conference, San Diego, CA", note: null },
  { date: "Nov 2024", text: "Ming Hsieh Department of Electrical & Computer Engineering Research Festival, Los Angeles, CA", note: null },
  { date: "Oct 2024", text: "SHPE National Convention, Anaheim, CA", note: null },
  { date: "Sep 2024", text: "ACM Richard Tapia Celebration of Diversity in Computing, San Diego, CA", note: null },
  { date: "Sep 2023", text: "Semiconductor Research Corporation (SRC) TECHCON Conference", note: "Poster presentation" },
];

export const skills = {
  languages: ["Python", "Java", "C", "Go", "SQL", "JavaScript", "HTML/CSS", "SwiftUI"],
  libraries: ["React", "Tailwind CSS", "Pandas", "NumPy", "PyTorch", "Matplotlib", "scikit-learn", "Hugging Face"],
};

export const projects = [
  {
    id: "vibes",
    title: "VibeS",
    image: vibesImg,
    imageAlt: "Screenshot of the VibeS web app",
    tools: ["React", "PyTorch", "Hugging Face"],
    description:
      "Got a picture and Spotify account?? Input it into our ML model and get a curated playlist from Spotify 🎶",
    long_description: [
      "VibeS was our submission for Cal Hacks 10.0! The hackathon experience was incredible, with everyone hustling to build their projects over several intense days and showcasing some truly impressive creations. Our team wanted to dive into something music-related and incorporate machine learning, so after brainstorming and taking inspiration from the buildings of San Francisco, we landed on the idea of VibeS.",
      "The concept of VibeS was to generate a unique Spotify playlist based on a picture. We would analyze the image to derive characteristics such as the time of day and environmental features (whether it looked urban, snowy, or like a desert) and match those to a curated playlist from Spotify. One of the biggest challenges was gathering and preparing a dataset to experiment with, which led me to explore Kaggle for the data we needed. We used a vision transformer model from Hugging Face's API to power the image analysis. Once the model was trained, I focused on designing the user interface for displaying the outputted playlist.",
      "From this project, I learned the importance of close collaboration, leveraging each team member's strengths and learning from each other. I also gained valuable experience in pitching our product to companies like Intel and Convex, which taught me how to effectively present our work.",
    ],
    link: "https://github.com/luisricardodiaz/VibeS",
    more_links: [
      {
        title: "Live Demo",
        url: "https://devpost.com/software/vibes-n2qa73?ref_content=my-projects-tab&ref_feature=my_projects",
      },
    ],
  },
  {
    id: "rate-my-classes",
    title: "RateMyClasses",
    image: rateMyClassesImg,
    imageAlt: "Screenshot of the RateMyClasses web app",
    tools: ["React", "Bootstrap", "HTML/CSS", "MySQL"],
    description:
      "A web application built with Next.js and MySQL, allowing UC Berkeley students to rate and review classes while using an Express.js server to handle API requests and a MySQL database to store user data like login information, reviews, and ratings.",
    long_description: [
      "RateMyClasses was our final project submission for the Fullstack DeCal at UC Berkeley. The goal of this project was to create a helpful platform where UC Berkeley students could share advice about classes, offering insights into whether they found certain courses useful or not. Our vision was to provide a space for students to make more informed academic decisions.",
      "My contributions spanned both front-end and backend development. On the frontend, I focused on building a distribution bar that visually displayed the score distribution for a specific class. I also implemented a responsive search bar that autocompletes user input, suggesting the top five closest class matches in real time. As for the backend, I did a couple of SQL queries that helped with feeding that information into the search bar.",
      "This project was a fantastic learning experience, as I got to see how the frontend and backend come together to create a seamless user experience (very fitting for a Fullstack course!). Collaborating with my team was a highlight, and to top it off, we were thrilled to win first place for our section, earning a memorable $0.45 check as our prize!",
    ],
    link: "https://github.com/EmmanuelCobian/rate-my-classes",
    more_links: [],
  },
  {
    id: "secure-file-sharing",
    title: "Secure File Sharing System",
    image: fileSystemImg,
    imageAlt: "Design diagram of the secure file sharing system",
    tools: ["Go"],
    description:
      "This secure file-sharing system leverages robust cryptographic functions to allow users to log in, store, and share files safely and efficiently, even in the face of potential attackers.",
    long_description: [
      "Your satellite hacking adventures have made you realize the Jupiter Orbiter project must be stopped, but intercepting it won't be easy. Fortunately, EvanBot enlists the help of CodaBot, a CSA architect who suggests intercepting the craft near Mars as it uses the planet's gravitational pull. However, executing this plan requires coordination with your allies on Mars, and communication must pass through Caltopia's watchful eye. The only available method involves storing messages on REGULUS, a lunar-based cloud storage service accessible from both Earth and Mars.",
      "EvanBot and CodaBot are positioned in the Arctic, prepared to use REGULUS when you give the signal. The message must be securely delivered by July 28, the critical date for the orbital slingshot. Every effort must be made to protect your plans from prying eyes, as the future of interplanetary peace hinges on your success.",
      "REGULUS has significant limitations. Despite its promise of durability, its privacy policy is dubious. Caltopia could easily intercept or analyze data stored on it, and the service claims no adherence to privacy laws due to its lunar location. The architecture includes an unsecured shared key space and constant data and network analysis, with potential modifications performed without consent. Your mission requires hiding your communication in plain sight, using encryption to outmaneuver Caltopia's surveillance, while ensuring that the plans reach Mars securely.",
      "I'm choosing not to share this openly to prevent any issues related to academic dishonesty. However, I'm happy to share it with those I've met in person who haven't had the opportunity to review it in a professional setting. Please send me an email with your GitHub username down below.",
    ],
    link: "https://github.com/jmillan736/cs161-project2",
    more_links: [{ title: "More Details", url: "https://fa23.cs161.org/proj2/" }],
  },
  {
    id: "squishy-methane",
    title: "Squishy Methane Analysis",
    image: oilRigImg,
    imageAlt: "An offshore oil rig",
    tools: ["Python", "PyTorch", "Pandas", "NumPy"],
    description:
      "Have a methane leak? Don't know where to look? This model can take a look for you with its continuous monitoring capabilities using a vision transformer.",
    long_description: [
      "I conducted comprehensive research and synthesized academic articles focused on machine learning-based methane leak detection, laying the groundwork for our project's methodology. Managing a dataset of 25 infrared videos, I curated and preprocessed the data by segmenting transitions between leak and non-leak events, performing image normalization, and applying background subtraction to ensure high-quality input for model training.",
      "I recreated and fine-tuned machine learning models, such as BEiT, utilizing frameworks like TensorFlow, PyTorch, and Hugging Face. By iteratively training these models, I achieved progressive improvements in accuracy and efficiency for methane leak detection. Throughout the project, I presented updates to faculty mentors and peers, culminating in a research poster that I showcased at TECHCON 2023. Additionally, I visualized our leak repair program with a decision tree and conducted a cost analysis to support our approach.",
      "Our team's research efforts were successfully compiled for publication, and our work was honored at IMECE 2024, where we won the \"Best Paper Competition\" in the Artificial Intelligence Emerging Strategic Area.",
    ],
    link: "https://github.com/BerkeleyExpertSystemTechnologiesLab/Squishy-Methane-Analysis",
    more_links: [{ title: "Squishy Robotics", url: "https://squishy-robotics.com" }],
  },
];
