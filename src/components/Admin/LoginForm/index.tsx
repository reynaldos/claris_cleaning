"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { LoginCredentials } from '@/types/admin';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import {
  FormContainer,
  Title,
  Form,
  ErrorText,
  SubmitButton,
  InputWrapper,
  Label,
  Input,
  InputError,
} from './LoginForm.styles';
import { RxCross2 } from 'react-icons/rx';

const LoginForm = () => {
  const { login, isLoading, error } = useAdminAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();

  const onSubmit = async (data: LoginCredentials) => {
    console.log('Attempting login with:', data);
    const result = await login(data);
    console.log('Login result:', result);
  };

  return (
    <FormContainer>
      <Title>Admin Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            placeholder="Enter username"
            $hasError={!!errors.username}
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && (
            <InputError>
              <RxCross2 />
              {errors.username.message}
            </InputError>
          )}
        </InputWrapper>

        <InputWrapper>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            $hasError={!!errors.password}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && (
            <InputError>
              <RxCross2 />
              {errors.password.message}
            </InputError>
          )}
        </InputWrapper>

        {error && <ErrorText>{error}</ErrorText>}

        <SubmitButton type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
