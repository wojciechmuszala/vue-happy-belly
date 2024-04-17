export const useInputValidation = () => {
  const validateWhiteSpaces = (value) => !/\s/.test(value);
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const validatePasswordLength = (value) => value.length >= 8;
  const validateCapitalLetter = (value) => /[A-Z]/.test(value);
  const validateSpecialCharacter = (value) => !/[^\w\s]/.test(value);
  const validatePasswordMatch = (value1, value2) => value1 === value2;

  return {
    validateWhiteSpaces,
    validateEmail,
    validatePasswordLength,
    validateCapitalLetter,
    validateSpecialCharacter,
    validatePasswordMatch,
  };
};
