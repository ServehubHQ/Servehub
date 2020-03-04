import WorkIcon from '@material-ui/icons/Work'
import React from 'react'
import {
  BooleanInput,
  Create,
  Datagrid,
  DateField,
  Edit,
  EditButton,
  List,
  SimpleForm,
  TextField,
  TextInput,
} from 'react-admin'

export const JobIcon = WorkIcon

export const JobList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <DateField source='created_at' />
      <TextField source='updated_at' />
      <TextField source='name' />
      <TextField source='done' />
      <EditButton basePath='/jobs' />
    </Datagrid>
  </List>
)

export const JobEdit = (props: any) => (
  <Edit title='Edit Togo' {...props}>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <BooleanInput source='done' />
    </SimpleForm>
  </Edit>
)

export const JobCreate = (props: any) => (
  <Create title='Create a Job' {...props}>
    <SimpleForm>
      <TextInput source='name' />
    </SimpleForm>
  </Create>
)
