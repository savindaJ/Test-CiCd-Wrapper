export function greet(name: string): string {
  if (!name.trim()) {
    throw new Error('Name cannot be empty');
  }

  return `Hello, ${name}!`;
}

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