declare global {
  interface Window {
    __WB_MANIFEST: any
    gtag: (...props: any[]) => void
  }
}

export {}
