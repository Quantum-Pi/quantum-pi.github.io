// place files you want to import through the `$lib` alias in this folder.

import type { Picture } from 'vite-imagetools';

const isEnhancedImage = (x: unknown): x is Picture => {
	const img = x as Picture;
	return (
		img?.img?.src != undefined &&
		img.img.h != undefined &&
		img.img.w != undefined &&
		img.sources != undefined
	);
};

export { isEnhancedImage };
