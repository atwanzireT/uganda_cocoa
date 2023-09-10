import Header_section from "@/features/components/header_section"
import Service_banner from '@/features/components/service_banner'
import Service_block from '@/features/components/service_block'
import Content_Section from '@/features/components/content_section'
import Footer from '@/features/components/Footer'


export default function ServicePage(){
    return(
        <div>
            <Header_section/>
            <Service_banner/>
            <Service_block/>
            <Content_Section/>
            <Footer/>
        </div>
    )
}