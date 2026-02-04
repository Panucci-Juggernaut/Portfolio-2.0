import { useState } from "react";
import { Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import CTAGroup from "../components/CTAGroup";
import { MdOutlineEmail, MdOutlineMessage, MdOutlinePerson } from "react-icons/md";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

const ContactScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const contactReasons = [
    { value: "", label: "Select a reason..." },
    { value: "project", label: "Project Collaboration" },
    { value: "job", label: "Job Opportunity" },
    { value: "freelance", label: "Freelance Work" },
    { value: "question", label: "General Question" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.reason) {
      newErrors.reason = "Please select a reason for contacting";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Use VITE_API_URL if set (e.g. custom backend); otherwise same origin (works on Vercel and with vercel dev)
      const API_URL = import.meta.env.VITE_API_URL ?? '';
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      // Success
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        reason: "",
        message: "",
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-5 px-3 px-md-4 px-lg-5 rounded-4 bg-body-tertiary contact-background">
      <Row className="g-5">
        <Col xs={12} lg={5}>
          <h1 className="display-5 fw-bold mb-3">
            Let&apos;s Connect
          </h1>
          <p className="lead text-muted mb-4">
            Have a project in mind, a question, or just want to say hello? 
            I&apos;d love to hear from you. Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>

          <div className="mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary bg-opacity-10 rounded-circle p-3 me-3">
                <MdOutlineEmail className="text-primary fs-4" />
              </div>
              <div>
                <div className="fw-semibold">Email</div>
                <a href="mailto:eyakubu4422@gmail.com" className="text-muted text-decoration-none">
                  eyakubu4422@gmail.com
                </a>
              </div>
            </div>
          </div>

          <CTAGroup>
            <Button as={Link} to="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button
              as={Link}
              to="/projects"
              variant="outline-secondary"
              size="lg"
            >
              View Projects
            </Button>
          </CTAGroup>
        </Col>

        <Col xs={12} lg={7}>
          <Card className="shadow-sm">
            <Card.Body className="p-4 p-md-5">
              

              <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold d-flex align-items-center">
                        <MdOutlinePerson className="me-2 text-primary" />
                        Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        isInvalid={!!errors.name}
                        className="py-2"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold d-flex align-items-center">
                        <MdOutlineEmail className="me-2 text-primary" />
                        Email
                      </Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        isInvalid={!!errors.email}
                        className="py-2"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold">
                        Reason for Contacting
                      </Form.Label>
                      <Form.Select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        isInvalid={!!errors.reason}
                        className="py-2"
                      >
                        {contactReasons.map((reason) => (
                          <option key={reason.value} value={reason.value}>
                            {reason.label}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        {errors.reason}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label className="fw-semibold d-flex align-items-center">
                        <MdOutlineMessage className="me-2 text-primary" />
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, question, or how I can help..."
                        isInvalid={!!errors.message}
                        className="py-2"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                      <Form.Text className="text-muted">
                        {formData.message.length > 0 && `${formData.message.length} characters`}
                      </Form.Text>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-100 d-flex align-items-center justify-content-center"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="me-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
              {showSuccess && (
                <Alert variant="success" className="d-flex align-items-center mb-3">
                  <FaCheckCircle className="me-2" />
                  <div>
                    <strong>Message sent!</strong> I&apos;ll get back to you soon.
                  </div>
                </Alert>
              )}

              {submitError && (
                <Alert variant="danger" className="mb-3">
                  <strong>Error:</strong> {submitError}
                </Alert>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default ContactScreen;