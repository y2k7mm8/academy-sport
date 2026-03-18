/**
 * Form Validation Utilities
 */

export const validators = {
  required: (value: string) => {
    return value.trim().length > 0;
  },

  email: (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },

  phone: (value: string) => {
    // Accepts formats like +996 XXX XX XX XX or +996XXXXXXXXX
    const phoneRegex = /^\+996\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}$/;
    return phoneRegex.test(value.replace(/\s/g, ''));
  },

  minLength: (min: number) => (value: string) => {
    return value.length >= min;
  },

  maxLength: (max: number) => (value: string) => {
    return value.length <= max;
  },
};

export type ValidationRule = {
  validate: (value: string) => boolean;
  message: string;
};

export type ValidationRules = Record<string, ValidationRule[]>;

export function validateForm(
  values: Record<string, string>,
  rules: ValidationRules
): Record<string, string> {
  const errors: Record<string, string> = {};

  Object.keys(rules).forEach((field) => {
    const fieldRules = rules[field];
    const value = values[field] || '';

    for (const rule of fieldRules) {
      if (!rule.validate(value)) {
        errors[field] = rule.message;
        break; // Stop at first error for this field
      }
    }
  });

  return errors;
}
