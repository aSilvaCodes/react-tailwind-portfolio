import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Campus Coin",
    description:
      "Multiplatform student budgeting application built using .NET Maui framework and C# where users can create an account, enter expense data, and access a graphical view of their expense data to help better identify their expense habits and make informed decisions on how to budget more effectively.",
    image: "/projects/project1.png",
    tags: [".Net Maui"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 2,
    title: "Pokedex Recreated",
    description: "Realistic recreation of a Pokedex with original 151 pokemon",
    image: "/projects/project2.png",
    tags: [".Net Maui"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 3,
    title: "ship-test",
    description: "Just a ship-test",
    image: "/projects/project3.jpg",
    tags: ["Node.js"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 4,
    title: "ReadShelf",
    description:
      "ReadShelf is a web application designed to help users track and manage a personal list of books they have read. Built with Node.js, Express.js, EJS, and a PostgreSQL database, ReadShelf integrates the Open Library Covers API to fetch and display book cover images based on user-provided book titles. The application supports full CRUD operations for book entries, enabling users to add new books, view their reading list, edit book details, and remove books.",
    image: "/projects/project4.jpg",
    tags: ["Node.js", "Express.js", "EJS", "PostgreSQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 5,
    title: "CoinFlux",
    description:
      "CoinFlux is a web application that delivers real-time cryptocurrency price updates powered by the Blockchain.com Exchange API. Built with Node.js and Express.js for a robust server-side foundation, it leverages EJS templating to dynamically render live market data directly to your browser.",
    image: "/projects/project5.jpg",
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "",
  },
  {
    id: 6,
    title: "Stack Scribbles",
    description:
      "Engineered a development-themed blog web application using Node.js, Express.js, and EJS, featuring CRUD operations for user generated posts and a responsive Bootstrap frontend. ",
    image: "/projects/project6.jpg",
    tags: ["Node.js", "Express.js", "EJS", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                ></img>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/aSilvaCodes"
          >
            Check my Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
