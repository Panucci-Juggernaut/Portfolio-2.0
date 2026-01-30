import { useMemo, useState } from "react";
import { Badge, Button, Card, Col, Image, Row, Carousel} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub, FaLayerGroup, FaSearch } from "react-icons/fa";

const PROJECTS = [
  {
    id: "panucci",
    name: "Panucci E‑commerce",
    role: "Full‑stack developer",
    period: "Production ready demo",
    category: "Full‑stack",
    summary:
      "A full featured e commerce platform with product browsing, cart, checkout, user management, and admin dashboards.",
    highlights: [
      "End‑to‑end flow: catalog, cart, orders, payments, and admin tools.",
      "Built with modern React patterns and reusable UI components.",
      "Focus on clean UX, clear hierarchy, and responsive design.",
    ],
    image: "/images/panucci.png",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB", "Bootstrap"],
    links: {
      live: "https://panucci.onrender.com/",
      github: "https://github.com/Panucci-Juggernaut/panucci",
    },
    stats: {
      pages: "10+ screens",
      features: "Auth, search, reviews, admin",
    },
    featured: true,
  },
  {
    id: "portfolio",
    name: "Developer Portfolio",
    role: "Frontend developer",
    period: "Ongoing",
    category: "Frontend",
    summary:
      "A personal portfolio focused on clarity, storytelling, and performance, highlighting projects and experience.",
    highlights: [
      "Modern layout with clear navigation between home, about, and projects.",
      "Reusable components and theming for consistent look and feel.",
      "Optimized for responsiveness, readability, and accessibility.",
    ],
    image: '/images/portfolio.png',
    tech: ["React", "React Router", "Bootstrap", "CSS"],
    links: {
      live: "#",
      github: "https://github.com/Panucci-Juggernaut/Portfolio-2.0",
    },
    stats: {
      pages: "Multi‑page",
      features: "Routing, responsive layout",
    },
    featured: false,
  },
  {
    id: "backend",
    name: "Admin Analytics Dashboard",
    role: "Full‑stack developer",
    period: "Concept",
    category: "Backend",
    summary:
      "An admin interface concept with user management, metrics, and data visualization inspired by production tooling.",
    highlights: [
      "Card‑based layout for quick scanning of key metrics.",
      "Filterable tables and user management workflows.",
      "Designed for extensibility: new modules can be added without redesigning the core.",
    ],
    image: null, 
    tech: ["React", "Node.js", "REST API", "Charting"],
    links: {
      live: "#",
      github: "#",
    },
    stats: {
      pages: "Users, metrics, settings",
      features: "Tables, filters, role management",
    },
    featured: false,
  },
];

const CATEGORIES = ["All", "Full‑stack", "Frontend", "Backend"];

const ProjectsScreen = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (


    
    <section className="py-5 px-3 px-md-4 px-lg-5 rounded-4 bg-body-tertiary">
      {/* Hero */}
      <Row className="align-items-center g-5 mb-4">
        <Col xs={12} lg={6}>
          <h1 className="display-5 fw-bold mb-3">Projects I&apos;ve built & shipped.</h1>
          <p className="lead text-muted mb-4">
            A selection of products and interfaces that show how I think about{" "}
            <span className="fw-semibold">UX, performance, and maintainable code</span>.
            Each project covers the essentials you expect from a modern application:
            clear flows, robust architecture, and production‑ready details.
          </p>

          <Row className="gy-2">
            <Col xs={12} md={6}>
              <div className="border rounded-3 p-3 h-100 bg-white">
                <div className="small text-uppercase text-muted mb-1">
                  <FaLayerGroup className="me-2" />
                  What this page covers
                </div>
                <ul className="mb-0 small ps-3">
                  <li>Live demos and GitHub links</li>
                  <li>Tech stack and responsibilities</li>
                  <li>Key features and UI patterns</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="border rounded-3 p-3 h-100 bg-white">
                <div className="small text-uppercase text-muted mb-1">
                  <FaSearch className="me-2" />
                  How to read it
                </div>
                <ul className="mb-0 small ps-3">
                  <li>Browse by project type using filters</li>
                  <li>Scan stacks via badges at a glance</li>
                  <li>Dive into highlights for specific flows</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xs={12} lg={6} className="d-flex justify-content-center">
         <Carousel pause='hover' className='bg-dark mb-4'>
            {PROJECTS.map((project) => (
              <Carousel.Item key={project.id}>
                <a href={project.links.live} target="_blank" rel="noreferrer">
                  <Image src={project.image} alt={project.name} fluid />
                  <Carousel.Caption className='carousel-caption'>
                    <h2 className='text-white text-right'>
                      {project.name}
                    </h2>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <hr className="my-4 opacity-25" />

      {/* Filters */}
      <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-4">
        <div className="fw-semibold">Filter by project type</div>
        <div className="d-flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "dark" : "outline-secondary"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Projects grid */}
      <Row className="g-4">
        {filteredProjects.map((project) => (
          <Col key={project.id} xs={12} lg={project.featured ? 12 : 6}>
            <Card className={`h-100 ${project.featured ? "border-primary border-2" : ""}`}>
              {project.image && (
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={`${project.name} preview`}
                />
              )}
              <Card.Body className="d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <Card.Title className="mb-1">{project.name}</Card.Title>
                    <div className="text-muted small">
                      {project.role} • {project.period}
                    </div>
                  </div>
                  <Badge bg="secondary" pill>
                    {project.category}
                  </Badge>
                </div>

                <Card.Text className="text-muted mb-3">{project.summary}</Card.Text>

                <Row className="g-3 flex-grow-1">
                  <Col xs={12} md={7}>
                    <div className="mb-2 small text-uppercase text-muted">Highlights</div>
                    <ul className="small ps-3 mb-0">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Col>
                  <Col xs={12} md={5}>
                    <div className="mb-2 small text-uppercase text-muted">Tech stack</div>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech) => (
                        <Badge key={tech} bg="light" text="dark" className="border">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mb-2 small text-uppercase text-muted">Scope</div>
                    <div className="small">
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Screens</span>
                        <span>{project.stats.pages}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-muted">Key features</span>
                        <span>{project.stats.features}</span>
                      </div>
                    </div>
                  </Col>
                </Row>

                <div className="d-flex flex-wrap gap-2 mt-4">
                  {project.links.live && (
                    <Button
                      as="a"
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      variant="primary"
                      size="sm"
                      className="d-inline-flex align-items-center"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live demo
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      as="a"
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline-dark"
                      size="sm"
                      className="d-inline-flex align-items-center"
                    >
                      <FaGithub className="me-2" />
                      View code
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5 d-flex flex-wrap justify-content-between align-items-center gap-3">
        <div className="text-muted small">
          Want more details about any project? I&apos;m happy to walk through architecture
          decisions, trade‑offs, and roadmap ideas.
        </div>
        <Button as={Link} to="/about" variant="outline-secondary" size="sm">
          Learn more about how I work
        </Button>
      </div>
    </section>
  );
};

export default ProjectsScreen;