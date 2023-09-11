import React, { Component } from 'react'
import Header_section from "@/features/components/header_section"
import Impact_banner from './components/impact_banner'
import Link from 'next/link'
import Footer from '@/features/components/Footer'
import img10 from '@/app/assets/images/a10.jpg'
import img12 from '@/app/assets/images/a12.jpg'
import img13 from '@/app/assets/images/a13.jpg'
import img14 from '@/app/assets/images/a14.jpg'
import Image from 'next/image'

export default function ImpactPage() {
    return (
        <div>
            <Header_section />
            <Impact_banner />
            <section className="w3l-about-6 py-5" id="about">
                <div className="container py-lg-5 py-md-3">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-5">
                            <h6 className="title-subw3hny">Our Impact to the Society</h6>
                            <h3 className="title-w3l">Ezra BR Agency's Impact Assessment Report</h3>
                            <p className="mt-md-4 mt-3">
                                Ezra BR Agency's Impact Assessment Report outlines the company's significant
                                efforts in promoting sustainable cocoa sourcing in Western Uganda. The report
                                highlights their environmental initiatives, including training smallholder
                                farmers in eco-friendly practices, resulting in reduced soil erosion and
                                enhanced biodiversity. On the social front, Ezra BR's cocoa purchasing program has boosted farmer
                                incomes, alleviated poverty, and empowered women and youth in the cocoa value chain. The company is
                                dedicated to eradicating child labor, implementing a strict policy, and supporting education.
                                Additionally, their robust monitoring and evaluation framework ensures adherence to local and
                                international standards, reflecting Ezra BR's commitment to creating a positive impact on both
                                the environment and the communities it serves.
                            </p>
                            <ul className="service-list pt-lg-2 mt-4">
                                <li className="service-link">
                                    <span className="fa fa-check-circle"></span> Environmental Initiatives
                                </li>
                                <li className="service-link">
                                    <span className="fa fa-check-circle"></span> Social Initiatives

                                </li>
                                <li className="service-link">
                                    <span className="fa fa-check-circle"></span> Addressing Challenges and Risks

                                </li>
                            </ul>
                        </div>
                        <div className="HomeAboutImages col-lg-6 mt-lg-0 mt-5">
                            <div className="row position-relative">
                                <div className="col-6">
                                    <Image src={img10} alt="" className="radius-image img-fluid" />
                                    <Image src={img12} alt="" className="radius-image img-fluid mt-md-3 " />
                                </div>
                                <div className="col-6 mt-4">
                                    <Image src={img13} alt="" className="radius-image img-fluid mb-md-3 mb-2" />
                                    <Image src={img14} alt="" className="radius-image img-fluid mt-md-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-5 m-auto">
                <div className="col-10 content4-right-info ps-lg-5">
                    <h5 className='text-muted my-3'>Environmental Initiatives</h5>
                    <ul class="list-group-flush ms-5">
                        <li>
                            Promotion of Sustainable Farming Practices: Ezra BR promotes sustainable farming practices, including agroforestry and organic farming.
                        </li>
                        <li>
                            Positive Environmental Impact: Training sessions have led to a reduction in soil erosion, improved water quality, and increased biodiversity.
                        </li>
                        <li>
                            Farmer Training and Tree Planting: Approximately 2000 farmers have been trained, resulting in the planting of 1.2 million trees.
                        </li>
                    </ul>

                </div>
                <div className="col-10 content4-right-info ps-lg-5">
                    <h5 className='text-muted my-3'>Social Initiatives</h5>
                    <ul class="list-group-flush ms-5">
                        <li>
                            Cocoa Purchasing Program: Provided stable incomes to smallholder farmers, leading to poverty alleviation and improved living standards.
                        </li>
                        <li>
                            Three-Year Cocoa Sourcing: Over three years, Ezra BR sourced approximately 1900MT of cocoa, resulting in $3 million in farmer incomes.
                        </li>
                        <li>
                            Direct Sourcing: Direct sourcing from 2500 farmers, eliminating middlemen, is expected to increase farmer incomes by approximately $90,000 per year.
                        </li>
                        <li>
                            Access to Financial Services: Provided access to financial services and resources, including loans for school fees, with $3000 given in loan advances over the past two years.
                        </li>
                        <li>
                            Women and Youth Empowerment: Efforts have increased women's participation in the cocoa value chain.
                        </li>
                        <li>
                            Gender Equality: 33% of the management team is female.
                        </li>
                        <li>
                            Youth Employment: 48% of the overall workforce is female, contributing to gender equality and youth employment.
                        </li>
                        <li>
                            Job Creation: Over 1000 new jobs have been created in the company's value chain.
                        </li>
                    </ul>

                </div>
                <div className="col-10 content4-right-info ps-lg-5">
                    <h5 className='text-muted my-3'> Addressing Challenges and Risks</h5>
                    <ul class="list-group-flush ms-5">
                        <li>
                            No-Child-Labor Policy: Ezra BR has a strict no-child-labor policy, conducts regular monitoring, and supports education and alternative income-generating activities for families.
                        </li>
                        <li>
                           "Cocoa for Fees" Project: The "Cocoa for fees" project under Mabere Multipurpose Cooperative in Bundibugyo has significantly reduced child labor instances.
                        </li>
                        <li>
                            Monitoring and Evaluation Framework: The company has a robust monitoring and evaluation framework, including regular assessments, stakeholder consultations, and third-party audits, to ensure compliance with local and international standards.
                        </li>
                    </ul>

                </div>
            </div>
            <Footer/>
        </div>
    )
}