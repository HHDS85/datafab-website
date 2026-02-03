import { ref, reactive, computed } from 'vue';

export function useFormValidation(initialValues = {}, validationRules = {}) {
  const formData = reactive({ ...initialValues });
  const errors = reactive({});
  const touched = reactive({});
  const isSubmitting = ref(false);
  const isSubmitted = ref(false);

  const isValid = computed(() => {
    return Object.keys(validationRules).every(field => {
      return !validateField(field);
    });
  });

  const validateField = (fieldName) => {
    const rules = validationRules[fieldName];
    if (!rules) return null;

    const rulesArray = Array.isArray(rules) ? rules : [rules];
    for (const rule of rulesArray) {
      const result = rule(formData[fieldName]);
      if (result !== true) {
        return result;
      }
    }
    return null;
  };

  const validate = () => {
    let hasErrors = false;
    Object.keys(validationRules).forEach(field => {
      const error = validateField(field);
      if (error) {
        errors[field] = error;
        hasErrors = true;
      } else {
        delete errors[field];
      }
    });
    return !hasErrors;
  };

  const touch = (fieldName) => {
    touched[fieldName] = true;
    const error = validateField(fieldName);
    if (error) {
      errors[fieldName] = error;
    } else {
      delete errors[fieldName];
    }
  };

  const reset = () => {
    Object.keys(formData).forEach(key => {
      formData[key] = initialValues[key];
      delete errors[key];
      delete touched[key];
    });
    isSubmitting.value = false;
    isSubmitted.value = false;
  };

  const handleSubmit = async (submitFn) => {
    isSubmitting.value = true;

    if (!validate()) {
      isSubmitting.value = false;
      return;
    }

    try {
      await submitFn(formData);
      isSubmitted.value = true;
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      isSubmitting.value = false;
    }
  };

  return {
    formData,
    errors,
    touched,
    isValid,
    isSubmitting,
    isSubmitted,
    validateField,
    validate,
    touch,
    reset,
    handleSubmit
  };
}
