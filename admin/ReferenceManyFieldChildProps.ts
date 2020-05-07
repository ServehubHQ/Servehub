export interface ReferenceManyFieldChildProps<T> {
  basePath?: string
  className?: string
  currentSort?: {
    field: string
    order: 'DESC' | 'ASC'
  }
  ids?: string[]
  loaded?: boolean
  resource?: 'ratings'
  setSort?: () => void
  total?: number
  data?: {
    [key: string]: T
  }
}
