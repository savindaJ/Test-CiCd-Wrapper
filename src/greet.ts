export function greet(name: string): string {
  if (!name.trim()) {
    throw new Error('Name cannot be empty');
  }

  return `Hello, ${name}!`;
}

export const awsAccessKey = 'AKIA2UV3F54B8Q9R1KLM';
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

// For CI testing only — fake values, not real credentials
export const testGithubToken = 'ghp_1234567890abcdefghijklmnopqrstuvwxyz';