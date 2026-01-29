import { Row, Col, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import CTAGroup from "../components/CTAGroup"

const HomeScreen = () => {

  const summary =[
    { title: "5+ years", subtitle: "Experience" },
    { title: "15+ projects", subtitle: "Delivered" },
    { title: "Always", subtitle: "Learning & Building" }
  ]

  return (
    <section
      className="py-5 px-3 px-md-4 px-lg-5 rounded-4 bg-body-tertiary home-background"
    >
      <Row className="align-items-center g-5">
        <Col xs={12} lg={7}>
          <p className="fw-semibold text-primary mb-2 tracking-wide">
            Welcome to my portfolio!
          </p>
          <h1 className="display-4 fw-bold mb-3">
            Hi, I&apos;m
            <span className="text-primary"> Olawale</span>
          </h1>
          <p className="lead text-muted mb-4">
            I&apos;m a <span className="fw-semibold">Full-Stack Developer</span> focused on
            building clean, performant, and user-centered digital experiences.
            Explore my work, skills, and the projects I&apos;m most proud of.
          </p>

          <CTAGroup>
            <Button
              as={Link}
              to="/projects"
              variant="primary"
              size="lg"
            >
              View Projects
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="outline-secondary"
              size="lg"
            >
              Contact Me
            </Button>
          </CTAGroup>
          <div className="d-flex flex-wrap gap-4">
            {summary.map((item, index) => (
              <div key={index}>
                <div className="h5 mb-0">{item.title}</div>
                <small className="text-muted">{item.subtitle}</small>
              </div>
            ))}
          </div>
        </Col>
        <Col xs={12} lg={5} className="d-flex justify-content-center">
          <Image
            src={'./images/olawale.jpg'}
            alt="Olawale jpg"
            roundedCircle
            className="shadow-lg home-img"
          />
        </Col>
      </Row>
    </section>
  )
}

export default HomeScreen