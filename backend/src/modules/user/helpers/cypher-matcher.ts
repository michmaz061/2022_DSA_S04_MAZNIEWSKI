import * as crypto from 'crypto';

export const matchCypheredText = (text: string, cipheredText: string): boolean => {
  return cipheredText === crypto.createHmac('SHA256', text).digest('hex');
};
