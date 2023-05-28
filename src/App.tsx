import React, { useState, useEffect, useRef } from "react";
import ExperienceItem, { Experience } from "./ExperienceItem";
import EducationItem, { Education } from "./EducationItem";
import ProjectItem, { Project } from "./ProjectItem";
import SkillItem, { Skill } from "./SkillItem";
import MenuIcon from "./MenuIcon";
import logo_name from "./logo_name.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const App: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolledFromTop, setScrolledFromTop] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({
    about: React.createRef(),
    experience: React.createRef(),
    education: React.createRef(),
    project: React.createRef(),
    skills: React.createRef(),
  });
  const [experiences, setExperiences] = useState<Array<Experience>>([]);
  const [educations, setEducations] = useState<Array<Education>>([]);
  const [projects, setProjects] = useState<Array<Project>>([]);
  const [skills, setSkills] = useState<Array<Skill>>([]);

  useEffect(() => {
    document.title = "Mushfiqus Salehin";
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset >= 50
        ? setScrolledFromTop(true)
        : setScrolledFromTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const currentSectionRefs = sectionRefs.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    Object.values(currentSectionRefs).forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => {
      Object.values(currentSectionRefs).forEach((sectionRef) => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.mushfiqussalehin.com/experiences"
      );
      const data = await response.json();
      setExperiences(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.mushfiqussalehin.com/educations"
      );
      const data = await response.json();
      setEducations(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.mushfiqussalehin.com/projects");
      const data = await response.json();
      setProjects(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.mushfiqussalehin.com/skills");
      const data = await response.json();
      setSkills(data);
    };
    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }} className="bg-gray-50 overflow-{navOpen ? 'hidden' : 'scroll'}">
      <header
        className={`fixed w-full bg-gray-50 flex justify-between items-center px-4 md:px-12 transition-all duration-200 ${
          scrolledFromTop ? "h-14 shadow-lg" : "h-24"
        }`}
      >
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            padding: 0,
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <img
            src={logo_name}
            style={{
              transform: `scale(${scrolledFromTop ? "0.75" : "1"})`,
            }}
            alt="Mushfiqus Salehin logo"
            className={`h-12 transform origin-left transition duration-200`}
          />
        </button>

        <nav>
          <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
            <MenuIcon />
          </button>
          <ul
            className={`fixed left-0 right-0 min-h-screen px-4 pt-8 space-y-4 bg-gray-50 text-black transform transition duration-300 ${
              navOpen ? "translate-x-0" : "translate-x-full"
            } md:relative md:flex md:space-x-10 md:min-h-0 md:px-0 md:py-0 md:space-y-0 md:translate-x-0`}
          >
            <li className={activeSection === "about" ? "text-blue-500" : ""}>
              <a href="#about" onClick={() => setNavOpen(false)}>
                About
              </a>
            </li>
            <li
              className={activeSection === "experience" ? "text-blue-500" : ""}
            >
              <a href="#experience" onClick={() => setNavOpen(false)}>
                Experience
              </a>
            </li>
            <li
              className={activeSection === "education" ? "text-blue-500" : ""}
            >
              <a href="#education" onClick={() => setNavOpen(false)}>
                Education
              </a>
            </li>
            <li className={activeSection === "project" ? "text-blue-500" : ""}>
              <a href="#project" onClick={() => setNavOpen(false)}>
                Projects
              </a>
            </li>
            <li className={activeSection === "skills" ? "text-blue-500" : ""}>
              <a href="#skills" onClick={() => setNavOpen(false)}>
                Skills
              </a>
            </li>
            <li className="md:hidden">
              <button onClick={() => setNavOpen(!navOpen)}>Close</button>
            </li>
          </ul>
        </nav>
      </header>

      <section
        id="about"
        ref={sectionRefs.current.about}
        className="pt-32 pb-16 md:px-12 bg-gray-50 flex justify-center"
      >
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 md:w-3/4 lg:w-3/5">
          {" "}
          <div className="mb-4 border-b border-gray-200 pb-2">
            {" "}
            <h1 className="font-bold text-2xl md:text-3xl text-black leading-tight">
              {"Hi! I'm Mushfiqus Salehin"}
            </h1>
          </div>
          <div className="mb-4 border-b border-gray-200 pb-2">
            {" "}
            <p className="mt-4 text-lg text-black">
              {
                "I'm interested in developing scalable and efficient software solutions which can have a profound impact on people's daily lives and can be deployed into low powered devices. My dream is to make processing heavy technologies like machine learning more accessible to mass people, especially in areas like my home country where a very limited number of people can afford high end devices capable of on-device data crunching."
              }
            </p>
          </div>
          <div className="flex justify-around">
            {" "}
            {/* Removed flex and other flex styles */}
            <a
              href="https://github.com/musfiqus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-black flex items-center">
                <FaGithub className="mr-2" /> Github
              </button>
            </a>
            <a
              href="https://linkedin.com/in/musfiqus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-black flex items-center">
                <FaLinkedin className="mr-2" /> Linkedin
              </button>
            </a>
            <a
              href="https://facebook.com/musfiqus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-4 rounded border border-black flex items-center">
                <FaFacebook className="mr-2" /> Facebook
              </button>
            </a>
          </div>
        </div>
      </section>

      <section
        id="experience"
        ref={sectionRefs.current.experience}
        className="flex justify-center pb-12 md:px-12"
      >
        <div className="experiences px-8 bg-white rounded-xl shadow-lg p-6 mt-4 mb-4 lg:w-3/5">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">
            Experiences
          </h2>
          <ul className="experience-list mt-4">
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} experience={experience} />
            ))}
          </ul>
        </div>
      </section>

      <section
        id="education"
        ref={sectionRefs.current.education}
        className="flex justify-center pb-12 md:px-12"
      >
        <div className="education px-8 bg-white rounded-xl shadow-lg p-6 mt-4 mb-4 md:w-3/4 lg:w-3/5">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">
            Education
          </h2>
          <ul className="education-list mt-4">
            {educations.map((education, index) => (
              <EducationItem key={index} education={education} />
            ))}
          </ul>
        </div>
      </section>

      <section
        id="project"
        ref={sectionRefs.current.project}
        className="flex justify-center pb-12 md:px-12"
      >
        <div className="projects px-8 bg-white rounded-xl shadow-lg p-6 mt-4 mb-4 md:w-3/4 lg:w-3/5"> {/* Similar width to 'education' and 'experience' sections */}
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">
            Projects
          </h2>
          <ul className="projects-list mt-4">
            {projects.map((project, index) => (
              <ProjectItem key={index} project={project} /> // Displaying each project as a ProjectItem
            ))}
          </ul>
        </div>
      </section>

      <section
        id="skills"
        ref={sectionRefs.current.skills}
        className="flex justify-center pb-12 md:px-12"
      >
        <div className="skills px-8 bg-white rounded-xl shadow-lg p-6 mt-4 mb-4 md:w-3/4 lg:w-3/5"> 
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-200 pb-2 text-black">
            Skills
          </h2>
          <ul className="skills-list mt-4">
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;
