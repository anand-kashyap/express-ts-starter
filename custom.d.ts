declare namespace Express {
  interface Request {
    DB: unknown;
  }
}

/* interface AuthData {
  sheets: {
    [entity: string]: { retriggerUrls: WebhookEvent };
  };
  user: {
    database: string;
    email: string;
    name: string;
  };
} */
