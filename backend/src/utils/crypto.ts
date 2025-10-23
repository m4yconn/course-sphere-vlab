import crypto from "crypto"

export function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(stored: string, passwordAttempt: string) {
  const [salt, key] = stored.split(":");
  const hashAttempt = crypto.scryptSync(passwordAttempt, salt, 64).toString("hex");
  return hashAttempt === key;
}