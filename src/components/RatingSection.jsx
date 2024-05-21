import styled from "@emotion/styled";

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  background-color: #0d0d0d;
  color: white;
`;

const ContentContainer = styled.div`
  flex: 1;
  margin: 75px 0 20px -27rem;
  max-width: 55%;
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RatingIcon = styled.div`
  font-size: 4rem;
`;

const RatingScore = styled.div`
  font-size: 1rem;
`;

const MainHeading = styled.h2`
  font-size: 2rem;
  margin: 20px 0;
  flex: 1;
  max-width: 700px;
  line-height: 45px;
`;

const SubHeading = styled.p`
  font-size: 1rem;
  max-width: 600px;
  margin: 10px 0;
  line-height: 30px;
`;

const GradientButton = styled.a`
  display: inline-block;
  margin: 15px;
  font-family: "Sora", Sans-serif;
  font-size: 20px;
  font-weight: 250;
  background-color: transparent;
  background-image: linear-gradient(90deg, #5e11ff 30%, #f87516 100%);
  border-radius: 20px 20px 20px 20px;
  padding: 20px 35px 20px 35px;
`;

const Illustration = styled.div`
  flex: 1;
  display: flex;
  justify-content:flex-end;
  img {
    width: 100%;
    max-width: 300px;
    margin-top: -14rem;
    margin-left: 50rem;
    margin-right: 0rem;
    }
    }
  }
`;

const RatingsSection = () => {
  return (
    <>

      <SectionContainer>
        <h3 style={{ margin: "35px", padding: "30px" }}>
          Trusted by thousands of users around the world.
        </h3>
        <RatingContainer>
          <Rating>
            <RatingIcon>
              <img src="/images/motionarteffect-img1.png" />
              <img
                src="/images/motionarteffect-img4.png"
                style={{ padding: "25px" }}
              />
            </RatingIcon>
            <RatingScore>4.5 Score, 9 Reviews</RatingScore>
          </Rating>
          <Rating>
            <RatingIcon>
              <img src="/images/motionarteffect-img2.png" />
              <img
                src="/images/motionarteffect-img4.png"
                style={{ padding: "25px" }}
              />
            </RatingIcon>
            <RatingScore>4.5 Score, 9 Reviews</RatingScore>
          </Rating>
          <Rating>
            <RatingIcon>
              <img src="/images/motionarteffect-img3.png" />
              <img
                src="/images/motionarteffect-img4.png"
                style={{ padding: "25px" }}
              />
            </RatingIcon>
            <RatingScore>4.5 Score, 9 Reviews</RatingScore>
          </Rating>
        </RatingContainer>
        <ContentContainer>
          <MainHeading>
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </MainHeading>
          <SubHeading>
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </SubHeading>
          <GradientButton href="#">Purchase From Envato →</GradientButton>
        </ContentContainer>
        <Illustration>
          <img src="/public/images/motionarteffect-img5.png" alt="Magic Wand" />
        </Illustration>
      </SectionContainer>
    </>
  );
};

export default RatingsSection;
