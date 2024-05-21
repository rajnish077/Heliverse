import styled from "@emotion/styled";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
  background-color: #0d0d0d;
  color: white;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const SubHeadingContainer = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 1rem;
  margin: 10px 0;
`;

const GradientTextSpan = styled.span`
  background: linear-gradient(90deg, #ff7e5f, #feb47b, #a18cd1, #fbc2eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CenterContainer = styled.div`
  text-align: center;
`;

const GradientText = styled.h1`
  font-size: 2.5rem;
  margin: 10px 0;
  background: linear-gradient(90deg, #ff7e5f, #feb47b, #a18cd1, #fbc2eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #fff;
  margin: 10px 0;
  max-width: 800px;
  line-height: 45px;
`;

const TransformSection = () => {
  return (
    <>
      

      <SectionContainer>
        <SubHeadingContainer>
          <SubHeading>
            <GradientTextSpan>Transform Your Website</GradientTextSpan>
            <span
              style={{ display: "flex", lineBreak: "auto", lineHeight: "40px" }}
            >
              With Motion Art Effect
            </span>
          </SubHeading>
        </SubHeadingContainer>
        <CenterContainer>
          <span style={{ fontSize: "50px" }}>
            Attract Your Visitors Attention With Colorful
          </span>
          <GradientText>Motion Art Effect</GradientText>
          <Paragraph>
            Unleash the power of creativity with Motion Art for Elementor – your
            ultimate solution for seamlessly integrating captivating animations
            into your website.
          </Paragraph>
        </CenterContainer>
      </SectionContainer>
    </>
  );
};

export default TransformSection;
