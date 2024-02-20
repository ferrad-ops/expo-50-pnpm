import { type RegisterOptions } from "react-hook-form";

// const EMAIL_REGEX_PATTERN = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export const Validations: Record<string, RegisterOptions> = {
  emailAddress: {
    required: { value: true, message: "Entrer le numéro de téléphone" },
    // pattern: {
    //   value: EMAIL_REGEX_PATTERN,
    //   message: 'Doit être un numéro de téléphone',
    // },
  },
  oneTimeCode: {
    required: { value: true, message: "Entrez votre code à usage unique" },
    pattern: {
      value: /^\d{6}$/,
      message: "Le code à usage unique est un numéro à 6 chiffres",
    },
  },
};
