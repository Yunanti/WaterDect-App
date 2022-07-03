import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Form from '../../components/pages/about/Form';
import Header from '../../components/pages/about/Header';
import Main from '../../components/pages/about/Main';
import { setActivePage } from '../../components/redux/action';

function About() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActivePage('About'));
  }, [dispatch]);

  return (
    <div className="bg-about">
      <Header />
      <Main />
      <Form />
    </div>
  );
}

export default About;
