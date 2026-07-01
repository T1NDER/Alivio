import HowItWorksData from '@components/section/HotItWorksSection/HotItWorksSection';
import HeroSection from '@components/section/HeroSection/HeroSection';
import DescriptionProductSection from '@components/section/DescriptionProductSection/DescriptionProductSection';

export default function Main() {
    return (
        <main>
            <HowItWorksData/>
            <HeroSection/>
            <DescriptionProductSection/>
        </main>
    );
}