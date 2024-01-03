import crypto from 'crypto';
import {getIsClosedPersonalInfoFrom, getIsClosedPersonalInfoFrom2} from "@/app/api/utils/getFormStatus";


const secret_key = process.env.SECRET_KEY??"";
const secret_iv = process.env.SECRET_IV ??"";
const ecnryption_method = process.env.ENCRYPTION_METHOD ??"";

// Generate secret hash with crypto to use for encryption
const key = crypto
  .createHash('sha512')
  .update(secret_key)
  .digest('hex')
  .substring(0, 32);
const encryptionIV = crypto
  .createHash('sha512')
  .update(secret_iv)
  .digest('hex')
  .substring(0, 16);

// Encrypt data
export function encryptData(rawData:string) {
  const data = "A"+rawData;
  const cipher = crypto.createCipheriv(ecnryption_method, key, encryptionIV);
  return Buffer.from(
    cipher.update(data, 'utf8', 'hex') + cipher.final('hex')
  ).toString('base64'); // Encrypts data and converts to hex and base64
}

// Decrypt data
export function decryptData(encryptedData:string) {
  const buff = Buffer.from(encryptedData, 'base64');
  const decipher = crypto.createDecipheriv(ecnryption_method, key, encryptionIV);
  const email = (
    decipher.update(buff.toString('utf8'), 'hex', 'utf8') +
    decipher.final('utf8')
  );
  if(email[0] === "A" && getIsClosedPersonalInfoFrom()){
    throw new Error("form closed");
  }
  if(email[0] === "B" && getIsClosedPersonalInfoFrom2()){
    throw new Error("form closed");
  }

  return email.substring(1);  // Decrypts data and converts to utf8
}
