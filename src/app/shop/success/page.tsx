"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Button from '@/components/Buttons';
import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';
import { PAGE_ROUTE } from '@/constants/info';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();

  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <Container>
      <Content>
        <IconWrapper>
          <FaCheckCircle size={80} color="#88cb01" />
        </IconWrapper>
        <Title>Order Confirmed!</Title>
        <Message>
          Thank you for your purchase! You will receive an email confirmation shortly
          with your order details and shipping information.
        </Message>
        <ButtonGroup>
          <Link href={PAGE_ROUTE.SHOP}>
            <Button>Continue Shopping</Button>
          </Link>
          <Link href={PAGE_ROUTE.HOME}>
            <BackLink>Back to Home</BackLink>
          </Link>
        </ButtonGroup>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 72px 32px;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    padding: 42px 16px;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const IconWrapper = styled.div`
  margin-bottom: 8px;
`;

const Title = styled.h1`
  font-size: 2.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey900};
  margin: 0;

  @media screen and (max-width: ${({ theme }) => theme.bpts.md}) {
    font-size: 2rem;
  }
`;

const Message = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.grey700};
  margin: 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
`;

const BackLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
