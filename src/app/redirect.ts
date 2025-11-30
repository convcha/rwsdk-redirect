export function redirect(path: string, options?: { flashMessage?: string }) {
  return { redirectTo: path, ...options };
}
