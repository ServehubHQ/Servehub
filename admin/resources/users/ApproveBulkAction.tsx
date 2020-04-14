import {
  useUpdateMany,
  Button,
  useRefresh,
  useNotify,
  useUnselectAll,
} from 'react-admin'

interface ApproveBulkActionProps {
  resource?: string
  selectedIds?: string[]
}

export function ApproveBulkAction({
  selectedIds = [],
  resource = 'users',
}: ApproveBulkActionProps) {
  const refresh = useRefresh()
  const notify = useNotify()
  const unselectAll = useUnselectAll()
  const [approve, { loading }] = useUpdateMany(
    resource,
    selectedIds,
    {
      approved: true,
    },
    {
      onSuccess: () => {
        refresh()
        notify('Users approved')
        unselectAll('users')
      },
      onFailure: (err: any) => {
        console.error(err)
        notify('Error: users not updated', 'warning')
      },
    },
  )
  return <Button label='Approve' onClick={approve} disabled={loading} />
}
