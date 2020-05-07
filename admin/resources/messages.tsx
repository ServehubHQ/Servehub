import React from 'react'
import {
  ReferenceField,
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
} from 'react-admin'

export const MessageShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField
        source='user_id'
        reference='users'
        link='show'
        label='From'
      >
        <TextField source='name' />
      </ReferenceField>
      <DateField source='created_at' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
