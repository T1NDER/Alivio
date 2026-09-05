import WorksSection from "@componentsSections/WorksSection/WorksSection";
import SuccessStorySection from "@componentsSections/SuccessStory/SuccessStory";
import DescriptionSection from "@componentsSections/DescriptionSection/DescriptionSection";

export default function Main() {
    return (
        <main className="main">
            <WorksSection/>
            <SuccessStorySection/>
            <DescriptionSection/>
        </main>
    );
}