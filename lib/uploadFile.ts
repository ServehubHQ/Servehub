import nhost from 'nhost-js-sdk'
import { config } from './config'
import { getAuthClient } from './getAuthClient'

let storageGlobal: any

function getStorage() {
  if (typeof window === 'undefined') return

  if (!storageGlobal) {
    const authClient = getAuthClient()
    nhost.initializeApp({ endpoint: config.nhostBackendUrl })
    storageGlobal = nhost.storage()

    // a needed hack, since we're not using their auth lib
    storageGlobal.inMemory.jwt_token = authClient.getToken()
  }

  return storageGlobal
}

export async function uploadFile(
  file: File,
  path: string,
  title?: string,
): Promise<string> {
  if (typeof window === 'undefined') {
    throw new Error('attempt to upload a file from the server')
  }

  const rando = (Math.random() + 1).toString(36).substring(7)
  const extension = file.name.split('.').pop()
  const filename =
    title
      ?.replace(' ', '-')
      .replace(/[^\w\d-_]/g, '')
      .toLocaleLowerCase() || 'document'

  const { key, token } = await getStorage().put(
    `${path}/${rando}-${filename}.${extension}`,
    file,
    {},
  )
  return `${config.nhostBackendUrl}/storage/file/${key}?token=${token}`
}
