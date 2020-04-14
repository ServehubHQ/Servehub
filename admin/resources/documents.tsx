import React from 'react'
import {
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  UrlField,
} from 'react-admin'

export const DocumentShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='title' />
      <UrlField source='url' />
      <ReferenceField source='job_id' reference='jobs' label='Job'>
        <TextField source='target.name' />
      </ReferenceField>
      <DateField source='created_at' />
      <TextField source='id' />
    </SimpleShowLayout>
  </Show>
)
