import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { t as translate } from '@/locales';

const currentLocale = ref(localStorage.getItem('locale') || 'de');

export function useI18n() {
  const router = useRouter();
  const route = useRoute();

  const setLocale = (locale) => {
    currentLocale.value = locale;
    localStorage.setItem('locale', locale);

    const currentPath = route.path;
    const pathWithoutLocale = currentPath.replace(/^\/(de|en)/, '');
    router.push(`/${locale}${pathWithoutLocale || '/'}`);
  };

  const locale = computed(() => route.meta?.locale || currentLocale.value);

  const t = (key, params) => translate(key, locale.value, params);

  return {
    locale,
    setLocale,
    t
  };
}
