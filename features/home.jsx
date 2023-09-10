import Header_section from "@/features/components/header_section"
import BannerSection from '@/features/components/BannerSection'
import AboutSection from '@/features/components/AboutSection'
import OfferingsSection from '@/features/components/OfferingsSection'
import VideoSection from '@/features/components/VideoSection'
import WhyUsSection from '@/features/components/WhyUsSection'
import Footer from '@/features/components/Footer'


export default function Home(){
    return(
        <div>
            <Header_section/>
            <BannerSection/>
            <AboutSection/>
            <OfferingsSection/>
            <VideoSection/>
            <WhyUsSection/>
            <Footer/>
        </div>
    )
}