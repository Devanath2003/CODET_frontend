export const validateImage = (file: File): boolean => {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!validTypes.includes(file.type)) {
    throw new Error('Please upload a valid image file (JPG, JPEG, or PNG)');
  }

  if (file.size > maxSize) {
    throw new Error('Image size should be less than 5MB');
  }

  return true;
};