import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Aymen",
  lastName: "Ben Younes",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Front End Developer",
  avatar: "/images/avatar.jpg",
  location: "Africa/Tunis", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French", "Arabic"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AymenBenYounes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aymenbenyounes/",
  },
  {
    name: "Youtube",
    icon: "youtube",
    link: "https://www.youtube.com/@Learn-With-BY",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:aymenbenyounes009@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front End Developer</>,
  subline: (
    <>
      I'm Aymen, a front end developer , content creator at{" "}
      <InlineCode>Youtube</InlineCode> and a web dev enthusiast
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aymen is a Tunisian front end developer with a passion for transforming
        complex challenges into simple, elegant design solutions. My work spans
        Food Buisness's and ERP web apps .
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "MB-Tech",
        timeframe: "Aug 2024 - Sep 2024",
        role: "Front-End Developer Intern",
        achievements: [
          <>
            Enhanced application performance by identifying and resolving
            various technical issues, improving overall functionality and user
            experience using Next JS
          </>,
          <>
            Improved page load times by 30% and enhanced mobile responsiveness
            by optimizing layouts using Tailwind CSS
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Higher Institute of Computer Science - Tunisia (ISI ARIANA)",
        description: <>Studied Programming , Networks and Web Development</>,
      },
      {
        name: "Lycée El Farabi",
        description: <>High School Diploma in Informatics with high honors</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Shadcn/ui</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Tailwind CSS",
        description: (
          <>Styling modern UIs with utility-first CSS</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "TypeScript",
        description: (
          <>Writing scalable and type-safe JavaScript</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "SQL",
        description: (
          <>Managing relational databases with SQL</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Git",
        description: (
          <>Version control and collaboration with Git</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }
    ],
  },
};


const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, work};
