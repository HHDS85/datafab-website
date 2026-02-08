import de from './de';
import en from './en';

const messages = { de, en };

export function t(key, locale = 'de', params = {}) {
  const keys = key.split('.');
  let value = messages[locale];

  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }

  if (typeof value === 'string') {
    return value.replace(/\{\{(\w+)\}\}/g, (match, param) => params[param] || match);
  }

  return value || key;
}

export { de, en };
export default messages;
