import { User } from '@supabase/supabase-js';

export function randomizeArray<T>(array: Array<T>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function notLoggedInRedirect(href: string, user: User | null): string {
  if (user) {
    return href;
  }

  return '';
}
