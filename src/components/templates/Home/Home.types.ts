import { HeaderProps } from "@components/organisms/Header";
import { HeroSectionProps } from "@components/organisms/HeroSection";
import { InfoSectionProps } from "@components/organisms/InfoSection";
import { FeatureSectionProps } from "@components/organisms/FeatureSection";
import { ContactSectionProps } from "@components/organisms/ContactSection";
import { FooterProps } from "@components/organisms/Footer";

export interface HomeProps {
  header: HeaderProps;
  heroSection: HeroSectionProps;
  infoSection: InfoSectionProps;
  featureSection: FeatureSectionProps;
  contactSection: ContactSectionProps;
  footer: FooterProps;
  className?: string;
}
