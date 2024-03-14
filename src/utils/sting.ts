export const formatPhoneNumber = (input: string) => {
  // remove alphebet and whitespace
  let phoneNumber = input.replace(/\D/g, ""); // Remove non-numeric characters
  if (phoneNumber.length > 10) {
    phoneNumber = phoneNumber.substring(0, 10); // Ensure the phone number doesn't exceed 10 digits
  }

  let formattedPhoneNumber = "";
  for (let i = 0; i < phoneNumber.length; i++) {
    if (i === 0) {
      formattedPhoneNumber += "(";
    } else if (i === 3) {
      formattedPhoneNumber += ") ";
    } else if (i === 6) {
      formattedPhoneNumber += " - ";
    }
    formattedPhoneNumber += phoneNumber[i];
  }

  return formattedPhoneNumber;
};
