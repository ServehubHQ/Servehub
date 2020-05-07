import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import {
  BooleanField,
  ChipField,
  Datagrid,
  DateField,
  Filter,
  List,
  Pagination,
  ReferenceField,
  ReferenceInput,
  ReferenceManyField,
  SelectInput,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from 'react-admin'
import { Total } from '../Total'

export const JobIcon = WorkIcon

const JobListFilter = (props: any) => (
  <Filter {...props}>
    <ReferenceInput label='Lawyer' source='lawyer_user_id' reference='users'>
      <SelectInput optionText='name' />
    </ReferenceInput>
    <ReferenceInput label='Server' source='server_user_id' reference='users'>
      <SelectInput optionText='name' />
    </ReferenceInput>
  </Filter>
)

export const JobList = (props: any) => (
  <List {...props} filters={<JobListFilter />}>
    <Datagrid rowClick='show'>
      <TextField source='target_name' label='Target' />
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
      <ReferenceField
        source='plan_id'
        reference='plans'
        label='Plan'
        link='show'
      >
        <TextField source='name' />
      </ReferenceField>
      <ReferenceManyField reference='messages' target='job_id' label='Messages'>
        <Total />
      </ReferenceManyField>
      <ReferenceManyField reference='attempts' target='job_id' label='Attempts'>
        <Total />
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

      <ReferenceManyField
        reference='messages'
        target='job_id'
        label='Messages'
        sort={{ field: 'created_at', order: 'ASC' }}
        perPage={10}
        pagination={<Pagination />}
      >
        <Datagrid>
          <ReferenceField
            source='user_id'
            reference='users'
            link='show'
            label='From'
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
