import { HeaderProps } from "@components/organisms/Header";
import { FeatureSectionProps } from "@components/organisms/FeatureSection";
import { FooterProps } from "@components/organisms/Footer";

export interface PortfolioProps {
  header: HeaderProps;
  featureSection: FeatureSectionProps;
  footer: FooterProps;
  className?: string;
}
