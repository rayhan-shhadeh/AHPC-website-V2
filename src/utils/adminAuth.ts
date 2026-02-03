const STORAGE_KEY = 'ahpc_admin_logged_in';

export function isAdminLoggedIn() {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'true';
}

export function setAdminLoggedIn(value: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, value ? 'true' : 'false');
}
