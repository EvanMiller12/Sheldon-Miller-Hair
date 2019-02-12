import Link from 'next/link';
import styled from 'styled-components';

const StyledContactInfo = styled.section`
  padding-bottom: 0;
  .contact-contain {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    border-top: 1px solid ${props => props.theme.coral};
  }
  .contact-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.3%;
    height: 300px;
    border-right: 1px solid ${props => props.theme.coral};
    address,
    span {
      font-size: 1.5em;
    }
  }
`;

const ContactInfo = () => (
  <StyledContactInfo>
    <div className="contact-contain">
      <div className="contact-col">
        <h5>Personal</h5>
        <a href="mailto:sheldon@sheldonmillerhair.com">
          sheldon@sheldonmillerhair.com
        </a>
        <br />
        <span className="phone">864-934-5324</span>
      </div>
      <div className="contact-col">
        <h5>Salon</h5>
        <span>Vintage Hair Loft</span>
        <address>4152 Clemson Blvd, Anderson, SC 29621</address>
        <br />
        <span className="phone">864-231-7539</span>
      </div>
      <div className="contact-col">
        <h5>Social</h5>
        <ul>
          <li>
            <a href="https://facebook.com/">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com/">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  </StyledContactInfo>
);

export default ContactInfo;