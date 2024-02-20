import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import React from 'react'
import { CardContainer } from './ServiceCard.styles';
import Image from 'next/image';
import Button from '../Buttons';

interface CardProps {
  title: string;
  description: string;
  image: StaticImport;
  onClick: ()=> void;
}


const ServiceCard = ({ title, description, image, onClick }: CardProps) => {
  return (
    <CardContainer>
      <Image src={image} alt={title}/>
      <div className='content'>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button onClick={onClick}>Learn More</Button>
      </div>
    </CardContainer>
  );
};

export default ServiceCard