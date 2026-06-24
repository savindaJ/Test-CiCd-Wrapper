import { greet } from './greet';

const name = process.env.APP_NAME ?? 'CI/CD Wrapper Test App';

console.log(greet(name));
