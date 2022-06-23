import Form from '../../components/pages/about/Form';
import Header from '../../components/pages/about/Header';
import Main from '../../components/pages/about/Main';
import { iconsList } from '../../components/svg/svg-list';

function About() {
  return (
    <>
      <Header />
      <Main />
      <Form />

      <footer>
        {iconsList.map((item) => (
          <span>{item.icons}</span>
        ))}
        {/* {image.map((item) => (
          <img src={item.src} alt={item.alt} />
        ))} */}
        {/* <img
          src={require('../../components/images/sosmed/ig.png')}
          alt="Instagram"
        />
        <img
          src={require('../../components/images/sosmed/wa.png')}
          alt="WhatsApp"
        />
        <img
          src={require('../../components/images/sosmed/fb.png')}
          alt="Facebook"
        />
        <img
          src={require('../../components/images/sosmed/twt.png')}
          alt="Twitter"
        /> */}
      </footer>
    </>
  );
}

export default About;
