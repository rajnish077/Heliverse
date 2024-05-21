import styled from "@emotion/styled";

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 60px 20px;
  background-color: #0d0d0d;
  color: white;
`;

const Section = styled.div`
  flex: 1;
  max-width: 45%;
  margin: 0 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #0d061f 0%, #251e35 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Heading = styled.h3`
  display: flex;
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  flex: 1;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const Illustration = styled.div`
  img {
    width: 100%;
    border-radius: 12px;
  }
`;

const BrowserSupportSection = styled.div`
  padding: 60px 0;
  text-align: center;
  color: white;
  border-radius: 10px;
  background-color: transparent;
  background-image: linear-gradient(180deg, #0d061f 0%, #251e35 100%);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BrowserSupportHeading = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const BrowserSupportSubHeading = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
`;

const BrowserIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

const BrowserIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

const BrowserSupportSectionComponent = () => (
  <BrowserSupportSection>
    <BrowserSupportHeading>
      Supported by all Popular Browsers
    </BrowserSupportHeading>
    <BrowserSupportSubHeading>
      Rest assured, Motion Art is designed to be compatible with all major web
      browsers.
    </BrowserSupportSubHeading>
    <BrowserIconsContainer>
      <BrowserIcon>
        <img src="/public/images/motionarteffect-img8.png" alt="Chrome" />
      </BrowserIcon>
    </BrowserIconsContainer>
  </BrowserSupportSection>
);

const ApplyOn = () => {
  return (
    <>

      <h2
        style={{
          fontSize: "30px",
          color: "white",
          marginLeft: "30%",
          marginTop: "50px",
        }}
      >
        Apply on any section or enable for whole page
      </h2>
      <SectionWrapper>
        <Section>
          <Heading>Apply On Section</Heading>
          <SubHeading>
            Apply on section is a game-changer, offering an unparalleled way to
            manage applications directly from your website.
          </SubHeading>
          <Illustration>
            <img
              src="/images/motionarteffect-img10.png"
              alt="Apply On Section"
            />
          </Illustration>
        </Section>
        <Section>
          <Heading>Apply On Page</Heading>
          <SubHeading>
            Take your website to new heights with Motion Art for Elementor.
            Embrace the power of motion and animation.
          </SubHeading>
          <Illustration>
            <img src="/images/motionarteffect-img11.png" alt="Apply On Page" />
          </Illustration>
        </Section>
      </SectionWrapper>
      <BrowserSupportSectionComponent />
    </>
  );
};

export default ApplyOn;
