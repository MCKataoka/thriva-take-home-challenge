import React  from 'react';
import {
    Copyright,
    FooterContainer,
    FooterContent,
    FooterLink,
} from "../atoms/components.tsx";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <Copyright>
                    Test done by <FooterLink href='https://www.linkedin.com/in/mario-kataoka-908637112/' target='_blank'>Mario Kataoka</FooterLink>
                </Copyright>
            </FooterContent>
        </FooterContainer>
    );
};



export default Footer;