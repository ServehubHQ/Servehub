import { Group } from '@material-ui/icons'
import React from 'react'
import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  EmailField,
  Filter,
  List,
  SelectInput,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'
import { ApproveBulkAction } from './ApproveBulkAction'
import { StripeCustomerField } from './StripeCustomerField'

export const UserIcon = Group

const UserListFilter = (props: any) => (
  <Filter {...props}>
    <BooleanInput label='Approved' source='approved' />
    <SelectInput
      source='default_role'
      label='Role'
      choices={[
        { id: 'server', name: 'Servers' },
        { id: 'lawyer', name: 'Laywers' },
      ]}
      emptyText='All'
    />
  </Filter>
)

export const UserList = (props: any) => (
  <List
    {...props}
    title='Users'
    bulkActionButtons={[
      <ApproveBulkAction key={0} disapprove />,
      <ApproveBulkAction key={1} />,
    ]}
    filters={<UserListFilter />}
  >
    <Datagrid rowClick='toggleSelection'>
      <EmailField source='email' />
      <TextField source='name' />
      <TextField source='default_role' label='Role' />
      <BooleanField source='approved' />
      <StripeCustomerField source='stripe_customer_id' />
      <DateField source='created_at' />
    </Datagrid>
  </List>
)

export const UserShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' />
      <TextField source='default_role' label='Role' />
      <BooleanField source='approved' />
      <EmailField source='email' />
      <StripeCustomerField source='stripe_customer_id' />
      <DateField source='created_at' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
