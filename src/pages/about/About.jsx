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
      </footer>
    </>
  );
}

export default About;
