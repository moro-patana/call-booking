import axios from "axios";
const BACKEND_URL = "http://localhost:4000";

export const sendQuery = (query: any): Promise<any> => {
  return axios.post(`${BACKEND_URL}/graphql?`, {
    query,
  });
};

export const getRooms = () => {
  return `{
    getRooms{
      id,
      name,
      description
    }
  }`;
};

export const getBookingsByUser = () => {
  return `{
    getBookingsByUser{
      id,
      user {
        id,
        username,
        email
      },
      roomId,
      label,
      startDate,
      endDate
    }
  }`;
};

export const getUsers = () => {
  return `{
    users{
      id,
      email,
      password,
      username
    }
  }`;
};

export const sendAuthorizedQuery = (
  query: string,
  token: string
): Promise<any> => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios.post(
    `${BACKEND_URL}/graphql?`,
    {
      query,
    },
    config
  );
};

export const registerMutation = (
  username: string,
  email: string,
  password: string,
) => `mutation {
  register(registerInput:{username:"${username}", email:"${email}", password:"${password}"})
    { id,
      email,
      username,
      token
    }}`;

export const loginMutation = (email: string, password: string) => {
  return `mutation{
    login(email: "${email}",
    password: "${password}",
    ){
      id,
      email,
      username,
      token,
    }
  }`;
};
