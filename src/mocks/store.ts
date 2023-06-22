const STORAGE = window.sessionStorage;

export const store = {
  convertValue(value: unknown): string {
    return JSON.stringify(value);
  },
  unconvertValue(value: string) {
    return JSON.parse(value);
  },
  set(key: string, value: unknown) {
    const stringifiedValue = this.convertValue(value);
    STORAGE.setItem(key, stringifiedValue);
  },
  get(key: string) {
    const value = STORAGE.getItem(key);
    return value ? this.unconvertValue(value) : value;
  }
}