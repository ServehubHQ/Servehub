import { Admin as ReactAdmin, Resource } from 'react-admin'
import { AddressShow } from './resources/addresses'
import { DocumentShow } from './resources/documents'
import { JobIcon, JobList, JobShow } from './resources/jobs'
import { PlanShow } from './resources/plans'
import { UserIcon, UserList, UserShow } from './resources/users'

export function Admin(props: any) {
  return (
    <ReactAdmin {...props}>
      <Resource name='users' list={UserList} icon={UserIcon} show={UserShow} />
      <Resource name='jobs' list={JobList} icon={JobIcon} show={JobShow} />
      <Resource name='addresses' show={AddressShow} />
      <Resource name='documents' show={DocumentShow} />
      <Resource name='plans' show={PlanShow} />
      <Resource name='messages' />
      <Resource name='ratings' />
      <Resource name='attempts' />
    </ReactAdmin>
  )
}
