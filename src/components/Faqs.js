import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Faqs = () => (
  <Container className="my-5">
    <h2 className="text-center mb-4">Frequently Asked Questions</h2>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How do I book a ride with Vroom?</Accordion.Header>
        <Accordion.Body>
          Simply click on the “Book a Ride” button on the homepage, log in or sign up,
          and enter your pickup and drop-off locations. Confirm your booking and your driver will arrive shortly!
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Is my payment information safe?</Accordion.Header>
        <Accordion.Body>
          Absolutely. All payments on Vroom are processed through secure, encrypted gateways.
          We do not store your card details — your privacy and safety are our top priorities.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Can I cancel a ride after booking?</Accordion.Header>
        <Accordion.Body>
          Yes! You can cancel your ride up to 5 minutes after booking without any charge.
          Beyond that, a small cancellation fee may apply to compensate the driver.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>How does Vroom ensure rider safety?</Accordion.Header>
        <Accordion.Body>
          All Vroom drivers are verified through background checks, license verification, and mandatory training.
          You can also share your live location during rides for extra safety.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Can I become a Vroom driver?</Accordion.Header>
        <Accordion.Body>
          Of course! If you own a bike or car and meet our safety and verification standards,
          you can register as a driver by clicking “Become a Driver” and completing the sign-up process.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>What if I face an issue during my ride?</Accordion.Header>
        <Accordion.Body>
          You can reach our support team directly through the app or contact us via our website.
          We offer 24/7 assistance for all ride and payment-related issues.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Container>
);

export default Faqs;
