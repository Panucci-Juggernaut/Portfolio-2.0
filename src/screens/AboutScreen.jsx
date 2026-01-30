import { Badge, Button, Card, Col, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import CTAGroup from "../components/CTAGroup"
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa"
import { MdOutlineEmail } from "react-icons/md"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiExpress,
  SiLinkedin,
  SiNextdotjs,
  SiNestjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiRedis,
  SiGraphql,
  SiDeno,
  SiPhp,
  SiLaravel,
  SiRedux,
  // SiJava,
  SiTailwindcss,
} from "react-icons/si";


const AboutScreen = () => {

    const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Product minded engineering",
      description:
        "I translate business goals into clean UI, reliable APIs, and maintainable code.",
    },
    {
      icon: <FaCode/>,
      title: "Modern web stack",
      description:
        "Next.js, Node, and pragmatic tooling focused on performance and developer experience.",
    },
    {
      icon: <FaRocket />,
      title: "Speed with quality",
      description:
        "Iterate quickly with structure clear components, reusable patterns, and thoughtful UX.",
    },
  ]

  const skills = [
    { icon: <SiJavascript />, variant: "warning", label: "JavaScript" },
    { icon: <SiTypescript />, variant: "info", label: "TypeScript" },
    { icon: <SiReact />, variant: "primary", label: "React" },
    { icon: <SiNextdotjs />, variant: "dark", label: "Next.js" },
    { icon: <SiAngular />, variant: "danger", label: "Angular" },
    { icon: <SiNodedotjs />, variant: "success", label: "Node.js" },
    { icon: <SiDeno />, variant: "success", label: "Deno" },
    { icon: <SiExpress />, variant: "dark", label: "Express" },
    { icon: <SiNestjs />, variant: "danger", label: "NestJS" },
    { icon: <SiPhp />, variant: "secondary", label: "PHP" },
    { icon: <SiLaravel />, variant: "danger", label: "Laravel" },
    // { icon: <SiJava />, variant: "warning", label: "Java" },
    { icon: <SiCss3 />, variant: "primary", label: "CSS3" },
    { icon: <SiRedux />, variant: "primary", label: "Redux" },
    { icon: <SiTailwindcss />, variant: "info", label: "Tailwind CSS" },
    { icon: <SiBootstrap />, variant: "info", label: "Bootstrap" },
    { icon: <SiMongodb />, variant: "success", label: "MongoDB" },
    { icon: <SiPostgresql />, variant: "primary", label: "PostgreSQL" },
    { icon: <SiMysql />, variant: "dark", label: "MySQL" },
    { icon: <SiRedis />, variant: "danger", label: "Redis" },
    { icon: <SiGraphql />, variant: "secondary", label: "GraphQL" },
    { icon: <SiGit />, variant: "danger", label: "Git" },
    { icon: <SiDocker />, variant: "info", label: "Docker" },
  ]

  const timeline = [
    {
      title: "Build & ship",
      body: "Deliver features end-to-end: UI, API, data modeling, and deployment.",
    },
    {
      title: "Refine for scale",
      body: "Improve performance, accessibility, and maintainability as products grow.",
    },
    {
      title: "Collaborate",
      body: "Work with designers and stakeholders to turn ideas into usable experiences.",
    },
  ]

  return (
    <section className="py-5 px-3 px-md-4 px-lg-5 rounded-4 bg-body-tertiary about-background">
      <Row className="align-items-center g-5">
        <Col xs={12} lg={7}>
          <h1 className="display-5 fw-bold mb-3">
            I build clean, fast, user first products.
          </h1>
          <p className="lead text-muted mb-4">
            Hi, I&apos;m <span className="fw-semibold">Olawale</span>, a full‑stack
            developer who enjoys crafting modern interfaces and dependable backends.
            I care about details, performance, and making experiences feel effortless.
          </p>

          <CTAGroup>
            <Button as={Link} to="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button
              as="a"
              href="mailto:eyakubu4422@gmail.com"
              variant="outline-secondary"
              size="lg"
            >
              <MdOutlineEmail className="me-2" />
              Email Me
            </Button>
          </CTAGroup>

          <div className="d-flex flex-wrap gap-2">
            <Button
              as="a"
              href="https://github.com/Panucci-Juggernaut"
              target="_blank"
              rel="noreferrer"
              variant="outline-dark"
              size="sm"
              className="d-inline-flex align-items-center"
            >
              <SiGithub className="me-2" /> GitHub
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/yakubu-olawale-a0bb19247/"
              target="_blank"
              rel="noreferrer"
              variant="outline-primary"
              size="sm"
              className="d-inline-flex align-items-center"
            >
              <SiLinkedin className="me-2" /> LinkedIn
            </Button>
          </div>
        </Col>

        <Col xs={12} lg={5} className="d-flex justify-content-center">
          <div className="text-center">
            <Image
              src={"./images/olawale.jpg"}
              alt="Olawale portrait"
              roundedCircle
              className="shadow-lg home-img"
            />
          </div>
        </Col>
      </Row>

      <hr className="my-5 opacity-25" />

      <Row className="g-4">
        {highlights.map((highlight, index) => (
          <Col key={index} xs={12} md={4}>
            <Card className="h-100">
              <Card.Body>
                <div className="mb-3 text-primary text-center fs-1">
                  {highlight.icon}
                </div>
                <Card.Title>{highlight.title}</Card.Title>
                <Card.Text className="text-muted">{highlight.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="g-4 mt-1">
        <Col xs={12} lg={7} >
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="mb-2 text-center">Technologies I use</Card.Title>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {skills.map((s) => (
                  <Badge
                    key={s.label}
                    bg={s.variant}
                    className="d-inline-flex align-items-center p-2"
                  >
                    <span className="me-2 fs-5">{s.icon}</span> {s.label}
                  </Badge>
                ))}
              </div>
              <p className="text-muted mt-3 mb-0">
                I pick tools based on the problem. Clean architecture, strong fundamentals,
                and a great user experience always come first.
              </p>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} lg={5}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="mb-2">How I work</Card.Title>
              <ol className="ps-3">
                {timeline.map((step) => (
                  <li key={step.title} className="mb-3">
                    <div>{step.title}</div>
                    <div className="text-muted">{step.body}</div>
                  </li>
                ))}
              </ol>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default AboutScreen