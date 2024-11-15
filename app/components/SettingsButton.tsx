"use client";

import { Fab, FabProps } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import React from "react";

/**
 * Creates the {@link SettingsButton} component.
 * @returns The component.
 */
export default function SettingsButton({ ...props }: FabProps) {
	return (
		<Fab color="primary" size="small" className="transition ease-in-out delay-150 hover:-rotate-90 duration-300" {...props}>
			<SettingsIcon fontSize="large" />
		</Fab>
	);
}
