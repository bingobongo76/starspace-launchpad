import NebulaBackground from '@/components/NebulaBackground';
import StarField from '@/components/StarField';
import ShootingStars from '@/components/ShootingStars';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyStarspaceSection from '@/components/WhyStarspaceSection';
import CommunitySection from '@/components/CommunitySection';
import TeamFormationSection from '@/components/TeamFormationSection';
import RewardsSection from '@/components/RewardsSection';
import SocialProofSection from '@/components/SocialProofSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Animated nebula background */}
      <NebulaBackground />
      
      {/* Animated star background */}
      <StarField />

      {/* Purple shooting stars */}
      <ShootingStars />

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <HowItWorksSection />
        <WhyStarspaceSection />
        <CommunitySection />
        <TeamFormationSection />
        <RewardsSection />
        <SocialProofSection />
        <FinalCTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
