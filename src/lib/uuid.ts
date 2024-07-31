export const uuid = (n: number = 8) => "x".repeat(n)
    .replace(/./g, c => "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * 52)]);