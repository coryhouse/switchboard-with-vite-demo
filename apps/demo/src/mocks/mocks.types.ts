// Base type used for all mock responses
export interface MockResponse<TResponse, TDescription> {
  /** Unique ID for the mock response. */
  id: number;

  /** Unique description for the mock response. */
  description: TDescription;

  /** The mock response */
  response: TResponse;
}
