import styled from '@emotion/styled';

export const TaskWrapper = styled.div`
  display: flex;
  padding: 40px;
  max-width: 80%;
  margin: 0 auto;
  min-height: 1000px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  select {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center ;
`;

export const DayGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  margin: 10px;
  border: 3px solid lightblue;
  border-radius: 30px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      padding: 10px;
      background-color: #f1f1f1;
      margin-bottom: 5px;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    button {
      margin-left: 10px;
      padding: 5px;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
