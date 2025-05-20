import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ResultStatus } from "../../@types/interfaces.ts";
import { colors } from "../../styles/colors.ts";

// Color palette


// Main container with theme styles
export const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.background.page};
`;

// Navigation bar
export const NavBar = styled.nav`
  background-color: ${colors.background.card};
  border-bottom: 1px solid ${colors.border.light};
  padding: 1rem;
  margin-bottom: 2rem;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem;
  margin: 0 auto;
`;

export const BrandLogo = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
  color: ${colors.brand.primary};
`;

// Main content area
export const MainContent = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Header section
export const HeaderContainer = styled.header`
  margin-bottom: 2rem;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${colors.text.primary};
  margin: 0;
`;

export const PageDescription = styled.p`
  margin-top: 0.25rem;
  color: ${colors.text.secondary};
  font-size: 1rem;
`;

export const ResultsCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.text.secondary};
`;

export const SortControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const SortLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.text.secondary};
`;

export const SortButtonGroup = styled.div`
  display: flex;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 ${colors.shadow.sm};
`;

interface SortButtonProps {
    isActive: boolean;
    isFirst?: boolean;
    isLast?: boolean;
}

export const SortButton = styled.button<SortButtonProps>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${colors.border.default};
  background-color: ${props =>
          props.isActive ? colors.brand.primary : colors.background.card};
  color: ${props =>
          props.isActive ? colors.background.card : colors.text.primary};
  cursor: pointer;

  ${props => props.isFirst && `
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius: 0.375rem;
  `}

  ${props => props.isLast && `
    border-top-right-radius: 0.375rem;
    border-bottom-right-radius: 0.375rem;
  `}

  &:not(:first-of-type) {
    border-left: none;
  }

  &:hover:not(:disabled) {
    background-color: ${props =>
            props.isActive ? colors.brand.primaryDark : colors.ui.hover};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const FooterContainer = styled.footer`
  padding: 1.5rem 1rem;
  border-top: 1px solid ${colors.border.light};
  margin-top: 3rem;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 64rem;
  margin: 0 auto;
  flex-direction: row;
`;

export const Copyright = styled.div`
  font-size: 0.75rem;
  color: ${colors.text.secondary};
`;

export const FooterLink = styled.a`
  font-size: 0.75rem;
  color: ${colors.text.secondary};
  text-decoration: none;

  &:hover {
    color: ${colors.brand.primary};
  }
`;

export const StateContainer = styled.div`
  display: flex;
  height: 16rem;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.text.secondary};
`;

export const ErrorText = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.status.danger.dark};
`;

// RESULT CARD STYLING
interface CardContainerProps {
    status: ResultStatus;
    hasStatusChanged: boolean;
}
export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${({ status }) => {
    switch (status) {
      case ResultStatus.HIGH:
        return colors.background.high;
      case ResultStatus.LOW:
        return colors.background.low;
      default:
        return colors.background.normal;
    }
  }};
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid ${colors.border.muted};

  &:hover {
    box-shadow: 0 4px 6px -1px ${colors.shadow.md}, 0 2px 4px -1px ${colors.shadow.sm2};
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ResultName = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${colors.text.primary};
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.25rem;
`;

export const StatusChangeBadge = styled.div`
  margin-right: 0.5rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  background-color: ${colors.status.warning.light};
  color: ${colors.status.warning.dark};
  font-size: 0.75rem;
  font-weight: 500;
`;

export const PreviousValue = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${colors.text.secondary};
`;

export const ValueSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ValueDisplay = styled.div`
  text-align: right;
`;

export const Value = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${colors.text.primary};
`;

export const Unit = styled.span`
  margin-left: 0.25rem;
  font-size: 0.875rem;
  color: ${colors.text.secondary};
`;

interface StatusChipProps {
    status: ResultStatus;
}
export const StatusChip = styled.div<StatusChipProps>`
  border-radius: 9999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  ${({ status }) => {
    switch (status) {
      case ResultStatus.HIGH:
        return css`
          background-color: ${colors.status.danger.light};
          color: ${colors.status.danger.dark};
        `;
      case ResultStatus.LOW:
        return css`
          background-color: ${colors.status.info.light};
          color: ${colors.status.info.dark};
        `;
      default:
        return css`
          background-color: ${colors.status.success.light};
          color: ${colors.status.success.dark};
        `;
    }
  }}
`;

export const NormalRange = styled.div`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: ${colors.text.secondary};
`;