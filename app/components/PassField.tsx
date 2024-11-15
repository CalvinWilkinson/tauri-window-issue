"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, TextField, TextFieldProps } from "@mui/material";
import React, { useState } from "react";

/**
 * Creates a password field component.
 * @param param0 The props for the password field.
 * @returns The password field component.
 */
export default function PassField({ ...rest }: TextFieldProps): React.JSX.Element {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [inputType, setInputType] = useState<string>("password");

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
		setInputType(showPassword ? "password" : "text");
	};
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const handleContextMenu = (event: React.MouseEvent<HTMLInputElement>) => {
		if (event.button === 2) {
			event.preventDefault();
		}
	};

	return (
		<TextField className="default-adornment-disabled" placeholder="••••••••" type={inputType}
			autoComplete="off" {...rest}
			onContextMenu={handleContextMenu}
			slotProps={{
				input: {
					endAdornment: <IconButton
						aria-label="toggle password visibility"
						onClick={handleClickShowPassword}
						onMouseDown={handleMouseDownPassword}
						edge="end">
						{showPassword ? <Visibility /> : <VisibilityOff />}
					</IconButton>
				}
			}} />
	);
}
