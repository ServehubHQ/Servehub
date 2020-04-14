import React from 'react'
import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin'

export const TargetShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source='name' />
      <TextField source='street' />
      <TextField source='unit' />
      <TextField source='postal_code' />
      <TextField source='city' />
      <TextField source='province' />
      <DateField source='created_at' />
      <TextField source='id' />
      <TextField source='job_id' />
    </SimpleShowLayout>
  </Show>
)
