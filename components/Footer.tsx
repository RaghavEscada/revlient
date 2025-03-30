import Link from "next/link";
import Image from "next/image";
import { logo } from "@/public";
import { LinkHover, TextMask } from "@/animation";
import { footerItems, footernavbarItems } from "@/constants";
import { TextHoverEffectDemo } from "@/data/data";


export default function Footer() {
	const phrase = ["*", "Social Content", "EXPERTS."];
	const phrase1 = ["#bombin'", ""];
	return (
		<footer className="w-full min-h-screen padding-x z-30 relative pt-[40px] bg-black flex flex-col justify-between rounded-t-[20px] mt-[-20px]">
			<div className="w-full flex justify-between sm:flex-col xm:flex-col">
				<div className="flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-white uppercase">
						<TextMask>{phrase}</TextMask>
					</h1>
				</div>
				<div className="h-full flex flex-col justify-between sm:w-full xm:w-full w-1/2">
					<div>
						<h1 className="text-[150px] leading-[115px] lg:text-[130px] lg:leading-[98px] md:text-[100px] md:leading-[75px] sm:text-[74px] sm:leading-[68px] xm:text-[64px] xm:leading-[48px] font-semibold font-FoundersGrotesk text-red-700 uppercase">
							<TextMask>{phrase1}</TextMask>
						</h1>
						<div className="pt-[50px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-white pb-[20px]">
								Socials:
							</h1>
							{footerItems.map((item) => (
								<LinkHover
									title={item.title}
									href={item.href}
									key={item.id}
									className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
								/>
							))}
						</div>
						<div className="flex justify-between">
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-white pb-[20px]">
									Studio:
								</h1>
								<div className="flex flex-col gap-y-[10px]">
									<LinkHover
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`No.01, 3rd Street,`}
										href="https://www.google.com/maps/search/No.01,+3rd+Street,+Gurusamy+Nagar,+Anakaputhur,+Chennai+600070+in+gmp/@12.9701158,80.1287911,15z?entry=s&sa="
									/>
									<LinkHover
										className="before:h-[1px] text-white  after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title={`Gurusamy Nagar,`}
										href="https://www.google.com/maps/search/No.01,+3rd+Street,+Gurusamy+Nagar,+Anakaputhur,+Chennai+600070+in+gmp/@12.9701158,80.1287911,15z?entry=s&sa="
									/>
									<LinkHover
										className="before:h-[1px] text-white after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="Anakaputhur,"
										href="https://www.google.com/maps/search/No.01,+3rd+Street,+Gurusamy+Nagar,+Anakaputhur,+Chennai+600070+in+gmp/@12.9701158,80.1287911,15z?entry=s&sa="
									/>
									<LinkHover
										className="before:h-[1px] text-white  after:h-[1px] w-fit paragraph font-medium  capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
										title="Chennai-600070."
										href="https://www.google.com/maps/search/No.01,+3rd+Street,+Gurusamy+Nagar,+Anakaputhur,+Chennai+600070+in+gmp/@12.9701158,80.1287911,15z?entry=s&sa=X"
									/>
								</div>
							</div>
							<div className="pt-[50px]">
								<h1 className="paragraph font-medium font-NeueMontreal text-white pb-[20px]">
									Move:
								</h1>
								{footernavbarItems.map((item) => (
									<LinkHover
										key={item.id}
										title={item.title}
										href={item.href}
										className="before:h-[1px] after:h-[1px] w-fit paragraph font-medium text-white capitalize flex flex-col before:bottom-[1px] after:bottom-[1px]"
									/>
								))}
							</div>
						</div>


						<div className="pt-[50px] flex gap-x-[20px]">
							<h1 className="paragraph font-medium font-NeueMontreal text-white">
								Contact Number :
								<a
									href="https://wa.me/919789985132?text=Dear%20Nuke%20Marketing%20Team%2C%20I%20hope%20you%20are%20doing%20well.%20I%20am%20interested%20in%20learning%20more%20about%20your%20services%20and%20ongoing%20projects.%20Could%20you%20please%20provide%20more%20details%20or%20let%20me%20know%20a%20suitable%20time%20to%20discuss%20further%3F%20Looking%20forward%20to%20your%20response.%20Best%20regards%2C%20Client"
									target="_blank"
									rel="noopener noreferrer"
									className="text-green-600 font-bold underline"
								>
									+91 97899 85132
								</a>
							</h1>

							<h1 className="paragraph font-medium font-NeueMontreal text-white">
								Email ID:
							</h1>
							<LinkHover
								title="nukemarketing7@gmail.com"
								href="nukemarketing7@gmail.com"
								className="before:h-[1px] after:h-[1px] paragraph font-medium before:bottom-[-3px] after:bottom-[-3px]"
							/>


						</div>

						<div className="pt-[50px] flex gap-x-[20px]">

						</div>
					</div>
				</div>
			</div>
			<div className="w-full pt-[40px] pb-[30px] flex justify-between sm:flex-col xm:flex-col sm:gap-[20px] xm:gap-[20px]">
				<div className="w-1/2 sm:w-full xm:w-full">
					<Link href={"/"}>
						<Image
							src="/nukename2.png"
							alt="nuke logo"
							width={250}
							height={250}
						/>
					</Link>
				</div>

				<div className="w-1/2 h-full flex gap-[10px] justify-between items-end sm:w-full xm:w-full sm:flex-col xm:flex-col sm:items-start xm:items-start">
					<div className="flex sm:flex-col xm:flex-col gap-[10px]">
						<h1 className="paragraph font-medium font-NeueMontreal text-white opacity-40">
							© Nuke Marketing 2025.
						</h1>
						<LinkHover
							title="Legal Terms"
							href="https://legislative.gov.in/legal-glossary/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-white opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>
					</div>
					<div>

						<LinkHover
							title="Website by Raghav"
							href="https://raghavkrishnaportfolio.vercel.app/"
							className="before:h-[1px] after:h-[1px] paragraph font-medium text-white opacity-40 before:bottom-[-3px] after:bottom-[-3px]"
						/>



					</div>
				</div>

			</div>
			<div className="w-full bottom-10 left-0 z-50 bg-black">
				<TextHoverEffectDemo />
			</div>
		</footer>
	);
}
