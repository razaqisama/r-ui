export function generateUniqueId() {
  const timestamp = new Date().getTime(); // Current time in milliseconds
  const randomPart = Math.random().toString(36).substring(2, 15); // A random string
  return `${timestamp}-${randomPart}`;
}
