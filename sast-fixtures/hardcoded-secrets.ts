/**
 * INTENTIONAL SAST TEST FIXTURE
 * Fake credentials to verify Semgrep sensitive-data detection in CI.
 * Uses push-safe patterns (no Stripe/AWS key formats).
 */

export const demoPassword = 'HardcodedPassword_ForSastTestOnly_123';

export const apiKey = 'hardcoded_api_key_for_semgrep_sast_demo_not_real';

export const demoDatabaseUrl =
  'postgresql://admin:FakeDbPassword_SastTest@localhost:5432/testdb';

export const demoJwtSecret = 'hardcoded-jwt-signing-secret-sast-demo-only';

export const oauthClientSecret = 'oauth_client_secret_hardcoded_for_testing';
