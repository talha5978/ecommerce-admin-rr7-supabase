import sharp from "sharp";
import { ApiError } from "./ApiError";

export const compressImage = async (file: File) => {
	if (!file) {
		throw new ApiError("No file provided", 400, []);
	}

	const buffer = await file.arrayBuffer();

	// Compress and convert to WebP
	try {
		const compressedBuffer = await sharp(Buffer.from(buffer))
			.resize({ width: 1024, height: 1024, fit: "inside" }) // Max 1024px
			.webp({ quality: 90 }) // 90% quality
			.toBuffer();
		
		return compressedBuffer;
	} catch (error) {
		throw new ApiError(`Failed to compress image: ${error}`, 500, []);
	}
    
    // console.log("Original size:", buffer.byteLength / 1024, "KB");
    // console.log("Compressed size:", compressedBuffer.length / 1024, "KB");

    // Test
    // 74kb -> 13kb
}