export const useInputValidation = () => {
  const validateEmpty = (value) => value.length > 0;
  const validateWhiteSpaces = (value) => !/\s/.test(value) && value.length > 0;
  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length > 0;
  const validatePasswordLength = (value) => value.length >= 8;
  const validateCapitalLetter = (value) =>
    /[A-Z]/.test(value) && value.length > 0;
  const validateNumber = (value) => /\d/.test(value);
  const validateSpecialCharacter = (value) =>
    /[^\w\s]/.test(value) && value.length > 0;
  const validatePasswordMatch = (value1, value2) =>
    value1 === value2 && value2.length > 0;

  return {
    validateEmpty,
    validateWhiteSpaces,
    validateEmail,
    validatePasswordLength,
    validateCapitalLetter,
    validateNumber,
    validateSpecialCharacter,
    validatePasswordMatch,
  };
};
