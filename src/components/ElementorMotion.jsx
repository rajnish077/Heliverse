// src/components/Header.js
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0d0d0d;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const ElementorMotion = () => {
  return (
    <>

      <HeaderContainer>
        <Logo>
          <a href=" https://qodematrix.com/motion-art-for-elementor/">
            <img src="/images/MotionArtEffect-logo.png" />
          </a>
        </Logo>
        <Button>
          <a href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891">
            Purchase Now
          </a>
        </Button>
      </HeaderContainer>
    </>
  );
};

export default ElementorMotion;
