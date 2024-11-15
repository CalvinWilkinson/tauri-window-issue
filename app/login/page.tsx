"use client";

import SettingsButton from "@/components/SettingsButton";
import { Button, Card, CardContent, Checkbox, Stack, TextField, Typography } from "@mui/material";
import PassField from "@/components/PassField";

/**
 * Creates a login component.
 * @returns The login component.
 */
export default function Login() {
	return (
		<Card className="rounded-md border-2 border-gray-700" elevation={6}>
			<CardContent>
				<Stack className="m-5" direction="column" spacing={2}>
					<Typography variant="h4" className="place-self-center">
						Sign In
					</Typography>

					<form className="space-y-4">
						<Stack direction="column" spacing={2}>
							{/* LOGIN/USER NAME */}
							<TextField label="Email" id="email" name="email" type="email"
								spellCheck={false}
								autoFocus
								placeholder="name@company.com" required>
							</TextField>

							{/* PASSWORD */}
							<PassField id="password" name="password" label="Password" required
								autoComplete="new-password"
								autoCorrect="off"
								autoCapitalize="off"
								data-form-type="other"
								spellCheck={false}/>
						</Stack>

						{/* CHECK BOX */}
						<Stack direction="row" alignItems="center">
							<Checkbox size="large"></Checkbox>
							<Typography color="Gainsboro">Remember Me</Typography>
						</Stack>

						<Stack direction="row" spacing={2}>
							{/* SIGN IN BUTTON */}
							<Button className="min-w-56 min-h-10" variant="contained" type="submit">
								<Stack direction="row" alignItems="center" spacing={2}>
									<Typography>Sign In</Typography>
								</Stack>
							</Button>

							{/* SETTINGS BUTTON */}
							<SettingsButton />
						</Stack>
					</form>
				</Stack>
			</CardContent>
		</Card>
	);
}
