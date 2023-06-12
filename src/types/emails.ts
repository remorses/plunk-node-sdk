export interface SendParams {
  to: string;
  subject: string;
  type?: "markdown";
  body: string;
  from?: string;
  name?: string;
  withUnsubscribe?: boolean;
}
