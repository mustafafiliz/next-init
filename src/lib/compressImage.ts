export const compressImage = (file: File, maxWidth: number, maxHeight: number, quality: number): Promise<File> => {
  return new Promise((resolve, reject) => {
    const _file = file as File;
    const img = new Image();
    img.src = URL.createObjectURL(_file);

    img.onload = function () {
      let width = img.width;
      let height = img.height;

      if (width > maxWidth || height > maxHeight) {
        if (width > height) {
          height *= maxWidth / width;
          width = maxWidth;
        } else {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error('Sıkıştırılmış dosya oluşturulamadı.'));
            return;
          }

          const compressedFile = new File([blob], _file.name, {
            type: _file.type,
            lastModified: Date.now(),
          });

          resolve(compressedFile);
        },
        _file.type,
        quality,
      );
    };

    img.onerror = function () {
      reject(new Error('Resim yüklenirken bir hata oluştu.'));
    };
  });
};

export async function compressImages(files: File[], maxWidth: number, maxHeight: number, quality: number): Promise<File[]> {
  const compressedFiles: File[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const compressedFile = await compressImage(file, maxWidth, maxHeight, quality);
    compressedFiles.push(compressedFile);
  }

  return compressedFiles;
}
