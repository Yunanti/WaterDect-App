import { screen,  render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Form from '../../../components/pages/gallery/Form';
import store from '../../../components/redux/store';

test('Renders with search input component', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
  
    const inputElement = screen.getByPlaceholderText('Pilih Provinsi...');
  
    expect(inputElement).toBeInTheDocument();
  });

