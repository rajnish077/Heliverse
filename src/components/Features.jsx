import styled from "@emotion/styled";

const SectionContainer = styled.section`
  padding: 40px 20px;
  background-color: #0d0d0d;
  color: white;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  line-height: 1.5;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Card = styled.div`
  border-radius: 10px;
  padding: 20px;
  max-width: 350px;
  height: 300px;
  text-align: left;
  background-color: transparent;
  background-image: linear-gradient(180deg, #0d061f 0%, #251e35 100%);
  border-style: solid;
  border-color: #ffffff10;
`;

const CardIcon = styled.img`
  width: 188px;
  height: 188px;
  margin-bottom: 10px;
`;

const CardParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const Features = () => {
  return (
    <>
      <SectionContainer>
        <Heading>
          An All-Round Plugin With Powerful
          <br />
          Features
        </Heading>
        <Paragraph>
          Whether you are a seasoned web designer or just starting out, Motion
          Art for <br />
          Elementor seamlessly integrates with the Elementor platform, providing
          you with a seamless and intuitive experience.
        </Paragraph>
        <CardsContainer>
          <Card>
            <CardIcon
              src="/public/images/motionarteffect-img6.png"
              alt="like"
            />
            <CardParagraph>
              <h2>Light Weight.</h2>
              Motion Art for Elementor is designed to be lightweight.
            </CardParagraph>
          </Card>
          <Card>
            <CardIcon
              src="/public/images/motionarteffect-img7.png"
              alt="Responsive"
            />
            <CardParagraph>
              <h2>100% Responsive</h2>
              Create a consistent visual experience across all devices.
            </CardParagraph>
          </Card>
          <Card>
            <CardIcon
              src="/public/images/motionarteffect-img9.png"
              alt="UserInterface"
            />
            <CardParagraph>
              <h2>User Friendly Interface</h2>
              Ensure a smooth experience for both applicants and administrators.
            </CardParagraph>
          </Card>
        </CardsContainer>
      </SectionContainer>
    </>
  );
};

export default Features;
