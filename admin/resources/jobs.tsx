import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import {
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  List,
  ReferenceField,
  ReferenceManyField,
  SingleFieldList,
  TextField,
} from 'react-admin'

export const JobIcon = WorkIcon

export const JobList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source='target_name' />
      <ReferenceField
        source='target_address_id'
        reference='addresses'
        link='show'
      >
        <TextField source='street' />
      </ReferenceField>
      <ReferenceField
        source='lawyer_user_id'
        reference='users'
        label='Lawyer'
        link='show'
      >
        <TextField source='name' />
      </ReferenceField>
      <ReferenceField
        source='server_user_id'
        reference='users'
        label='Server'
        link='show'
      >
        <TextField source='name' />
      </ReferenceField>
      <BooleanField source='pickup_required' />
      <ReferenceField
        source='pickup_address_id'
        reference='addresses'
        link='show'
      >
        <TextField source='street' />
      </ReferenceField>
      <ReferenceManyField
        reference='documents'
        target='job_id'
        label='Documents'
      >
        <SingleFieldList linkType='show'>
          <ChipField source='title' />
        </SingleFieldList>
      </ReferenceManyField>
      <DateField source='created_at' />
    </Datagrid>
  </List>
)
