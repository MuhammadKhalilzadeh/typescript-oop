function feedbackToString(accepted: boolean, message: string) {
  return {
    accepted,
    message,
  };
}

export function checkStringValidation(
  title: string,
  value: string,
  minLength: number = 0,
  maxLength: number = 128,
  hasUpperCase?: boolean,
  hasLowerCase?: boolean,
  hasNumber?: boolean,
  hasSpecialCharacter?: boolean,
  type?: string
): { accepted: boolean; message: string } {
  if (
    (value === undefined ||
      value === null ||
      value.length === 0 ||
      value === "" ||
      value === " ") &&
    minLength > 0
  ) {
    return feedbackToString(false, `${title} is required.`);
  }

  if (value.length > 0 && type !== "password" && value.trim() === "") {
    return feedbackToString(false, `${title} cannot be an empty string.`);
  }

  if (value.length < minLength) {
    return feedbackToString(
      false,
      `${title} can't be shorter than ${minLength} characters.`
    );
  }

  if (value.length > maxLength) {
    return feedbackToString(
      false,
      `${title} can't be longer than ${maxLength} characters.`
    );
  }

  if (hasUpperCase && !/[A-Z]/.test(value)) {
    return feedbackToString(
      false,
      `${title} must contain at least one uppercase letter.`
    );
  }

  if (hasLowerCase && !/[a-z]/.test(value)) {
    return feedbackToString(
      false,
      `${title} must contain at least one lowercase letter.`
    );
  }

  if (hasNumber && !/[0-9]/.test(value)) {
    return feedbackToString(
      false,
      `${title} must contain at least one number.`
    );
  }

  if (
    hasSpecialCharacter &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value)
  ) {
    return feedbackToString(
      false,
      `${title} must contain at least one special character.`
    );
  }

  return feedbackToString(true, "Success");
}
