import type { ClerkAPIError } from "@clerk/types";

export interface APIResponseError {
  errors: ClerkAPIError[];
}

export function parseError(err: APIResponseError): string {
  if (err.errors.length < 0) {
    return "";
  }

  return err.errors[0]?.longMessage ?? "";
}
