export interface AgreementClient {
  id: string;
  name: string;
  age: string;
  dateOfBirth: string;
  address: string;
  phone: string;
  email: string;
  agentName: string;
  utr: string;
  netPremium: string;
  gst: string;
  grossPremium: string;
}

export type AgreementClientLoadState = "loading" | "ready" | "unavailable";
