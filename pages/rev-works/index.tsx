"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import {
	Works,
	Heropresentation,
	Projectspresentation,
	Publication,
} from "@/container";

import { LampDemoCraft } from "@/data/data";

export default function Presentation() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>

			<Curve backgroundColor={"#f1f1f1"}>
				<LampDemoCraft/>

				<Projectspresentation />
				
				<Ready />
				
			</Curve>
		</>
	);
}
