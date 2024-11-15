"use client";

import { RotateRight } from "@mui/icons-material";
import { Box } from "@mui/material";

/**
 * The properties for the {@link Loading} component.
 */
interface Props extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * Whether the spinner is spinning.
	 */
	spinning: boolean;

	/**
	 * The size of the spinner.
	 */
	size?: number;
}

/**
 * Creates a new {@link Loading} component.
 * @param param0 The parameters for the component.
 * @returns The component.
 */
export default function Loading({ spinning, className, size = 30, ...props }: Props): React.JSX.Element {
	const spinAnimation = spinning ? `${className} animate-spin` : "";

	return (
		<Box>
			<div {...props}>
				<RotateRight className={spinAnimation}
					sx={{
						fontSize: `${size}pt`
					}}/>
			</div>
		</Box>
	);
}
