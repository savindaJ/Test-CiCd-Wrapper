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

export const awsAccessKey = 'AKIAIOSFODNN7EXAMPLE';
export const awsSecretKey = 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY';
export const awsSessionToken = 'session-token';
export const awsRegion = 'us-east-1';
export const awsBucketName = 'my-bucket';
export const awsObjectKey = 'my-object';
export const awsObjectContent = 'my-object-content';
export const awsObjectContentType = 'text/plain';
export const awsObjectContentLength = 123;
export const awsObjectContentEncoding = 'utf-8';
export const awsObjectContentDisposition = 'inline';
export const awsObjectContentLanguage = 'en-US';