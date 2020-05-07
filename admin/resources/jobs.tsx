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
  Show,
  SimpleShowLayout,
} from 'react-admin'

export const JobIcon = WorkIcon

const Total = ({ total }: any) => <span>{total}</span>

export const JobList = (props: any) => (
  <List {...props}>
    <Datagrid rowClick='show'>
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
      <ReferenceManyField reference='messages' target='job_id' label='Messages'>
        <Total />
      </ReferenceManyField>
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

export const JobShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
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

      <ReferenceManyField reference='messages' target='job_id' label='Messages'>
        <Datagrid>
          <ReferenceField
            source='user_id'
            reference='users'
            link='show'
            label='From'
            sort={{ field: 'created_at', order: 'DESC' }}
          >
            <TextField source='name' />
          </ReferenceField>
          <TextField source='message' />
          <DateField source='created_at' />
        </Datagrid>
      </ReferenceManyField>
    </SimpleShowLayout>
  </Show>
)
