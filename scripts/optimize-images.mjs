import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import fg from 'fast-glob'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const imagesDir = path.resolve(__dirname, '..', 'docs', 'public', 'images')

async function optimizeImage(filePath) {
	const ext = path.extname(filePath).toLowerCase()
	const input = sharp(filePath)
	try {
		if (ext === '.png') {
			await input.png({ quality: 80, compressionLevel: 9, palette: true }).toFile(filePath + '.tmp')
		} else if (ext === '.jpg' || ext === '.jpeg') {
			await input.jpeg({ quality: 80, mozjpeg: true }).toFile(filePath + '.tmp')
		} else if (ext === '.webp') {
			await input.webp({ quality: 80 }).toFile(filePath + '.tmp')
		} else {
			return false
		}
		await fs.promises.rename(filePath + '.tmp', filePath)
		return true
	} catch (e) {
		try { await fs.promises.unlink(filePath + '.tmp') } catch (_) {}
		console.error('Optimize failed:', filePath, e.message)
		return false
	}
}

async function main() {
	if (!fs.existsSync(imagesDir)) {
		console.log('No images directory found at', imagesDir)
		return
	}
	const patterns = ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.webp']
	const files = await fg(patterns, { cwd: imagesDir, absolute: true })
	if (files.length === 0) {
		console.log('No images to optimize')
		return
	}
	console.log(`Optimizing ${files.length} images...`)
	let optimized = 0
	for (const file of files) {
		const ok = await optimizeImage(file)
		if (ok) optimized += 1
	}
	console.log(`Optimized ${optimized}/${files.length} images.`)
}

main().catch((e) => {
	console.error(e)
	process.exit(1)
})
