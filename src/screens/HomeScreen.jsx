import { Row, Col, Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

const HomeScreen = () => {

  const summary =[
    { title: "5+ years", subtitle: "Experience" },
    { title: "15+ projects", subtitle: "Delivered" },
    { title: "Always", subtitle: "Learning & Building" }
  ]

  return (
    <section>
      <Row className="align-items-center g-5">
        <Col xs={12} lg={7}>
          <p className="fw-semibold text-primary mb-2 tracking-wide">
            WELCOME
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

          <div className="d-flex flex-wrap gap-3 mb-4">
            <Button
              as={Link}
              to="/projects"
              variant="primary"
              size="lg"
              className="px-4 shadow-sm"
            >
              View Projects
            </Button>
            <Button
              as={Link}
              to="/contact"
              variant="outline-secondary"
              size="lg"
              className="px-4"
            >
              Contact Me
            </Button>
          </div>
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
            alt="Olawale"
            roundedCircle
            className="shadow-lg"
            style={{ width: "220px", height: "220px", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </section>
  )
}

export default HomeScreen