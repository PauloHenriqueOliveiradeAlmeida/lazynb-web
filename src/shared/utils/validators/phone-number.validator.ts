export const isValidPhoneNumber = (phoneNumber: string) =>
	/^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/.test(phoneNumber);
