import styled from "styled-components";
import tw from "twin.macro";

export const LoginContainer = styled.div`
  ${tw`flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8`}
  font-family: system-ui;
  height: 80vh;
`;

export const LoginContent = styled.div`
  ${tw`max-w-md w-full space-y-8`}
`;

export const LoginHeader = styled.div`
  ${tw`flex flex-col items-center`}
  img {
    ${tw`mx-auto h-12`}
  }

  h2 {
    ${tw`mt-6 text-3xl font-extrabold text-gray-900`}
  }

  p {
    ${tw`mt-0 text-sm text-gray-600`}
  }

  a {
    ${tw`font-medium text-indigo-600 hover:text-indigo-500`}
    text-decoration: none;
  }
`;

export const LoginForm = styled.form`
  ${tw`mt-8 space-y-6`}
`;

export const LoginFormInputs = styled.form`
  ${tw`rounded-md shadow-sm -space-y-px`}

  #email {
    ${tw`appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    width: 94%;
  }
  #password {
    ${tw`appearance-none rounded-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm`}
    width: 94%;
  }
`;

export const LoginFormControls = styled.div`
  ${tw`flex items-center justify-between`}
`;

export const LoginFormRemember = styled.div`
  ${tw`flex items-center`}

  input {
    ${tw`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded`}
  }

  label {
    ${tw`ml-2 block text-sm text-gray-900`}
  }
`;

export const LoginFormForgotPass = styled.div`
  ${tw`text-sm`}

  a {
    ${tw`font-medium text-indigo-600 hover:text-indigo-500`}
    text-decoration: none;
  }
`;

export const LoginFormSubmit = styled.div`
  button {
    ${tw`relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
  }
`;
