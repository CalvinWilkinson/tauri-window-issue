"use client";

import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import { Box, Stack } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
	const queryClient = new QueryClient();

	return (
		<html lang="en" className={[inter.className].join(" ")}>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<body className={["flex flex-col", "min-h-screen", "bg-gray-dark"].join(" ")}>
					<QueryClientProvider client={queryClient}>
						<Stack className="bg-gradient-to-b from-[#040B16] to-[#181818]" direction="column" height={"100vh"}>
							<Box flexGrow={1} display="flex" justifyContent="center" alignItems="center">
								{children}
							</Box>

						</Stack>
					</QueryClientProvider>
				</body>
			</ThemeProvider>
		</html >
	);
};

export default RootLayout;
