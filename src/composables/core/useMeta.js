import { watch, onMounted } from 'vue';
import { useI18n } from './useI18n';

export function useMeta(metaKey) {
  const { t } = useI18n();

  const updateMeta = () => {
    const title = t(`meta.${metaKey}.title`);
    const description = t(`meta.${metaKey}.description`);

    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = title;

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.content = description;
  };

  onMounted(updateMeta);

  watch(() => t(`meta.${metaKey}.title`), updateMeta);

  return {
    updateMeta
  };
}
