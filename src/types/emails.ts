export interface SendParams {
  to: string | string[];
  subject: string;
  type?: "markdown";
  body: string;
  type?: 'html' | 'markdown';
  from?: string;
  name?: string;
  withUnsubscribe?: boolean;
}
