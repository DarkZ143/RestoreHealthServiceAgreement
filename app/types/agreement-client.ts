export interface AgreementClient {
  id: string;
  name: string;
  age: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  agentName: string;
}

export type AgreementClientLoadState = "loading" | "ready" | "unavailable";
