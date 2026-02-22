import { AboutSectionHome } from "./Sections/about/AboutSectionHome"
import { FeaturesSectionHome } from "./Sections/features/FeaturesSectionHome"
import { Footer } from "./Sections/footer/Footer"
import { HeroSectionHome } from "./Sections/hero/HeroSectionHome"
import { HowWorkSectionHome } from "./Sections/howWork/HowWorkSectionHome"
import { NavbarHome } from "./Sections/navbar/NavBarHome"
export const HomePage = () => {
  return (
    <>
      <NavbarHome />
      <HeroSectionHome/>
      <AboutSectionHome/>
      <FeaturesSectionHome/>
      <HowWorkSectionHome/>
      <Footer/>
    </>
  )
}
