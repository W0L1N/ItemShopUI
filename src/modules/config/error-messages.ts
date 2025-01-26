

// @ts-ignore
export const errorMessages = new Map<string, string>(
  [
    ["required", "Pole obowiązkowe"],
    ["minlength", "Pole za krótkie. Musi zawierać min.{requiredLength} znaków"],
    ["maxlength", "Pole za krótkie. Musi zawierać max.{requiredLength} znaków"],
    ["email", "Niepoprawny adres email"]
  ]
)


export function getErrorMessage(key: string, params: { [key: string]: any }): string {
  let message = errorMessages.get(key);
  if (message) {
    Object.keys(params).forEach(paramKey => {
      message = message?.replace(`{${paramKey}}`, params[paramKey]);
    });
  }

  return message || "Niepoprawna wartość";
}
