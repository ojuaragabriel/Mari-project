import { put } from "@vercel/blob"
import fs from "fs"
import https from "https"
import path from "path"

async function downloadVideo(url: string, dest: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest)
    https
      .get(url, (response) => {
        response.pipe(file)
        file.on("finish", () => {
          file.close()
          resolve()
        })
      })
      .on("error", (err) => {
        fs.unlink(dest, () => {})
        reject(err)
      })
  })
}

async function uploadVideoToBlob() {
  try {
    console.log("[v0] Iniciando download do vídeo do Google Drive...")

    const videoPath = path.join(process.cwd(), "temp-video.mp4")
    const driveUrl = "https://drive.google.com/uc?export=download&id=1EB8gMUTk3wybFb-DLKAHZt29aB9GvFug"

    // Download do Google Drive
    await downloadVideo(driveUrl, videoPath)
    console.log("[v0] Vídeo baixado com sucesso")

    // Upload para Blob
    const videoBuffer = fs.readFileSync(videoPath)
    console.log("[v0] Fazendo upload para Blob...")

    const response = await put("intro-video.mp4", videoBuffer, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    })

    console.log("[v0] Vídeo enviado com sucesso!")
    console.log("[v0] URL do Blob:", response.url)

    // Limpar arquivo temporário
    fs.unlinkSync(videoPath)
  } catch (error) {
    console.error("[v0] Erro ao fazer upload do vídeo:", error)
    process.exit(1)
  }
}

uploadVideoToBlob()
