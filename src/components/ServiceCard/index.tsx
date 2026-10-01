import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react'
import { CardContainer } from './ServiceCard.styles';
import Image from 'next/image';

interface CardProps {
  title: string;
  description: string;
  image: StaticImport;
}


const ServiceCard = ({ title, description, image }: CardProps) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </CardContainer>
  );
};

export default ServiceCard