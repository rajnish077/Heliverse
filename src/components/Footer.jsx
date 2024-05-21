import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  padding: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  background-image: linear-gradient(90deg, #f87516 0%, #5e11ff 100%);
`;

const Copyright = styled.div`
  font-size: 1rem;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
`;

const Link = styled.a`
  text-decoration: none;
  color: #eee5ffb8;
  transition: color 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} All rights reserved by, QodeMatrix
      </Copyright>
      <Links>
        <Link href="https://qodematrix.com/docs/motion-art-for-elementor/">
          Documentation
        </Link>
        <Link href="https://support.qodematrix.com/login">Support</Link>
      </Links>
    </FooterContainer>
  );
};

export default Footer;
