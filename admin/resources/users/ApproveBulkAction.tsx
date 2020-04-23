import {
  useUpdateMany,
  Button,
  useRefresh,
  useNotify,
  useUnselectAll,
} from 'react-admin'

interface ApproveBulkActionProps {
  disapprove?: boolean
  resource?: string
  selectedIds?: string[]
}

export function ApproveBulkAction({
  disapprove = false,
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
      approved: !disapprove,
    },
    {
      onSuccess: () => {
        refresh()
        notify('Users updated')
        unselectAll('users')
      },
      onFailure: (err: any) => {
        console.error(err)
        notify('Error: users not updated', 'warning')
      },
    },
  )
  return (
    <Button
      label={disapprove ? 'Disapprove' : 'Approve'}
      onClick={approve}
      disabled={loading}
    />
  )
}
