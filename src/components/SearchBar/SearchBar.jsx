import { Formik } from 'formik';
import { Input, SearchBtn, SearchForm } from './SearchBar.styled';
import { BsSearch } from 'react-icons/bs';
import { Box } from 'components/Box/Box';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = values => {
    if (values.query.trim()) {
      onSubmit(values);
    }
  };

  return (
    <>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Box p={2}>
          <SearchForm>
            <SearchBtn type="submit">
              <BsSearch />
            </SearchBtn>
            <label>
              <Input name="query" type="text" placeholder="Serach movie " />
            </label>
          </SearchForm>
        </Box>
      </Formik>
    </>
  );
};
