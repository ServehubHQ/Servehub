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
  ReferenceField,
  ReferenceManyField,
} from 'react-admin'
import { ApproveBulkAction } from './ApproveBulkAction'
import { StripeCustomerField } from './StripeCustomerField'
import { AverageRatingField } from './AverageRatingField'

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
    <Datagrid rowClick='show'>
      <EmailField source='email' />
      <TextField source='name' />
      <TextField source='default_role' label='Role' />
      <BooleanField source='approved' />
      <ReferenceManyField
        reference='ratings'
        target='user_id'
        label='Avg. Rating'
      >
        <AverageRatingField />
      </ReferenceManyField>
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
      <ReferenceField source='address_id' reference='addresses' link='show'>
        <TextField source='street' />
      </ReferenceField>
      <DateField source='created_at' />
      <TextField source='id' />

      <ReferenceManyField
        reference='ratings'
        target='user_id'
        label='Avg. Rating'
      >
        <AverageRatingField />
      </ReferenceManyField>
      <ReferenceManyField reference='ratings' target='user_id' label='Ratings'>
        <Datagrid>
          <DateField source='created_at' />
          <ReferenceField
            source='user_id'
            reference='users'
            link='show'
            label='By'
            sort={{ field: 'created_at', order: 'DESC' }}
          >
            <TextField source='name' />
          </ReferenceField>
          <TextField source='value' />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)
