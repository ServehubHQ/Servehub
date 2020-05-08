import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
  jsonb: any;
  interval: any;
};

export type Addresses = {
   __typename?: 'addresses';
  city: Scalars['String'];
  country: Countries_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  pickup_jobs: Array<Jobs>;
  pickup_jobs_aggregate: Jobs_Aggregate;
  postal_code: Scalars['String'];
  province: Provinces_Enum;
  street: Scalars['String'];
  target_jobs: Array<Jobs>;
  target_jobs_aggregate: Jobs_Aggregate;
  unit?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
};


export type AddressesPickup_JobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type AddressesPickup_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type AddressesTarget_JobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type AddressesTarget_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type AddressesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type AddressesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Addresses_Aggregate = {
   __typename?: 'addresses_aggregate';
  aggregate?: Maybe<Addresses_Aggregate_Fields>;
  nodes: Array<Addresses>;
};

export type Addresses_Aggregate_Fields = {
   __typename?: 'addresses_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Addresses_Max_Fields>;
  min?: Maybe<Addresses_Min_Fields>;
};


export type Addresses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Addresses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Addresses_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Addresses_Max_Order_By>;
  min?: Maybe<Addresses_Min_Order_By>;
};

export type Addresses_Arr_Rel_Insert_Input = {
  data: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

export type Addresses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  _not?: Maybe<Addresses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Addresses_Bool_Exp>>>;
  city?: Maybe<String_Comparison_Exp>;
  country?: Maybe<Countries_Enum_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  pickup_jobs?: Maybe<Jobs_Bool_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  province?: Maybe<Provinces_Enum_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  target_jobs?: Maybe<Jobs_Bool_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

export enum Addresses_Constraint {
  AddressesPkey = 'addresses_pkey'
}

export type Addresses_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Countries_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Provinces_Enum>;
  street?: Maybe<Scalars['String']>;
  target_jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

export type Addresses_Max_Fields = {
   __typename?: 'addresses_max_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  postal_code?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Addresses_Max_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Addresses_Min_Fields = {
   __typename?: 'addresses_min_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  postal_code?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Addresses_Min_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Addresses_Mutation_Response = {
   __typename?: 'addresses_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Addresses>;
};

export type Addresses_Obj_Rel_Insert_Input = {
  data: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};

export type Addresses_On_Conflict = {
  constraint: Addresses_Constraint;
  update_columns: Array<Addresses_Update_Column>;
  where?: Maybe<Addresses_Bool_Exp>;
};

export type Addresses_Order_By = {
  city?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pickup_jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  target_jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

export type Addresses_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Addresses_Select_Column {
  City = 'city',
  Country = 'country',
  CreatedAt = 'created_at',
  Id = 'id',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Unit = 'unit',
  UpdatedAt = 'updated_at'
}

export type Addresses_Set_Input = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Countries_Enum>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Provinces_Enum>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Addresses_Update_Column {
  City = 'city',
  Country = 'country',
  CreatedAt = 'created_at',
  Id = 'id',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Unit = 'unit',
  UpdatedAt = 'updated_at'
}

export type Attempts = {
   __typename?: 'attempts';
  attempted_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url?: Maybe<Scalars['String']>;
  job: Jobs;
  job_id: Scalars['uuid'];
  notes?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};

export type Attempts_Aggregate = {
   __typename?: 'attempts_aggregate';
  aggregate?: Maybe<Attempts_Aggregate_Fields>;
  nodes: Array<Attempts>;
};

export type Attempts_Aggregate_Fields = {
   __typename?: 'attempts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Attempts_Max_Fields>;
  min?: Maybe<Attempts_Min_Fields>;
};


export type Attempts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Attempts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Attempts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Attempts_Max_Order_By>;
  min?: Maybe<Attempts_Min_Order_By>;
};

export type Attempts_Arr_Rel_Insert_Input = {
  data: Array<Attempts_Insert_Input>;
  on_conflict?: Maybe<Attempts_On_Conflict>;
};

export type Attempts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Attempts_Bool_Exp>>>;
  _not?: Maybe<Attempts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Attempts_Bool_Exp>>>;
  attempted_at?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image_url?: Maybe<String_Comparison_Exp>;
  job?: Maybe<Jobs_Bool_Exp>;
  job_id?: Maybe<Uuid_Comparison_Exp>;
  notes?: Maybe<String_Comparison_Exp>;
  success?: Maybe<Boolean_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Attempts_Constraint {
  AttemptsPkey = 'attempts_pkey'
}

export type Attempts_Insert_Input = {
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  job?: Maybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Max_Fields = {
   __typename?: 'attempts_max_fields';
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Max_Order_By = {
  attempted_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Attempts_Min_Fields = {
   __typename?: 'attempts_min_fields';
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Min_Order_By = {
  attempted_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Attempts_Mutation_Response = {
   __typename?: 'attempts_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Attempts>;
};

export type Attempts_Obj_Rel_Insert_Input = {
  data: Attempts_Insert_Input;
  on_conflict?: Maybe<Attempts_On_Conflict>;
};

export type Attempts_On_Conflict = {
  constraint: Attempts_Constraint;
  update_columns: Array<Attempts_Update_Column>;
  where?: Maybe<Attempts_Bool_Exp>;
};

export type Attempts_Order_By = {
  attempted_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  job?: Maybe<Jobs_Order_By>;
  job_id?: Maybe<Order_By>;
  notes?: Maybe<Order_By>;
  success?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Attempts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Attempts_Select_Column {
  AttemptedAt = 'attempted_at',
  CreatedAt = 'created_at',
  Id = 'id',
  ImageUrl = 'image_url',
  JobId = 'job_id',
  Notes = 'notes',
  Success = 'success',
  UpdatedAt = 'updated_at'
}

export type Attempts_Set_Input = {
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  notes?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Attempts_Update_Column {
  AttemptedAt = 'attempted_at',
  CreatedAt = 'created_at',
  Id = 'id',
  ImageUrl = 'image_url',
  JobId = 'job_id',
  Notes = 'notes',
  Success = 'success',
  UpdatedAt = 'updated_at'
}

export type Auth_Auth_Providers = {
   __typename?: 'auth_auth_providers';
  provider: Scalars['String'];
  user_providers: Array<Auth_User_Providers>;
  user_providers_aggregate: Auth_User_Providers_Aggregate;
};


export type Auth_Auth_ProvidersUser_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type Auth_Auth_ProvidersUser_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};

export type Auth_Auth_Providers_Aggregate = {
   __typename?: 'auth_auth_providers_aggregate';
  aggregate?: Maybe<Auth_Auth_Providers_Aggregate_Fields>;
  nodes: Array<Auth_Auth_Providers>;
};

export type Auth_Auth_Providers_Aggregate_Fields = {
   __typename?: 'auth_auth_providers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Auth_Providers_Max_Fields>;
  min?: Maybe<Auth_Auth_Providers_Min_Fields>;
};


export type Auth_Auth_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Auth_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Auth_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Auth_Providers_Max_Order_By>;
  min?: Maybe<Auth_Auth_Providers_Min_Order_By>;
};

export type Auth_Auth_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Auth_Providers_On_Conflict>;
};

export type Auth_Auth_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Auth_Providers_Bool_Exp>>>;
  _not?: Maybe<Auth_Auth_Providers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Auth_Providers_Bool_Exp>>>;
  provider?: Maybe<String_Comparison_Exp>;
  user_providers?: Maybe<Auth_User_Providers_Bool_Exp>;
};

export enum Auth_Auth_Providers_Constraint {
  AuthProvidersPkey = 'auth_providers_pkey'
}

export type Auth_Auth_Providers_Insert_Input = {
  provider?: Maybe<Scalars['String']>;
  user_providers?: Maybe<Auth_User_Providers_Arr_Rel_Insert_Input>;
};

export type Auth_Auth_Providers_Max_Fields = {
   __typename?: 'auth_auth_providers_max_fields';
  provider?: Maybe<Scalars['String']>;
};

export type Auth_Auth_Providers_Max_Order_By = {
  provider?: Maybe<Order_By>;
};

export type Auth_Auth_Providers_Min_Fields = {
   __typename?: 'auth_auth_providers_min_fields';
  provider?: Maybe<Scalars['String']>;
};

export type Auth_Auth_Providers_Min_Order_By = {
  provider?: Maybe<Order_By>;
};

export type Auth_Auth_Providers_Mutation_Response = {
   __typename?: 'auth_auth_providers_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Auth_Providers>;
};

export type Auth_Auth_Providers_Obj_Rel_Insert_Input = {
  data: Auth_Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Auth_Providers_On_Conflict>;
};

export type Auth_Auth_Providers_On_Conflict = {
  constraint: Auth_Auth_Providers_Constraint;
  update_columns: Array<Auth_Auth_Providers_Update_Column>;
  where?: Maybe<Auth_Auth_Providers_Bool_Exp>;
};

export type Auth_Auth_Providers_Order_By = {
  provider?: Maybe<Order_By>;
  user_providers_aggregate?: Maybe<Auth_User_Providers_Aggregate_Order_By>;
};

export type Auth_Auth_Providers_Pk_Columns_Input = {
  provider: Scalars['String'];
};

export enum Auth_Auth_Providers_Select_Column {
  Provider = 'provider'
}

export type Auth_Auth_Providers_Set_Input = {
  provider?: Maybe<Scalars['String']>;
};

export enum Auth_Auth_Providers_Update_Column {
  Provider = 'provider'
}

export type Auth_Refresh_Tokens = {
   __typename?: 'auth_refresh_tokens';
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
  user: Users;
  user_id: Scalars['uuid'];
};

export type Auth_Refresh_Tokens_Aggregate = {
   __typename?: 'auth_refresh_tokens_aggregate';
  aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Auth_Refresh_Tokens>;
};

export type Auth_Refresh_Tokens_Aggregate_Fields = {
   __typename?: 'auth_refresh_tokens_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Fields>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Fields>;
};


export type Auth_Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_Refresh_Tokens_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_Refresh_Tokens_Max_Order_By>;
  min?: Maybe<Auth_Refresh_Tokens_Min_Order_By>;
};

export type Auth_Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

export type Auth_Refresh_Tokens_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>;
  _not?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_Refresh_Tokens_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  refresh_token?: Maybe<Uuid_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Auth_Refresh_Tokens_Constraint {
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

export type Auth_Refresh_Tokens_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_Refresh_Tokens_Max_Fields = {
   __typename?: 'auth_refresh_tokens_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_Refresh_Tokens_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Refresh_Tokens_Min_Fields = {
   __typename?: 'auth_refresh_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_Refresh_Tokens_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Refresh_Tokens_Mutation_Response = {
   __typename?: 'auth_refresh_tokens_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_Refresh_Tokens>;
};

export type Auth_Refresh_Tokens_Obj_Rel_Insert_Input = {
  data: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};

export type Auth_Refresh_Tokens_On_Conflict = {
  constraint: Auth_Refresh_Tokens_Constraint;
  update_columns: Array<Auth_Refresh_Tokens_Update_Column>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};

export type Auth_Refresh_Tokens_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
  refresh_token?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

export enum Auth_Refresh_Tokens_Select_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  RefreshToken = 'refresh_token',
  UserId = 'user_id'
}

export type Auth_Refresh_Tokens_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Auth_Refresh_Tokens_Update_Column {
  CreatedAt = 'created_at',
  ExpiresAt = 'expires_at',
  RefreshToken = 'refresh_token',
  UserId = 'user_id'
}

export type Auth_User_Accounts = {
   __typename?: 'auth_user_accounts';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  password: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  user: Users;
  user_id: Scalars['uuid'];
  username: Scalars['String'];
};

export type Auth_User_Accounts_Aggregate = {
   __typename?: 'auth_user_accounts_aggregate';
  aggregate?: Maybe<Auth_User_Accounts_Aggregate_Fields>;
  nodes: Array<Auth_User_Accounts>;
};

export type Auth_User_Accounts_Aggregate_Fields = {
   __typename?: 'auth_user_accounts_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_User_Accounts_Max_Fields>;
  min?: Maybe<Auth_User_Accounts_Min_Fields>;
};


export type Auth_User_Accounts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_User_Accounts_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_User_Accounts_Max_Order_By>;
  min?: Maybe<Auth_User_Accounts_Min_Order_By>;
};

export type Auth_User_Accounts_Arr_Rel_Insert_Input = {
  data: Array<Auth_User_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Accounts_On_Conflict>;
};

export type Auth_User_Accounts_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_User_Accounts_Bool_Exp>>>;
  _not?: Maybe<Auth_User_Accounts_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_User_Accounts_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  username?: Maybe<String_Comparison_Exp>;
};

export enum Auth_User_Accounts_Constraint {
  UserAccountsEmailKey = 'user_accounts_email_key',
  UserAccountsPkey = 'user_accounts_pkey',
  UserAccountsUsernameKey = 'user_accounts_username_key'
}

export type Auth_User_Accounts_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

export type Auth_User_Accounts_Max_Fields = {
   __typename?: 'auth_user_accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

export type Auth_User_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type Auth_User_Accounts_Min_Fields = {
   __typename?: 'auth_user_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

export type Auth_User_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type Auth_User_Accounts_Mutation_Response = {
   __typename?: 'auth_user_accounts_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_User_Accounts>;
};

export type Auth_User_Accounts_Obj_Rel_Insert_Input = {
  data: Auth_User_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_User_Accounts_On_Conflict>;
};

export type Auth_User_Accounts_On_Conflict = {
  constraint: Auth_User_Accounts_Constraint;
  update_columns: Array<Auth_User_Accounts_Update_Column>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};

export type Auth_User_Accounts_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type Auth_User_Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Auth_User_Accounts_Select_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Username = 'username'
}

export type Auth_User_Accounts_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  username?: Maybe<Scalars['String']>;
};

export enum Auth_User_Accounts_Update_Column {
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Password = 'password',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Username = 'username'
}

export type Auth_User_Providers = {
   __typename?: 'auth_user_providers';
  authProviderByAuthProvider: Auth_Auth_Providers;
  auth_provider: Scalars['String'];
  auth_provider_unique_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user: Users;
  user_id: Scalars['uuid'];
};

export type Auth_User_Providers_Aggregate = {
   __typename?: 'auth_user_providers_aggregate';
  aggregate?: Maybe<Auth_User_Providers_Aggregate_Fields>;
  nodes: Array<Auth_User_Providers>;
};

export type Auth_User_Providers_Aggregate_Fields = {
   __typename?: 'auth_user_providers_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Auth_User_Providers_Max_Fields>;
  min?: Maybe<Auth_User_Providers_Min_Fields>;
};


export type Auth_User_Providers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Auth_User_Providers_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Auth_User_Providers_Max_Order_By>;
  min?: Maybe<Auth_User_Providers_Min_Order_By>;
};

export type Auth_User_Providers_Arr_Rel_Insert_Input = {
  data: Array<Auth_User_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Providers_On_Conflict>;
};

export type Auth_User_Providers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Auth_User_Providers_Bool_Exp>>>;
  _not?: Maybe<Auth_User_Providers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Auth_User_Providers_Bool_Exp>>>;
  authProviderByAuthProvider?: Maybe<Auth_Auth_Providers_Bool_Exp>;
  auth_provider?: Maybe<String_Comparison_Exp>;
  auth_provider_unique_id?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Auth_User_Providers_Constraint {
  UserProvidersAuthProviderAuthProviderUniqueIdKey = 'user_providers_auth_provider_auth_provider_unique_id_key',
  UserProvidersPkey = 'user_providers_pkey',
  UserProvidersUserIdAuthProviderKey = 'user_providers_user_id_auth_provider_key'
}

export type Auth_User_Providers_Insert_Input = {
  authProviderByAuthProvider?: Maybe<Auth_Auth_Providers_Obj_Rel_Insert_Input>;
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_User_Providers_Max_Fields = {
   __typename?: 'auth_user_providers_max_fields';
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_User_Providers_Max_Order_By = {
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_User_Providers_Min_Fields = {
   __typename?: 'auth_user_providers_min_fields';
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Auth_User_Providers_Min_Order_By = {
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_User_Providers_Mutation_Response = {
   __typename?: 'auth_user_providers_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Auth_User_Providers>;
};

export type Auth_User_Providers_Obj_Rel_Insert_Input = {
  data: Auth_User_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_User_Providers_On_Conflict>;
};

export type Auth_User_Providers_On_Conflict = {
  constraint: Auth_User_Providers_Constraint;
  update_columns: Array<Auth_User_Providers_Update_Column>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};

export type Auth_User_Providers_Order_By = {
  authProviderByAuthProvider?: Maybe<Auth_Auth_Providers_Order_By>;
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Auth_User_Providers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Auth_User_Providers_Select_Column {
  AuthProvider = 'auth_provider',
  AuthProviderUniqueId = 'auth_provider_unique_id',
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Auth_User_Providers_Set_Input = {
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Auth_User_Providers_Update_Column {
  AuthProvider = 'auth_provider',
  AuthProviderUniqueId = 'auth_provider_unique_id',
  CreatedAt = 'created_at',
  Id = 'id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Available_Jobs = {
   __typename?: 'available_jobs';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_address?: Maybe<Addresses>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<Plans>;
  plan_id?: Maybe<Scalars['uuid']>;
  target_address?: Maybe<Addresses>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Available_Jobs_Aggregate = {
   __typename?: 'available_jobs_aggregate';
  aggregate?: Maybe<Available_Jobs_Aggregate_Fields>;
  nodes: Array<Available_Jobs>;
};

export type Available_Jobs_Aggregate_Fields = {
   __typename?: 'available_jobs_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Available_Jobs_Max_Fields>;
  min?: Maybe<Available_Jobs_Min_Fields>;
};


export type Available_Jobs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Available_Jobs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Available_Jobs_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Available_Jobs_Max_Order_By>;
  min?: Maybe<Available_Jobs_Min_Order_By>;
};

export type Available_Jobs_Arr_Rel_Insert_Input = {
  data: Array<Available_Jobs_Insert_Input>;
};

export type Available_Jobs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Available_Jobs_Bool_Exp>>>;
  _not?: Maybe<Available_Jobs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Available_Jobs_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  pickup_address?: Maybe<Addresses_Bool_Exp>;
  pickup_address_id?: Maybe<Uuid_Comparison_Exp>;
  pickup_required?: Maybe<Boolean_Comparison_Exp>;
  plan?: Maybe<Plans_Bool_Exp>;
  plan_id?: Maybe<Uuid_Comparison_Exp>;
  target_address?: Maybe<Addresses_Bool_Exp>;
  target_address_id?: Maybe<Uuid_Comparison_Exp>;
  target_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Available_Jobs_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<Plans_Obj_Rel_Insert_Input>;
  plan_id?: Maybe<Scalars['uuid']>;
  target_address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Available_Jobs_Max_Fields = {
   __typename?: 'available_jobs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  plan_id?: Maybe<Scalars['uuid']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Available_Jobs_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Available_Jobs_Min_Fields = {
   __typename?: 'available_jobs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  plan_id?: Maybe<Scalars['uuid']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Available_Jobs_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Available_Jobs_Mutation_Response = {
   __typename?: 'available_jobs_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Available_Jobs>;
};

export type Available_Jobs_Obj_Rel_Insert_Input = {
  data: Available_Jobs_Insert_Input;
};

export type Available_Jobs_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  pickup_address?: Maybe<Addresses_Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  pickup_required?: Maybe<Order_By>;
  plan?: Maybe<Plans_Order_By>;
  plan_id?: Maybe<Order_By>;
  target_address?: Maybe<Addresses_Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Available_Jobs_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  PickupAddressId = 'pickup_address_id',
  PickupRequired = 'pickup_required',
  PlanId = 'plan_id',
  TargetAddressId = 'target_address_id',
  TargetName = 'target_name',
  UpdatedAt = 'updated_at'
}

export type Available_Jobs_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  plan_id?: Maybe<Scalars['uuid']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

export type Countries = {
   __typename?: 'countries';
  addresses: Array<Addresses>;
  addresses_aggregate: Addresses_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type CountriesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type CountriesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};

export type Countries_Aggregate = {
   __typename?: 'countries_aggregate';
  aggregate?: Maybe<Countries_Aggregate_Fields>;
  nodes: Array<Countries>;
};

export type Countries_Aggregate_Fields = {
   __typename?: 'countries_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Countries_Max_Fields>;
  min?: Maybe<Countries_Min_Fields>;
};


export type Countries_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Countries_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Countries_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Countries_Max_Order_By>;
  min?: Maybe<Countries_Min_Order_By>;
};

export type Countries_Arr_Rel_Insert_Input = {
  data: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

export type Countries_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  _not?: Maybe<Countries_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Countries_Bool_Exp>>>;
  addresses?: Maybe<Addresses_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Countries_Constraint {
  CountriesPkey = 'countries_pkey'
}

export enum Countries_Enum {
  Ca = 'CA'
}

export type Countries_Enum_Comparison_Exp = {
  _eq?: Maybe<Countries_Enum>;
  _in?: Maybe<Array<Countries_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Countries_Enum>;
  _nin?: Maybe<Array<Countries_Enum>>;
};

export type Countries_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Countries_Max_Fields = {
   __typename?: 'countries_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Countries_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Countries_Min_Fields = {
   __typename?: 'countries_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Countries_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Countries_Mutation_Response = {
   __typename?: 'countries_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Countries>;
};

export type Countries_Obj_Rel_Insert_Input = {
  data: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};

export type Countries_On_Conflict = {
  constraint: Countries_Constraint;
  update_columns: Array<Countries_Update_Column>;
  where?: Maybe<Countries_Bool_Exp>;
};

export type Countries_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Countries_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Countries_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Countries_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Countries_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Current_User = {
   __typename?: 'current_user';
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Addresses>;
  address_id?: Maybe<Scalars['uuid']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled?: Maybe<Scalars['Boolean']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notifications_enabled?: Maybe<Scalars['Boolean']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};


export type Current_UserRegister_DataArgs = {
  path?: Maybe<Scalars['String']>;
};

export type Current_User_Aggregate = {
   __typename?: 'current_user_aggregate';
  aggregate?: Maybe<Current_User_Aggregate_Fields>;
  nodes: Array<Current_User>;
};

export type Current_User_Aggregate_Fields = {
   __typename?: 'current_user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Current_User_Max_Fields>;
  min?: Maybe<Current_User_Min_Fields>;
};


export type Current_User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Current_User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Current_User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Current_User_Max_Order_By>;
  min?: Maybe<Current_User_Min_Order_By>;
};

export type Current_User_Append_Input = {
  register_data?: Maybe<Scalars['jsonb']>;
};

export type Current_User_Arr_Rel_Insert_Input = {
  data: Array<Current_User_Insert_Input>;
};

export type Current_User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Current_User_Bool_Exp>>>;
  _not?: Maybe<Current_User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Current_User_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  address?: Maybe<Addresses_Bool_Exp>;
  address_id?: Maybe<Uuid_Comparison_Exp>;
  approved?: Maybe<Boolean_Comparison_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_notifications_enabled?: Maybe<Boolean_Comparison_Exp>;
  firebase_messaging_token?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  notifications_enabled?: Maybe<Boolean_Comparison_Exp>;
  register_data?: Maybe<Jsonb_Comparison_Exp>;
  secret_token?: Maybe<Uuid_Comparison_Exp>;
  secret_token_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  stripe_customer_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export type Current_User_Delete_At_Path_Input = {
  register_data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Current_User_Delete_Elem_Input = {
  register_data?: Maybe<Scalars['Int']>;
};

export type Current_User_Delete_Key_Input = {
  register_data?: Maybe<Scalars['String']>;
};

export type Current_User_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  address_id?: Maybe<Scalars['uuid']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled?: Maybe<Scalars['Boolean']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notifications_enabled?: Maybe<Scalars['Boolean']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Current_User_Max_Fields = {
   __typename?: 'current_user_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Current_User_Max_Order_By = {
  address_id?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Current_User_Min_Fields = {
   __typename?: 'current_user_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Current_User_Min_Order_By = {
  address_id?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Current_User_Mutation_Response = {
   __typename?: 'current_user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Current_User>;
};

export type Current_User_Obj_Rel_Insert_Input = {
  data: Current_User_Insert_Input;
};

export type Current_User_Order_By = {
  active?: Maybe<Order_By>;
  address?: Maybe<Addresses_Order_By>;
  address_id?: Maybe<Order_By>;
  approved?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_notifications_enabled?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  notifications_enabled?: Maybe<Order_By>;
  register_data?: Maybe<Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Current_User_Prepend_Input = {
  register_data?: Maybe<Scalars['jsonb']>;
};

export enum Current_User_Select_Column {
  Active = 'active',
  AddressId = 'address_id',
  Approved = 'approved',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  EmailNotificationsEnabled = 'email_notifications_enabled',
  FirebaseMessagingToken = 'firebase_messaging_token',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  Name = 'name',
  NotificationsEnabled = 'notifications_enabled',
  RegisterData = 'register_data',
  SecretToken = 'secret_token',
  SecretTokenExpiresAt = 'secret_token_expires_at',
  StripeCustomerId = 'stripe_customer_id',
  UpdatedAt = 'updated_at'
}

export type Current_User_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  address_id?: Maybe<Scalars['uuid']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled?: Maybe<Scalars['Boolean']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notifications_enabled?: Maybe<Scalars['Boolean']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Documents = {
   __typename?: 'documents';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  job: Jobs;
  job_id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url?: Maybe<Scalars['String']>;
};

export type Documents_Aggregate = {
   __typename?: 'documents_aggregate';
  aggregate?: Maybe<Documents_Aggregate_Fields>;
  nodes: Array<Documents>;
};

export type Documents_Aggregate_Fields = {
   __typename?: 'documents_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Documents_Max_Fields>;
  min?: Maybe<Documents_Min_Fields>;
};


export type Documents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Documents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Documents_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Documents_Max_Order_By>;
  min?: Maybe<Documents_Min_Order_By>;
};

export type Documents_Arr_Rel_Insert_Input = {
  data: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

export type Documents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  _not?: Maybe<Documents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Documents_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  job?: Maybe<Jobs_Bool_Exp>;
  job_id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

export enum Documents_Constraint {
  DocumentsPkey = 'documents_pkey'
}

export type Documents_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job?: Maybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Max_Fields = {
   __typename?: 'documents_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export type Documents_Min_Fields = {
   __typename?: 'documents_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export type Documents_Mutation_Response = {
   __typename?: 'documents_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Documents>;
};

export type Documents_Obj_Rel_Insert_Input = {
  data: Documents_Insert_Input;
  on_conflict?: Maybe<Documents_On_Conflict>;
};

export type Documents_On_Conflict = {
  constraint: Documents_Constraint;
  update_columns: Array<Documents_Update_Column>;
  where?: Maybe<Documents_Bool_Exp>;
};

export type Documents_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job?: Maybe<Jobs_Order_By>;
  job_id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export type Documents_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Documents_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Title = 'title',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type Documents_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export enum Documents_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Title = 'title',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type Interval_Comparison_Exp = {
  _eq?: Maybe<Scalars['interval']>;
  _gt?: Maybe<Scalars['interval']>;
  _gte?: Maybe<Scalars['interval']>;
  _in?: Maybe<Array<Scalars['interval']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['interval']>;
  _lte?: Maybe<Scalars['interval']>;
  _neq?: Maybe<Scalars['interval']>;
  _nin?: Maybe<Array<Scalars['interval']>>;
};

export type Jobs = {
   __typename?: 'jobs';
  attempts: Array<Attempts>;
  attempts_aggregate: Attempts_Aggregate;
  case_number?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  id: Scalars['uuid'];
  lawyer: Users;
  lawyer_user_id: Scalars['uuid'];
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  pickup_address?: Maybe<Addresses>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required: Scalars['Boolean'];
  plan?: Maybe<Plans>;
  plan_id?: Maybe<Scalars['uuid']>;
  ratings: Array<Ratings>;
  ratings_aggregate: Ratings_Aggregate;
  server?: Maybe<Users>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded: Scalars['Boolean'];
  target_address?: Maybe<Addresses>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};


export type JobsAttemptsArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type JobsAttempts_AggregateArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type JobsDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type JobsDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type JobsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type JobsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type JobsRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type JobsRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};

export type Jobs_Aggregate = {
   __typename?: 'jobs_aggregate';
  aggregate?: Maybe<Jobs_Aggregate_Fields>;
  nodes: Array<Jobs>;
};

export type Jobs_Aggregate_Fields = {
   __typename?: 'jobs_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Jobs_Max_Fields>;
  min?: Maybe<Jobs_Min_Fields>;
};


export type Jobs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Jobs_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Jobs_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Jobs_Max_Order_By>;
  min?: Maybe<Jobs_Min_Order_By>;
};

export type Jobs_Arr_Rel_Insert_Input = {
  data: Array<Jobs_Insert_Input>;
  on_conflict?: Maybe<Jobs_On_Conflict>;
};

export type Jobs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Jobs_Bool_Exp>>>;
  _not?: Maybe<Jobs_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Jobs_Bool_Exp>>>;
  attempts?: Maybe<Attempts_Bool_Exp>;
  case_number?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  documents?: Maybe<Documents_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lawyer?: Maybe<Users_Bool_Exp>;
  lawyer_user_id?: Maybe<Uuid_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  pickup_address?: Maybe<Addresses_Bool_Exp>;
  pickup_address_id?: Maybe<Uuid_Comparison_Exp>;
  pickup_required?: Maybe<Boolean_Comparison_Exp>;
  plan?: Maybe<Plans_Bool_Exp>;
  plan_id?: Maybe<Uuid_Comparison_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  server?: Maybe<Users_Bool_Exp>;
  server_user_id?: Maybe<Uuid_Comparison_Exp>;
  stripe_payment_intent_client_secret?: Maybe<String_Comparison_Exp>;
  stripe_payment_intent_id?: Maybe<String_Comparison_Exp>;
  stripe_payment_intent_succeeded?: Maybe<Boolean_Comparison_Exp>;
  target_address?: Maybe<Addresses_Bool_Exp>;
  target_address_id?: Maybe<Uuid_Comparison_Exp>;
  target_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Jobs_Constraint {
  JobsPkey = 'jobs_pkey'
}

export type Jobs_Insert_Input = {
  attempts?: Maybe<Attempts_Arr_Rel_Insert_Input>;
  case_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  documents?: Maybe<Documents_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  lawyer?: Maybe<Users_Obj_Rel_Insert_Input>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  pickup_address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<Plans_Obj_Rel_Insert_Input>;
  plan_id?: Maybe<Scalars['uuid']>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  server?: Maybe<Users_Obj_Rel_Insert_Input>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded?: Maybe<Scalars['Boolean']>;
  target_address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Fields = {
   __typename?: 'jobs_max_fields';
  case_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  plan_id?: Maybe<Scalars['uuid']>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Order_By = {
  case_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lawyer_user_id?: Maybe<Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
  server_user_id?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Jobs_Min_Fields = {
   __typename?: 'jobs_min_fields';
  case_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  plan_id?: Maybe<Scalars['uuid']>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Min_Order_By = {
  case_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lawyer_user_id?: Maybe<Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  plan_id?: Maybe<Order_By>;
  server_user_id?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Jobs_Mutation_Response = {
   __typename?: 'jobs_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Jobs>;
};

export type Jobs_Obj_Rel_Insert_Input = {
  data: Jobs_Insert_Input;
  on_conflict?: Maybe<Jobs_On_Conflict>;
};

export type Jobs_On_Conflict = {
  constraint: Jobs_Constraint;
  update_columns: Array<Jobs_Update_Column>;
  where?: Maybe<Jobs_Bool_Exp>;
};

export type Jobs_Order_By = {
  attempts_aggregate?: Maybe<Attempts_Aggregate_Order_By>;
  case_number?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  documents_aggregate?: Maybe<Documents_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  lawyer?: Maybe<Users_Order_By>;
  lawyer_user_id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  pickup_address?: Maybe<Addresses_Order_By>;
  pickup_address_id?: Maybe<Order_By>;
  pickup_required?: Maybe<Order_By>;
  plan?: Maybe<Plans_Order_By>;
  plan_id?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  server?: Maybe<Users_Order_By>;
  server_user_id?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  stripe_payment_intent_succeeded?: Maybe<Order_By>;
  target_address?: Maybe<Addresses_Order_By>;
  target_address_id?: Maybe<Order_By>;
  target_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Jobs_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Jobs_Select_Column {
  CaseNumber = 'case_number',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  PickupAddressId = 'pickup_address_id',
  PickupRequired = 'pickup_required',
  PlanId = 'plan_id',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
  StripePaymentIntentSucceeded = 'stripe_payment_intent_succeeded',
  TargetAddressId = 'target_address_id',
  TargetName = 'target_name',
  UpdatedAt = 'updated_at'
}

export type Jobs_Set_Input = {
  case_number?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  pickup_address_id?: Maybe<Scalars['uuid']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  plan_id?: Maybe<Scalars['uuid']>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded?: Maybe<Scalars['Boolean']>;
  target_address_id?: Maybe<Scalars['uuid']>;
  target_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Jobs_Update_Column {
  CaseNumber = 'case_number',
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  PickupAddressId = 'pickup_address_id',
  PickupRequired = 'pickup_required',
  PlanId = 'plan_id',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
  StripePaymentIntentSucceeded = 'stripe_payment_intent_succeeded',
  TargetAddressId = 'target_address_id',
  TargetName = 'target_name',
  UpdatedAt = 'updated_at'
}


export type Jsonb_Comparison_Exp = {
  _contained_in?: Maybe<Scalars['jsonb']>;
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  _has_key?: Maybe<Scalars['String']>;
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

export type Messages = {
   __typename?: 'messages';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  job: Jobs;
  job_id: Scalars['uuid'];
  message: Scalars['String'];
  read_at?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  user: Users;
  user_id: Scalars['uuid'];
};

export type Messages_Aggregate = {
   __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Fields = {
   __typename?: 'messages_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
};


export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Messages_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Messages_Max_Order_By>;
  min?: Maybe<Messages_Min_Order_By>;
};

export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  _not?: Maybe<Messages_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Messages_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  job?: Maybe<Jobs_Bool_Exp>;
  job_id?: Maybe<Uuid_Comparison_Exp>;
  message?: Maybe<String_Comparison_Exp>;
  read_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum Messages_Constraint {
  MessagesPkey = 'messages_pkey'
}

export type Messages_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job?: Maybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Messages_Max_Fields = {
   __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Messages_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Messages_Min_Fields = {
   __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Messages_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Messages_Mutation_Response = {
   __typename?: 'messages_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Messages>;
};

export type Messages_Obj_Rel_Insert_Input = {
  data: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};

export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns: Array<Messages_Update_Column>;
  where?: Maybe<Messages_Bool_Exp>;
};

export type Messages_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job?: Maybe<Jobs_Order_By>;
  job_id?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  read_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type Messages_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Messages_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Message = 'message',
  ReadAt = 'read_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Messages_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  read_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Messages_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Message = 'message',
  ReadAt = 'read_at',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_addresses?: Maybe<Addresses_Mutation_Response>;
  delete_addresses_by_pk?: Maybe<Addresses>;
  delete_attempts?: Maybe<Attempts_Mutation_Response>;
  delete_attempts_by_pk?: Maybe<Attempts>;
  delete_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  delete_auth_auth_providers_by_pk?: Maybe<Auth_Auth_Providers>;
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  delete_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  delete_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  delete_auth_user_accounts_by_pk?: Maybe<Auth_User_Accounts>;
  delete_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  delete_auth_user_providers_by_pk?: Maybe<Auth_User_Providers>;
  delete_available_jobs?: Maybe<Available_Jobs_Mutation_Response>;
  delete_countries?: Maybe<Countries_Mutation_Response>;
  delete_countries_by_pk?: Maybe<Countries>;
  delete_current_user?: Maybe<Current_User_Mutation_Response>;
  delete_documents?: Maybe<Documents_Mutation_Response>;
  delete_documents_by_pk?: Maybe<Documents>;
  delete_jobs?: Maybe<Jobs_Mutation_Response>;
  delete_jobs_by_pk?: Maybe<Jobs>;
  delete_messages?: Maybe<Messages_Mutation_Response>;
  delete_messages_by_pk?: Maybe<Messages>;
  delete_plans?: Maybe<Plans_Mutation_Response>;
  delete_plans_by_pk?: Maybe<Plans>;
  delete_provinces?: Maybe<Provinces_Mutation_Response>;
  delete_provinces_by_pk?: Maybe<Provinces>;
  delete_ratings?: Maybe<Ratings_Mutation_Response>;
  delete_ratings_by_pk?: Maybe<Ratings>;
  delete_roles?: Maybe<Roles_Mutation_Response>;
  delete_roles_by_pk?: Maybe<Roles>;
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  delete_users?: Maybe<Users_Mutation_Response>;
  delete_users_by_pk?: Maybe<Users>;
  insert_addresses?: Maybe<Addresses_Mutation_Response>;
  insert_addresses_one?: Maybe<Addresses>;
  insert_attempts?: Maybe<Attempts_Mutation_Response>;
  insert_attempts_one?: Maybe<Attempts>;
  insert_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  insert_auth_auth_providers_one?: Maybe<Auth_Auth_Providers>;
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  insert_auth_refresh_tokens_one?: Maybe<Auth_Refresh_Tokens>;
  insert_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  insert_auth_user_accounts_one?: Maybe<Auth_User_Accounts>;
  insert_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  insert_auth_user_providers_one?: Maybe<Auth_User_Providers>;
  insert_available_jobs?: Maybe<Available_Jobs_Mutation_Response>;
  insert_available_jobs_one?: Maybe<Available_Jobs>;
  insert_countries?: Maybe<Countries_Mutation_Response>;
  insert_countries_one?: Maybe<Countries>;
  insert_current_user?: Maybe<Current_User_Mutation_Response>;
  insert_current_user_one?: Maybe<Current_User>;
  insert_documents?: Maybe<Documents_Mutation_Response>;
  insert_documents_one?: Maybe<Documents>;
  insert_jobs?: Maybe<Jobs_Mutation_Response>;
  insert_jobs_one?: Maybe<Jobs>;
  insert_messages?: Maybe<Messages_Mutation_Response>;
  insert_messages_one?: Maybe<Messages>;
  insert_plans?: Maybe<Plans_Mutation_Response>;
  insert_plans_one?: Maybe<Plans>;
  insert_provinces?: Maybe<Provinces_Mutation_Response>;
  insert_provinces_one?: Maybe<Provinces>;
  insert_ratings?: Maybe<Ratings_Mutation_Response>;
  insert_ratings_one?: Maybe<Ratings>;
  insert_roles?: Maybe<Roles_Mutation_Response>;
  insert_roles_one?: Maybe<Roles>;
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  insert_user_roles_one?: Maybe<User_Roles>;
  insert_users?: Maybe<Users_Mutation_Response>;
  insert_users_one?: Maybe<Users>;
  update_addresses?: Maybe<Addresses_Mutation_Response>;
  update_addresses_by_pk?: Maybe<Addresses>;
  update_attempts?: Maybe<Attempts_Mutation_Response>;
  update_attempts_by_pk?: Maybe<Attempts>;
  update_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  update_auth_auth_providers_by_pk?: Maybe<Auth_Auth_Providers>;
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  update_auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  update_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  update_auth_user_accounts_by_pk?: Maybe<Auth_User_Accounts>;
  update_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  update_auth_user_providers_by_pk?: Maybe<Auth_User_Providers>;
  update_available_jobs?: Maybe<Available_Jobs_Mutation_Response>;
  update_countries?: Maybe<Countries_Mutation_Response>;
  update_countries_by_pk?: Maybe<Countries>;
  update_current_user?: Maybe<Current_User_Mutation_Response>;
  update_documents?: Maybe<Documents_Mutation_Response>;
  update_documents_by_pk?: Maybe<Documents>;
  update_jobs?: Maybe<Jobs_Mutation_Response>;
  update_jobs_by_pk?: Maybe<Jobs>;
  update_messages?: Maybe<Messages_Mutation_Response>;
  update_messages_by_pk?: Maybe<Messages>;
  update_plans?: Maybe<Plans_Mutation_Response>;
  update_plans_by_pk?: Maybe<Plans>;
  update_provinces?: Maybe<Provinces_Mutation_Response>;
  update_provinces_by_pk?: Maybe<Provinces>;
  update_ratings?: Maybe<Ratings_Mutation_Response>;
  update_ratings_by_pk?: Maybe<Ratings>;
  update_roles?: Maybe<Roles_Mutation_Response>;
  update_roles_by_pk?: Maybe<Roles>;
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  update_user_roles_by_pk?: Maybe<User_Roles>;
  update_users?: Maybe<Users_Mutation_Response>;
  update_users_by_pk?: Maybe<Users>;
};


export type Mutation_RootDelete_AddressesArgs = {
  where: Addresses_Bool_Exp;
};


export type Mutation_RootDelete_Addresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_AttemptsArgs = {
  where: Attempts_Bool_Exp;
};


export type Mutation_RootDelete_Attempts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Auth_Auth_ProvidersArgs = {
  where: Auth_Auth_Providers_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Mutation_RootDelete_Auth_User_AccountsArgs = {
  where: Auth_User_Accounts_Bool_Exp;
};


export type Mutation_RootDelete_Auth_User_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Auth_User_ProvidersArgs = {
  where: Auth_User_Providers_Bool_Exp;
};


export type Mutation_RootDelete_Auth_User_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Available_JobsArgs = {
  where: Available_Jobs_Bool_Exp;
};


export type Mutation_RootDelete_CountriesArgs = {
  where: Countries_Bool_Exp;
};


export type Mutation_RootDelete_Countries_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_Current_UserArgs = {
  where: Current_User_Bool_Exp;
};


export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


export type Mutation_RootDelete_Documents_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_JobsArgs = {
  where: Jobs_Bool_Exp;
};


export type Mutation_RootDelete_Jobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_PlansArgs = {
  where: Plans_Bool_Exp;
};


export type Mutation_RootDelete_Plans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_ProvincesArgs = {
  where: Provinces_Bool_Exp;
};


export type Mutation_RootDelete_Provinces_By_PkArgs = {
  id: Scalars['String'];
};


export type Mutation_RootDelete_RatingsArgs = {
  where: Ratings_Bool_Exp;
};


export type Mutation_RootDelete_Ratings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


export type Mutation_RootDelete_Roles_By_PkArgs = {
  role: Scalars['String'];
};


export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootInsert_AddressesArgs = {
  objects: Array<Addresses_Insert_Input>;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


export type Mutation_RootInsert_Addresses_OneArgs = {
  object: Addresses_Insert_Input;
  on_conflict?: Maybe<Addresses_On_Conflict>;
};


export type Mutation_RootInsert_AttemptsArgs = {
  objects: Array<Attempts_Insert_Input>;
  on_conflict?: Maybe<Attempts_On_Conflict>;
};


export type Mutation_RootInsert_Attempts_OneArgs = {
  object: Attempts_Insert_Input;
  on_conflict?: Maybe<Attempts_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Auth_ProvidersArgs = {
  objects: Array<Auth_Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Auth_Providers_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Auth_Providers_OneArgs = {
  object: Auth_Auth_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_Auth_Providers_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Refresh_Tokens_OneArgs = {
  object: Auth_Refresh_Tokens_Insert_Input;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_AccountsArgs = {
  objects: Array<Auth_User_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Accounts_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_Accounts_OneArgs = {
  object: Auth_User_Accounts_Insert_Input;
  on_conflict?: Maybe<Auth_User_Accounts_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_ProvidersArgs = {
  objects: Array<Auth_User_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Providers_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_Providers_OneArgs = {
  object: Auth_User_Providers_Insert_Input;
  on_conflict?: Maybe<Auth_User_Providers_On_Conflict>;
};


export type Mutation_RootInsert_Available_JobsArgs = {
  objects: Array<Available_Jobs_Insert_Input>;
};


export type Mutation_RootInsert_Available_Jobs_OneArgs = {
  object: Available_Jobs_Insert_Input;
};


export type Mutation_RootInsert_CountriesArgs = {
  objects: Array<Countries_Insert_Input>;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


export type Mutation_RootInsert_Countries_OneArgs = {
  object: Countries_Insert_Input;
  on_conflict?: Maybe<Countries_On_Conflict>;
};


export type Mutation_RootInsert_Current_UserArgs = {
  objects: Array<Current_User_Insert_Input>;
};


export type Mutation_RootInsert_Current_User_OneArgs = {
  object: Current_User_Insert_Input;
};


export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


export type Mutation_RootInsert_Documents_OneArgs = {
  object: Documents_Insert_Input;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


export type Mutation_RootInsert_JobsArgs = {
  objects: Array<Jobs_Insert_Input>;
  on_conflict?: Maybe<Jobs_On_Conflict>;
};


export type Mutation_RootInsert_Jobs_OneArgs = {
  object: Jobs_Insert_Input;
  on_conflict?: Maybe<Jobs_On_Conflict>;
};


export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


export type Mutation_RootInsert_PlansArgs = {
  objects: Array<Plans_Insert_Input>;
  on_conflict?: Maybe<Plans_On_Conflict>;
};


export type Mutation_RootInsert_Plans_OneArgs = {
  object: Plans_Insert_Input;
  on_conflict?: Maybe<Plans_On_Conflict>;
};


export type Mutation_RootInsert_ProvincesArgs = {
  objects: Array<Provinces_Insert_Input>;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};


export type Mutation_RootInsert_Provinces_OneArgs = {
  object: Provinces_Insert_Input;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};


export type Mutation_RootInsert_RatingsArgs = {
  objects: Array<Ratings_Insert_Input>;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};


export type Mutation_RootInsert_Ratings_OneArgs = {
  object: Ratings_Insert_Input;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};


export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_AddressesArgs = {
  _set?: Maybe<Addresses_Set_Input>;
  where: Addresses_Bool_Exp;
};


export type Mutation_RootUpdate_Addresses_By_PkArgs = {
  _set?: Maybe<Addresses_Set_Input>;
  pk_columns: Addresses_Pk_Columns_Input;
};


export type Mutation_RootUpdate_AttemptsArgs = {
  _set?: Maybe<Attempts_Set_Input>;
  where: Attempts_Bool_Exp;
};


export type Mutation_RootUpdate_Attempts_By_PkArgs = {
  _set?: Maybe<Attempts_Set_Input>;
  pk_columns: Attempts_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Auth_Providers_Set_Input>;
  where: Auth_Auth_Providers_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Auth_Providers_By_PkArgs = {
  _set?: Maybe<Auth_Auth_Providers_Set_Input>;
  pk_columns: Auth_Auth_Providers_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Refresh_Tokens_By_PkArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  pk_columns: Auth_Refresh_Tokens_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_User_AccountsArgs = {
  _set?: Maybe<Auth_User_Accounts_Set_Input>;
  where: Auth_User_Accounts_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_User_Accounts_By_PkArgs = {
  _set?: Maybe<Auth_User_Accounts_Set_Input>;
  pk_columns: Auth_User_Accounts_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Auth_User_ProvidersArgs = {
  _set?: Maybe<Auth_User_Providers_Set_Input>;
  where: Auth_User_Providers_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_User_Providers_By_PkArgs = {
  _set?: Maybe<Auth_User_Providers_Set_Input>;
  pk_columns: Auth_User_Providers_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Available_JobsArgs = {
  _set?: Maybe<Available_Jobs_Set_Input>;
  where: Available_Jobs_Bool_Exp;
};


export type Mutation_RootUpdate_CountriesArgs = {
  _set?: Maybe<Countries_Set_Input>;
  where: Countries_Bool_Exp;
};


export type Mutation_RootUpdate_Countries_By_PkArgs = {
  _set?: Maybe<Countries_Set_Input>;
  pk_columns: Countries_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Current_UserArgs = {
  _append?: Maybe<Current_User_Append_Input>;
  _delete_at_path?: Maybe<Current_User_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Current_User_Delete_Elem_Input>;
  _delete_key?: Maybe<Current_User_Delete_Key_Input>;
  _prepend?: Maybe<Current_User_Prepend_Input>;
  _set?: Maybe<Current_User_Set_Input>;
  where: Current_User_Bool_Exp;
};


export type Mutation_RootUpdate_DocumentsArgs = {
  _set?: Maybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


export type Mutation_RootUpdate_Documents_By_PkArgs = {
  _set?: Maybe<Documents_Set_Input>;
  pk_columns: Documents_Pk_Columns_Input;
};


export type Mutation_RootUpdate_JobsArgs = {
  _set?: Maybe<Jobs_Set_Input>;
  where: Jobs_Bool_Exp;
};


export type Mutation_RootUpdate_Jobs_By_PkArgs = {
  _set?: Maybe<Jobs_Set_Input>;
  pk_columns: Jobs_Pk_Columns_Input;
};


export type Mutation_RootUpdate_MessagesArgs = {
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _set?: Maybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


export type Mutation_RootUpdate_PlansArgs = {
  _inc?: Maybe<Plans_Inc_Input>;
  _set?: Maybe<Plans_Set_Input>;
  where: Plans_Bool_Exp;
};


export type Mutation_RootUpdate_Plans_By_PkArgs = {
  _inc?: Maybe<Plans_Inc_Input>;
  _set?: Maybe<Plans_Set_Input>;
  pk_columns: Plans_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ProvincesArgs = {
  _set?: Maybe<Provinces_Set_Input>;
  where: Provinces_Bool_Exp;
};


export type Mutation_RootUpdate_Provinces_By_PkArgs = {
  _set?: Maybe<Provinces_Set_Input>;
  pk_columns: Provinces_Pk_Columns_Input;
};


export type Mutation_RootUpdate_RatingsArgs = {
  _inc?: Maybe<Ratings_Inc_Input>;
  _set?: Maybe<Ratings_Set_Input>;
  where: Ratings_Bool_Exp;
};


export type Mutation_RootUpdate_Ratings_By_PkArgs = {
  _inc?: Maybe<Ratings_Inc_Input>;
  _set?: Maybe<Ratings_Set_Input>;
  pk_columns: Ratings_Pk_Columns_Input;
};


export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: Maybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: Maybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _set?: Maybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UsersArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: Maybe<Users_Append_Input>;
  _delete_at_path?: Maybe<Users_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Users_Delete_Elem_Input>;
  _delete_key?: Maybe<Users_Delete_Key_Input>;
  _prepend?: Maybe<Users_Prepend_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Plans = {
   __typename?: 'plans';
  attempts: Scalars['Int'];
  bounty: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  duration: Scalars['interval'];
  fee: Scalars['Int'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  order: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

export type Plans_Aggregate = {
   __typename?: 'plans_aggregate';
  aggregate?: Maybe<Plans_Aggregate_Fields>;
  nodes: Array<Plans>;
};

export type Plans_Aggregate_Fields = {
   __typename?: 'plans_aggregate_fields';
  avg?: Maybe<Plans_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Plans_Max_Fields>;
  min?: Maybe<Plans_Min_Fields>;
  stddev?: Maybe<Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Plans_Sum_Fields>;
  var_pop?: Maybe<Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Plans_Var_Samp_Fields>;
  variance?: Maybe<Plans_Variance_Fields>;
};


export type Plans_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Plans_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Plans_Aggregate_Order_By = {
  avg?: Maybe<Plans_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Plans_Max_Order_By>;
  min?: Maybe<Plans_Min_Order_By>;
  stddev?: Maybe<Plans_Stddev_Order_By>;
  stddev_pop?: Maybe<Plans_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Plans_Stddev_Samp_Order_By>;
  sum?: Maybe<Plans_Sum_Order_By>;
  var_pop?: Maybe<Plans_Var_Pop_Order_By>;
  var_samp?: Maybe<Plans_Var_Samp_Order_By>;
  variance?: Maybe<Plans_Variance_Order_By>;
};

export type Plans_Arr_Rel_Insert_Input = {
  data: Array<Plans_Insert_Input>;
  on_conflict?: Maybe<Plans_On_Conflict>;
};

export type Plans_Avg_Fields = {
   __typename?: 'plans_avg_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Avg_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Plans_Bool_Exp>>>;
  _not?: Maybe<Plans_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Plans_Bool_Exp>>>;
  attempts?: Maybe<Int_Comparison_Exp>;
  bounty?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  duration?: Maybe<Interval_Comparison_Exp>;
  fee?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Plans_Constraint {
  PlansOrderKey = 'plans_order_key',
  PlansPkey = 'plans_pkey'
}

export type Plans_Inc_Input = {
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

export type Plans_Insert_Input = {
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['interval']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Plans_Max_Fields = {
   __typename?: 'plans_max_fields';
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Plans_Max_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Plans_Min_Fields = {
   __typename?: 'plans_min_fields';
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Plans_Min_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Plans_Mutation_Response = {
   __typename?: 'plans_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Plans>;
};

export type Plans_Obj_Rel_Insert_Input = {
  data: Plans_Insert_Input;
  on_conflict?: Maybe<Plans_On_Conflict>;
};

export type Plans_On_Conflict = {
  constraint: Plans_Constraint;
  update_columns: Array<Plans_Update_Column>;
  where?: Maybe<Plans_Bool_Exp>;
};

export type Plans_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Plans_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Plans_Select_Column {
  Attempts = 'attempts',
  Bounty = 'bounty',
  CreatedAt = 'created_at',
  Duration = 'duration',
  Fee = 'fee',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  UpdatedAt = 'updated_at'
}

export type Plans_Set_Input = {
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['interval']>;
  fee?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Plans_Stddev_Fields = {
   __typename?: 'plans_stddev_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Stddev_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Stddev_Pop_Fields = {
   __typename?: 'plans_stddev_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Stddev_Pop_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Stddev_Samp_Fields = {
   __typename?: 'plans_stddev_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Stddev_Samp_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Sum_Fields = {
   __typename?: 'plans_sum_fields';
  attempts?: Maybe<Scalars['Int']>;
  bounty?: Maybe<Scalars['Int']>;
  fee?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

export type Plans_Sum_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export enum Plans_Update_Column {
  Attempts = 'attempts',
  Bounty = 'bounty',
  CreatedAt = 'created_at',
  Duration = 'duration',
  Fee = 'fee',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  UpdatedAt = 'updated_at'
}

export type Plans_Var_Pop_Fields = {
   __typename?: 'plans_var_pop_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Var_Pop_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Var_Samp_Fields = {
   __typename?: 'plans_var_samp_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Var_Samp_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Plans_Variance_Fields = {
   __typename?: 'plans_variance_fields';
  attempts?: Maybe<Scalars['Float']>;
  bounty?: Maybe<Scalars['Float']>;
  fee?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

export type Plans_Variance_Order_By = {
  attempts?: Maybe<Order_By>;
  bounty?: Maybe<Order_By>;
  fee?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

export type Provinces = {
   __typename?: 'provinces';
  addresses: Array<Addresses>;
  addresses_aggregate: Addresses_Aggregate;
  id: Scalars['String'];
  name: Scalars['String'];
};


export type ProvincesAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type ProvincesAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};

export type Provinces_Aggregate = {
   __typename?: 'provinces_aggregate';
  aggregate?: Maybe<Provinces_Aggregate_Fields>;
  nodes: Array<Provinces>;
};

export type Provinces_Aggregate_Fields = {
   __typename?: 'provinces_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Provinces_Max_Fields>;
  min?: Maybe<Provinces_Min_Fields>;
};


export type Provinces_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Provinces_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Provinces_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Provinces_Max_Order_By>;
  min?: Maybe<Provinces_Min_Order_By>;
};

export type Provinces_Arr_Rel_Insert_Input = {
  data: Array<Provinces_Insert_Input>;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};

export type Provinces_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Provinces_Bool_Exp>>>;
  _not?: Maybe<Provinces_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Provinces_Bool_Exp>>>;
  addresses?: Maybe<Addresses_Bool_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

export enum Provinces_Constraint {
  ProvincesPkey = 'provinces_pkey'
}

export enum Provinces_Enum {
  Ab = 'AB',
  Bc = 'BC',
  Mb = 'MB',
  Nb = 'NB',
  Nl = 'NL',
  Ns = 'NS',
  Nt = 'NT',
  Nu = 'NU',
  On = 'ON',
  Pe = 'PE',
  Qc = 'QC',
  Sk = 'SK',
  Yt = 'YT'
}

export type Provinces_Enum_Comparison_Exp = {
  _eq?: Maybe<Provinces_Enum>;
  _in?: Maybe<Array<Provinces_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Provinces_Enum>;
  _nin?: Maybe<Array<Provinces_Enum>>;
};

export type Provinces_Insert_Input = {
  addresses?: Maybe<Addresses_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Provinces_Max_Fields = {
   __typename?: 'provinces_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Provinces_Max_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Provinces_Min_Fields = {
   __typename?: 'provinces_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Provinces_Min_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Provinces_Mutation_Response = {
   __typename?: 'provinces_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Provinces>;
};

export type Provinces_Obj_Rel_Insert_Input = {
  data: Provinces_Insert_Input;
  on_conflict?: Maybe<Provinces_On_Conflict>;
};

export type Provinces_On_Conflict = {
  constraint: Provinces_Constraint;
  update_columns: Array<Provinces_Update_Column>;
  where?: Maybe<Provinces_Bool_Exp>;
};

export type Provinces_Order_By = {
  addresses_aggregate?: Maybe<Addresses_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Provinces_Pk_Columns_Input = {
  id: Scalars['String'];
};

export enum Provinces_Select_Column {
  Id = 'id',
  Name = 'name'
}

export type Provinces_Set_Input = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export enum Provinces_Update_Column {
  Id = 'id',
  Name = 'name'
}

export type Query_Root = {
   __typename?: 'query_root';
  addresses: Array<Addresses>;
  addresses_aggregate: Addresses_Aggregate;
  addresses_by_pk?: Maybe<Addresses>;
  attempts: Array<Attempts>;
  attempts_aggregate: Attempts_Aggregate;
  attempts_by_pk?: Maybe<Attempts>;
  auth_auth_providers: Array<Auth_Auth_Providers>;
  auth_auth_providers_aggregate: Auth_Auth_Providers_Aggregate;
  auth_auth_providers_by_pk?: Maybe<Auth_Auth_Providers>;
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  auth_user_accounts: Array<Auth_User_Accounts>;
  auth_user_accounts_aggregate: Auth_User_Accounts_Aggregate;
  auth_user_accounts_by_pk?: Maybe<Auth_User_Accounts>;
  auth_user_providers: Array<Auth_User_Providers>;
  auth_user_providers_aggregate: Auth_User_Providers_Aggregate;
  auth_user_providers_by_pk?: Maybe<Auth_User_Providers>;
  available_jobs: Array<Available_Jobs>;
  available_jobs_aggregate: Available_Jobs_Aggregate;
  countries: Array<Countries>;
  countries_aggregate: Countries_Aggregate;
  countries_by_pk?: Maybe<Countries>;
  current_user: Array<Current_User>;
  current_user_aggregate: Current_User_Aggregate;
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  documents_by_pk?: Maybe<Documents>;
  jobs: Array<Jobs>;
  jobs_aggregate: Jobs_Aggregate;
  jobs_by_pk?: Maybe<Jobs>;
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  plans: Array<Plans>;
  plans_aggregate: Plans_Aggregate;
  plans_by_pk?: Maybe<Plans>;
  provinces: Array<Provinces>;
  provinces_aggregate: Provinces_Aggregate;
  provinces_by_pk?: Maybe<Provinces>;
  ratings: Array<Ratings>;
  ratings_aggregate: Ratings_Aggregate;
  ratings_by_pk?: Maybe<Ratings>;
  roles: Array<Roles>;
  roles_aggregate: Roles_Aggregate;
  roles_by_pk?: Maybe<Roles>;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
  user_roles_by_pk?: Maybe<User_Roles>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Query_RootAddresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAttemptsArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type Query_RootAttempts_AggregateArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type Query_RootAttempts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_Auth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Auth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Auth_Providers_Bool_Exp>;
};


export type Query_RootAuth_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Query_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Query_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootAuth_User_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type Query_RootAuth_User_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type Query_RootAuth_User_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuth_User_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type Query_RootAuth_User_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type Query_RootAuth_User_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAvailable_JobsArgs = {
  distinct_on?: Maybe<Array<Available_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Available_Jobs_Order_By>>;
  where?: Maybe<Available_Jobs_Bool_Exp>;
};


export type Query_RootAvailable_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Available_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Available_Jobs_Order_By>>;
  where?: Maybe<Available_Jobs_Bool_Exp>;
};


export type Query_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


export type Query_RootCountries_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCurrent_UserArgs = {
  distinct_on?: Maybe<Array<Current_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_Order_By>>;
  where?: Maybe<Current_User_Bool_Exp>;
};


export type Query_RootCurrent_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Current_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_Order_By>>;
  where?: Maybe<Current_User_Bool_Exp>;
};


export type Query_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type Query_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootJobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type Query_RootJobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPlansArgs = {
  distinct_on?: Maybe<Array<Plans_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plans_Order_By>>;
  where?: Maybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_AggregateArgs = {
  distinct_on?: Maybe<Array<Plans_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plans_Order_By>>;
  where?: Maybe<Plans_Bool_Exp>;
};


export type Query_RootPlans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProvincesArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


export type Query_RootProvinces_AggregateArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


export type Query_RootProvinces_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Query_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Ratings = {
   __typename?: 'ratings';
  comment?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  job: Jobs;
  job_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  user: Users;
  user_id: Scalars['uuid'];
  value: Scalars['Int'];
};

export type Ratings_Aggregate = {
   __typename?: 'ratings_aggregate';
  aggregate?: Maybe<Ratings_Aggregate_Fields>;
  nodes: Array<Ratings>;
};

export type Ratings_Aggregate_Fields = {
   __typename?: 'ratings_aggregate_fields';
  avg?: Maybe<Ratings_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Ratings_Max_Fields>;
  min?: Maybe<Ratings_Min_Fields>;
  stddev?: Maybe<Ratings_Stddev_Fields>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Fields>;
  sum?: Maybe<Ratings_Sum_Fields>;
  var_pop?: Maybe<Ratings_Var_Pop_Fields>;
  var_samp?: Maybe<Ratings_Var_Samp_Fields>;
  variance?: Maybe<Ratings_Variance_Fields>;
};


export type Ratings_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Ratings_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Ratings_Aggregate_Order_By = {
  avg?: Maybe<Ratings_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Ratings_Max_Order_By>;
  min?: Maybe<Ratings_Min_Order_By>;
  stddev?: Maybe<Ratings_Stddev_Order_By>;
  stddev_pop?: Maybe<Ratings_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Ratings_Stddev_Samp_Order_By>;
  sum?: Maybe<Ratings_Sum_Order_By>;
  var_pop?: Maybe<Ratings_Var_Pop_Order_By>;
  var_samp?: Maybe<Ratings_Var_Samp_Order_By>;
  variance?: Maybe<Ratings_Variance_Order_By>;
};

export type Ratings_Arr_Rel_Insert_Input = {
  data: Array<Ratings_Insert_Input>;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

export type Ratings_Avg_Fields = {
   __typename?: 'ratings_avg_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Avg_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Ratings_Bool_Exp>>>;
  _not?: Maybe<Ratings_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Ratings_Bool_Exp>>>;
  comment?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  job?: Maybe<Jobs_Bool_Exp>;
  job_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
  value?: Maybe<Int_Comparison_Exp>;
};

export enum Ratings_Constraint {
  RatingsPkey = 'ratings_pkey'
}

export type Ratings_Inc_Input = {
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Insert_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job?: Maybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Max_Fields = {
   __typename?: 'ratings_max_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Max_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Ratings_Min_Fields = {
   __typename?: 'ratings_min_fields';
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Min_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Ratings_Mutation_Response = {
   __typename?: 'ratings_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Ratings>;
};

export type Ratings_Obj_Rel_Insert_Input = {
  data: Ratings_Insert_Input;
  on_conflict?: Maybe<Ratings_On_Conflict>;
};

export type Ratings_On_Conflict = {
  constraint: Ratings_Constraint;
  update_columns: Array<Ratings_Update_Column>;
  where?: Maybe<Ratings_Bool_Exp>;
};

export type Ratings_Order_By = {
  comment?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job?: Maybe<Jobs_Order_By>;
  job_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
};

export type Ratings_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Ratings_Select_Column {
  Comment = 'comment',
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Value = 'value'
}

export type Ratings_Set_Input = {
  comment?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Stddev_Fields = {
   __typename?: 'ratings_stddev_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Stddev_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Stddev_Pop_Fields = {
   __typename?: 'ratings_stddev_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Stddev_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Stddev_Samp_Fields = {
   __typename?: 'ratings_stddev_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Stddev_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Sum_Fields = {
   __typename?: 'ratings_sum_fields';
  value?: Maybe<Scalars['Int']>;
};

export type Ratings_Sum_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Ratings_Update_Column {
  Comment = 'comment',
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  UpdatedAt = 'updated_at',
  UserId = 'user_id',
  Value = 'value'
}

export type Ratings_Var_Pop_Fields = {
   __typename?: 'ratings_var_pop_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Var_Pop_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Var_Samp_Fields = {
   __typename?: 'ratings_var_samp_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Var_Samp_Order_By = {
  value?: Maybe<Order_By>;
};

export type Ratings_Variance_Fields = {
   __typename?: 'ratings_variance_fields';
  value?: Maybe<Scalars['Float']>;
};

export type Ratings_Variance_Order_By = {
  value?: Maybe<Order_By>;
};

export type Roles = {
   __typename?: 'roles';
  role: Scalars['String'];
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
};


export type RolesUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type RolesUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type RolesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type RolesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Roles_Aggregate = {
   __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

export type Roles_Aggregate_Fields = {
   __typename?: 'roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


export type Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Roles_Max_Order_By>;
  min?: Maybe<Roles_Min_Order_By>;
};

export type Roles_Arr_Rel_Insert_Input = {
  data: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

export type Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  _not?: Maybe<Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Roles_Bool_Exp>>>;
  role?: Maybe<String_Comparison_Exp>;
  user_roles?: Maybe<User_Roles_Bool_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

export enum Roles_Constraint {
  RolesPkey = 'roles_pkey'
}

export type Roles_Insert_Input = {
  role?: Maybe<Scalars['String']>;
  user_roles?: Maybe<User_Roles_Arr_Rel_Insert_Input>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

export type Roles_Max_Fields = {
   __typename?: 'roles_max_fields';
  role?: Maybe<Scalars['String']>;
};

export type Roles_Max_Order_By = {
  role?: Maybe<Order_By>;
};

export type Roles_Min_Fields = {
   __typename?: 'roles_min_fields';
  role?: Maybe<Scalars['String']>;
};

export type Roles_Min_Order_By = {
  role?: Maybe<Order_By>;
};

export type Roles_Mutation_Response = {
   __typename?: 'roles_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Roles>;
};

export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  on_conflict?: Maybe<Roles_On_Conflict>;
};

export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns: Array<Roles_Update_Column>;
  where?: Maybe<Roles_Bool_Exp>;
};

export type Roles_Order_By = {
  role?: Maybe<Order_By>;
  user_roles_aggregate?: Maybe<User_Roles_Aggregate_Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

export type Roles_Pk_Columns_Input = {
  role: Scalars['String'];
};

export enum Roles_Select_Column {
  Role = 'role'
}

export type Roles_Set_Input = {
  role?: Maybe<Scalars['String']>;
};

export enum Roles_Update_Column {
  Role = 'role'
}

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  addresses: Array<Addresses>;
  addresses_aggregate: Addresses_Aggregate;
  addresses_by_pk?: Maybe<Addresses>;
  attempts: Array<Attempts>;
  attempts_aggregate: Attempts_Aggregate;
  attempts_by_pk?: Maybe<Attempts>;
  auth_auth_providers: Array<Auth_Auth_Providers>;
  auth_auth_providers_aggregate: Auth_Auth_Providers_Aggregate;
  auth_auth_providers_by_pk?: Maybe<Auth_Auth_Providers>;
  auth_refresh_tokens: Array<Auth_Refresh_Tokens>;
  auth_refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  auth_refresh_tokens_by_pk?: Maybe<Auth_Refresh_Tokens>;
  auth_user_accounts: Array<Auth_User_Accounts>;
  auth_user_accounts_aggregate: Auth_User_Accounts_Aggregate;
  auth_user_accounts_by_pk?: Maybe<Auth_User_Accounts>;
  auth_user_providers: Array<Auth_User_Providers>;
  auth_user_providers_aggregate: Auth_User_Providers_Aggregate;
  auth_user_providers_by_pk?: Maybe<Auth_User_Providers>;
  available_jobs: Array<Available_Jobs>;
  available_jobs_aggregate: Available_Jobs_Aggregate;
  countries: Array<Countries>;
  countries_aggregate: Countries_Aggregate;
  countries_by_pk?: Maybe<Countries>;
  current_user: Array<Current_User>;
  current_user_aggregate: Current_User_Aggregate;
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  documents_by_pk?: Maybe<Documents>;
  jobs: Array<Jobs>;
  jobs_aggregate: Jobs_Aggregate;
  jobs_by_pk?: Maybe<Jobs>;
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  plans: Array<Plans>;
  plans_aggregate: Plans_Aggregate;
  plans_by_pk?: Maybe<Plans>;
  provinces: Array<Provinces>;
  provinces_aggregate: Provinces_Aggregate;
  provinces_by_pk?: Maybe<Provinces>;
  ratings: Array<Ratings>;
  ratings_aggregate: Ratings_Aggregate;
  ratings_by_pk?: Maybe<Ratings>;
  roles: Array<Roles>;
  roles_aggregate: Roles_Aggregate;
  roles_by_pk?: Maybe<Roles>;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
  user_roles_by_pk?: Maybe<User_Roles>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAddressesArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_AggregateArgs = {
  distinct_on?: Maybe<Array<Addresses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Addresses_Order_By>>;
  where?: Maybe<Addresses_Bool_Exp>;
};


export type Subscription_RootAddresses_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAttemptsArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type Subscription_RootAttempts_AggregateArgs = {
  distinct_on?: Maybe<Array<Attempts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Attempts_Order_By>>;
  where?: Maybe<Attempts_Bool_Exp>;
};


export type Subscription_RootAttempts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_Auth_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Auth_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Auth_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Auth_Providers_Order_By>>;
  where?: Maybe<Auth_Auth_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_Auth_Providers_By_PkArgs = {
  provider: Scalars['String'];
};


export type Subscription_RootAuth_Refresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootAuth_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootAuth_User_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_User_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type Subscription_RootAuth_User_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuth_User_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_User_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type Subscription_RootAuth_User_Providers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAvailable_JobsArgs = {
  distinct_on?: Maybe<Array<Available_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Available_Jobs_Order_By>>;
  where?: Maybe<Available_Jobs_Bool_Exp>;
};


export type Subscription_RootAvailable_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Available_Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Available_Jobs_Order_By>>;
  where?: Maybe<Available_Jobs_Bool_Exp>;
};


export type Subscription_RootCountriesArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_AggregateArgs = {
  distinct_on?: Maybe<Array<Countries_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Countries_Order_By>>;
  where?: Maybe<Countries_Bool_Exp>;
};


export type Subscription_RootCountries_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootCurrent_UserArgs = {
  distinct_on?: Maybe<Array<Current_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_Order_By>>;
  where?: Maybe<Current_User_Bool_Exp>;
};


export type Subscription_RootCurrent_User_AggregateArgs = {
  distinct_on?: Maybe<Array<Current_User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Current_User_Order_By>>;
  where?: Maybe<Current_User_Bool_Exp>;
};


export type Subscription_RootDocumentsArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_AggregateArgs = {
  distinct_on?: Maybe<Array<Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Documents_Order_By>>;
  where?: Maybe<Documents_Bool_Exp>;
};


export type Subscription_RootDocuments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootJobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type Subscription_RootJobs_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Messages_Order_By>>;
  where?: Maybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPlansArgs = {
  distinct_on?: Maybe<Array<Plans_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plans_Order_By>>;
  where?: Maybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_AggregateArgs = {
  distinct_on?: Maybe<Array<Plans_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Plans_Order_By>>;
  where?: Maybe<Plans_Bool_Exp>;
};


export type Subscription_RootPlans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProvincesArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


export type Subscription_RootProvinces_AggregateArgs = {
  distinct_on?: Maybe<Array<Provinces_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Provinces_Order_By>>;
  where?: Maybe<Provinces_Bool_Exp>;
};


export type Subscription_RootProvinces_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type Subscription_RootRatings_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRolesArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: Maybe<Array<Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Roles_Order_By>>;
  where?: Maybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  role: Scalars['String'];
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type User_Roles = {
   __typename?: 'user_roles';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  roleByRole: Roles;
  user: Users;
  user_id: Scalars['uuid'];
};

export type User_Roles_Aggregate = {
   __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

export type User_Roles_Aggregate_Fields = {
   __typename?: 'user_roles_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
};


export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Roles_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Roles_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Roles_Max_Order_By>;
  min?: Maybe<User_Roles_Min_Order_By>;
};

export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

export type User_Roles_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  _not?: Maybe<User_Roles_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Roles_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  roleByRole?: Maybe<Roles_Bool_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<Uuid_Comparison_Exp>;
};

export enum User_Roles_Constraint {
  UserRolesPkey = 'user_roles_pkey',
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

export type User_Roles_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  roleByRole?: Maybe<Roles_Obj_Rel_Insert_Input>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type User_Roles_Max_Fields = {
   __typename?: 'user_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type User_Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Roles_Min_Fields = {
   __typename?: 'user_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type User_Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Roles_Mutation_Response = {
   __typename?: 'user_roles_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User_Roles>;
};

export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};

export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns: Array<User_Roles_Update_Column>;
  where?: Maybe<User_Roles_Bool_Exp>;
};

export type User_Roles_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  roleByRole?: Maybe<Roles_Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export type User_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum User_Roles_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Role = 'role',
  UserId = 'user_id'
}

export type User_Roles_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum User_Roles_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Role = 'role',
  UserId = 'user_id'
}

export type Users = {
   __typename?: 'users';
  active: Scalars['Boolean'];
  address?: Maybe<Addresses>;
  address_id?: Maybe<Scalars['uuid']>;
  approved: Scalars['Boolean'];
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_role: Scalars['String'];
  display_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled: Scalars['Boolean'];
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  lawyer_jobs: Array<Jobs>;
  lawyer_jobs_aggregate: Jobs_Aggregate;
  name?: Maybe<Scalars['String']>;
  notifications_enabled: Scalars['Boolean'];
  ratings: Array<Ratings>;
  ratings_aggregate: Ratings_Aggregate;
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  register_data?: Maybe<Scalars['jsonb']>;
  role: Roles;
  secret_token: Scalars['uuid'];
  secret_token_expires_at: Scalars['timestamptz'];
  server_jobs: Array<Jobs>;
  server_jobs_aggregate: Jobs_Aggregate;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_accounts: Array<Auth_User_Accounts>;
  user_accounts_aggregate: Auth_User_Accounts_Aggregate;
  user_providers: Array<Auth_User_Providers>;
  user_providers_aggregate: Auth_User_Providers_Aggregate;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
};


export type UsersLawyer_JobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type UsersLawyer_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type UsersRatingsArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type UsersRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Ratings_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Ratings_Order_By>>;
  where?: Maybe<Ratings_Bool_Exp>;
};


export type UsersRefresh_TokensArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type UsersRefresh_Tokens_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_Refresh_Tokens_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_Refresh_Tokens_Order_By>>;
  where?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
};


export type UsersRegister_DataArgs = {
  path?: Maybe<Scalars['String']>;
};


export type UsersServer_JobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type UsersServer_Jobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type UsersUser_AccountsArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type UsersUser_Accounts_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Accounts_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Accounts_Order_By>>;
  where?: Maybe<Auth_User_Accounts_Bool_Exp>;
};


export type UsersUser_ProvidersArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type UsersUser_Providers_AggregateArgs = {
  distinct_on?: Maybe<Array<Auth_User_Providers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Auth_User_Providers_Order_By>>;
  where?: Maybe<Auth_User_Providers_Bool_Exp>;
};


export type UsersUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};


export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Roles_Order_By>>;
  where?: Maybe<User_Roles_Bool_Exp>;
};

export type Users_Aggregate = {
   __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Fields = {
   __typename?: 'users_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
};

export type Users_Append_Input = {
  register_data?: Maybe<Scalars['jsonb']>;
};

export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  active?: Maybe<Boolean_Comparison_Exp>;
  address?: Maybe<Addresses_Bool_Exp>;
  address_id?: Maybe<Uuid_Comparison_Exp>;
  approved?: Maybe<Boolean_Comparison_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  email_notifications_enabled?: Maybe<Boolean_Comparison_Exp>;
  firebase_messaging_token?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  lawyer_jobs?: Maybe<Jobs_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  notifications_enabled?: Maybe<Boolean_Comparison_Exp>;
  ratings?: Maybe<Ratings_Bool_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  register_data?: Maybe<Jsonb_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  secret_token?: Maybe<Uuid_Comparison_Exp>;
  secret_token_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
  server_jobs?: Maybe<Jobs_Bool_Exp>;
  stripe_customer_id?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_accounts?: Maybe<Auth_User_Accounts_Bool_Exp>;
  user_providers?: Maybe<Auth_User_Providers_Bool_Exp>;
  user_roles?: Maybe<User_Roles_Bool_Exp>;
};

export enum Users_Constraint {
  UsersEmailKey = 'users_email_key',
  UsersPkey = 'users_pkey',
  UsersSecretTokenKey = 'users_secret_token_key'
}

export type Users_Delete_At_Path_Input = {
  register_data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Users_Delete_Elem_Input = {
  register_data?: Maybe<Scalars['Int']>;
};

export type Users_Delete_Key_Input = {
  register_data?: Maybe<Scalars['String']>;
};

export type Users_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Addresses_Obj_Rel_Insert_Input>;
  address_id?: Maybe<Scalars['uuid']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled?: Maybe<Scalars['Boolean']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  lawyer_jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  notifications_enabled?: Maybe<Scalars['Boolean']>;
  ratings?: Maybe<Ratings_Arr_Rel_Insert_Input>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  register_data?: Maybe<Scalars['jsonb']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  server_jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_accounts?: Maybe<Auth_User_Accounts_Arr_Rel_Insert_Input>;
  user_providers?: Maybe<Auth_User_Providers_Arr_Rel_Insert_Input>;
  user_roles?: Maybe<User_Roles_Arr_Rel_Insert_Input>;
};

export type Users_Max_Fields = {
   __typename?: 'users_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
  address_id?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
  address_id?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Mutation_Response = {
   __typename?: 'users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Users>;
};

export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

export type Users_Order_By = {
  active?: Maybe<Order_By>;
  address?: Maybe<Addresses_Order_By>;
  address_id?: Maybe<Order_By>;
  approved?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  email_notifications_enabled?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  lawyer_jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  notifications_enabled?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Ratings_Aggregate_Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  register_data?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  server_jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_accounts_aggregate?: Maybe<Auth_User_Accounts_Aggregate_Order_By>;
  user_providers_aggregate?: Maybe<Auth_User_Providers_Aggregate_Order_By>;
  user_roles_aggregate?: Maybe<User_Roles_Aggregate_Order_By>;
};

export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export type Users_Prepend_Input = {
  register_data?: Maybe<Scalars['jsonb']>;
};

export enum Users_Select_Column {
  Active = 'active',
  AddressId = 'address_id',
  Approved = 'approved',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  EmailNotificationsEnabled = 'email_notifications_enabled',
  FirebaseMessagingToken = 'firebase_messaging_token',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  Name = 'name',
  NotificationsEnabled = 'notifications_enabled',
  RegisterData = 'register_data',
  SecretToken = 'secret_token',
  SecretTokenExpiresAt = 'secret_token_expires_at',
  StripeCustomerId = 'stripe_customer_id',
  UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  address_id?: Maybe<Scalars['uuid']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_notifications_enabled?: Maybe<Scalars['Boolean']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  notifications_enabled?: Maybe<Scalars['Boolean']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  Active = 'active',
  AddressId = 'address_id',
  Approved = 'approved',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  EmailNotificationsEnabled = 'email_notifications_enabled',
  FirebaseMessagingToken = 'firebase_messaging_token',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  Name = 'name',
  NotificationsEnabled = 'notifications_enabled',
  RegisterData = 'register_data',
  SecretToken = 'secret_token',
  SecretTokenExpiresAt = 'secret_token_expires_at',
  StripeCustomerId = 'stripe_customer_id',
  UpdatedAt = 'updated_at'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AvailableJobJobFragment = (
  { __typename?: 'available_jobs' }
  & Pick<Available_Jobs, 'id' | 'created_at' | 'pickup_required' | 'target_name'>
  & { target_address: Maybe<(
    { __typename?: 'addresses' }
    & Pick<Addresses, 'id' | 'street' | 'unit' | 'postal_code' | 'city' | 'province'>
  )>, pickup_address: Maybe<(
    { __typename?: 'addresses' }
    & Pick<Addresses, 'id' | 'street' | 'unit' | 'postal_code' | 'city' | 'province'>
  )>, plan: Maybe<(
    { __typename?: 'plans' }
    & Pick<Plans, 'id' | 'attempts' | 'duration'>
  )> }
);

export type ChatMessageMessageFragment = (
  { __typename?: 'messages' }
  & Pick<Messages, 'id' | 'created_at' | 'message' | 'read_at'>
  & { user: (
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  ) }
);

export type ChatMessagesSubscriptionVariables = {
  jobId: Scalars['uuid'];
};


export type ChatMessagesSubscription = (
  { __typename?: 'subscription_root' }
  & { messages: Array<(
    { __typename?: 'messages' }
    & Pick<Messages, 'id'>
    & ChatMessageMessageFragment
  )> }
);

export type JobDetailsPageJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id' | 'target_name' | 'case_number' | 'lawyer_user_id'>
  & { server: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )>, attempts: Array<(
    { __typename?: 'attempts' }
    & Pick<Attempts, 'id' | 'success'>
  )> }
);

export type JobDetailsPageQueryFragment = (
  { __typename?: 'query_root' }
  & PageQueryFragment
);

export type JobStatusIconJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id' | 'created_at'>
  & { attempts: Array<(
    { __typename?: 'attempts' }
    & Pick<Attempts, 'id' | 'success'>
  )>, plan: Maybe<(
    { __typename?: 'plans' }
    & Pick<Plans, 'id' | 'attempts' | 'duration'>
  )> }
);

export type PageQueryFragment = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'firebase_messaging_token' | 'notifications_enabled' | 'approved'>
  )> }
);

export type RateCardJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id'>
  & { ratings: Array<(
    { __typename?: 'ratings' }
    & Pick<Ratings, 'value'>
  )>, server: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )>, lawyer: (
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  ) }
);

export type ClaimJobMutationVariables = {
  jobId: Scalars['uuid'];
};


export type ClaimJobMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'jobs' }
      & Pick<Jobs, 'id' | 'server_user_id'>
      & { server: Maybe<(
        { __typename?: 'users' }
        & Pick<Users, 'id'>
      )> }
    )> }
  )> }
);

export type DeleteDocumentMutationVariables = {
  id: Scalars['uuid'];
};


export type DeleteDocumentMutation = (
  { __typename?: 'mutation_root' }
  & { delete_documents: Maybe<(
    { __typename?: 'documents_mutation_response' }
    & Pick<Documents_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertAddressMutationVariables = {
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  province: Provinces_Enum;
};


export type InsertAddressMutation = (
  { __typename?: 'mutation_root' }
  & { insert_addresses: Maybe<(
    { __typename?: 'addresses_mutation_response' }
    & Pick<Addresses_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id'>
    )> }
  )> }
);

export type InsertAttemptMutationVariables = {
  jobId: Scalars['uuid'];
  attemptedAt: Scalars['timestamptz'];
  success: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
};


export type InsertAttemptMutation = (
  { __typename?: 'mutation_root' }
  & { insert_attempts: Maybe<(
    { __typename?: 'attempts_mutation_response' }
    & Pick<Attempts_Mutation_Response, 'affected_rows'>
  )> }
);

export type InsertDocumentMutationVariables = {
  jobId: Scalars['uuid'];
  title: Scalars['String'];
  url: Scalars['String'];
};


export type InsertDocumentMutation = (
  { __typename?: 'mutation_root' }
  & { insert_documents: Maybe<(
    { __typename?: 'documents_mutation_response' }
    & { returning: Array<(
      { __typename?: 'documents' }
      & Pick<Documents, 'id' | 'title' | 'url'>
    )> }
  )> }
);

export type InsertJobMutationVariables = {};


export type InsertJobMutation = (
  { __typename?: 'mutation_root' }
  & { insert_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & { returning: Array<(
      { __typename?: 'jobs' }
      & Pick<Jobs, 'id'>
    )> }
  )> }
);

export type InsertRatingMutationVariables = {
  jobId: Scalars['uuid'];
  userId: Scalars['uuid'];
  rating?: Maybe<Scalars['Int']>;
  comment?: Maybe<Scalars['String']>;
};


export type InsertRatingMutation = (
  { __typename?: 'mutation_root' }
  & { insert_ratings: Maybe<(
    { __typename?: 'ratings_mutation_response' }
    & Pick<Ratings_Mutation_Response, 'affected_rows'>
  )> }
);

export type MarkMessageReadMutationVariables = {
  messageId: Scalars['uuid'];
};


export type MarkMessageReadMutation = (
  { __typename?: 'mutation_root' }
  & { update_messages: Maybe<(
    { __typename?: 'messages_mutation_response' }
    & Pick<Messages_Mutation_Response, 'affected_rows'>
  )> }
);

export type PostSignupMutationVariables = {
  role: Scalars['String'];
  userId: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
};


export type PostSignupMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user_roles: Maybe<(
    { __typename?: 'user_roles_mutation_response' }
    & Pick<User_Roles_Mutation_Response, 'affected_rows'>
  )>, update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type SendMessageMutationVariables = {
  jobId: Scalars['uuid'];
  message: Scalars['String'];
};


export type SendMessageMutation = (
  { __typename?: 'mutation_root' }
  & { insert_messages: Maybe<(
    { __typename?: 'messages_mutation_response' }
    & Pick<Messages_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetEmailNotificationsEnabledMutationVariables = {
  userId: Scalars['uuid'];
  enabled: Scalars['Boolean'];
};


export type SetEmailNotificationsEnabledMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetFirebaseMessagingTokenMutationVariables = {
  userId: Scalars['uuid'];
  token: Scalars['String'];
  notificationsEnabled: Scalars['Boolean'];
};


export type SetFirebaseMessagingTokenMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetJobPickupRequiredMutationVariables = {
  jobId: Scalars['uuid'];
  addressId: Scalars['uuid'];
};


export type SetJobPickupRequiredMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetJobStripePaymentIntentMutationVariables = {
  jobId: Scalars['uuid'];
  planId: Scalars['uuid'];
  stripePaymentIntentId: Scalars['String'];
  stripePaymentIntentClientSecret: Scalars['String'];
};


export type SetJobStripePaymentIntentMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetJobStripePaymentIntentSucceededMutationVariables = {
  stripePaymentIntentId: Scalars['String'];
};


export type SetJobStripePaymentIntentSucceededMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetJobTargetMutationVariables = {
  jobId: Scalars['uuid'];
  targetName: Scalars['String'];
  addressId: Scalars['uuid'];
  caseNumber?: Maybe<Scalars['String']>;
};


export type SetJobTargetMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'jobs' }
      & Pick<Jobs, 'id' | 'target_name' | 'target_address_id'>
    )> }
  )> }
);

export type SetUserAddressMutationVariables = {
  userId: Scalars['uuid'];
  addressId: Scalars['uuid'];
};


export type SetUserAddressMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type SetStripeCustomerIdMutationVariables = {
  userId: Scalars['uuid'];
  stripeCustomerId: Scalars['String'];
};


export type SetStripeCustomerIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_users: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<Users_Mutation_Response, 'affected_rows'>
  )> }
);

export type JobUpdatedQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobUpdatedQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & { target_address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'city'>
    )> }
  )> }
);

export type JobUpdatedServersQueryVariables = {
  city: Scalars['String'];
};


export type JobUpdatedServersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'firebase_messaging_token' | 'notifications_enabled' | 'email_notifications_enabled' | 'email'>
  )> }
);

export type HasuraMessageInsertedApiQueryVariables = {
  messageId: Scalars['uuid'];
};


export type HasuraMessageInsertedApiQuery = (
  { __typename?: 'query_root' }
  & { message: Maybe<(
    { __typename?: 'messages' }
    & Pick<Messages, 'id' | 'read_at' | 'message'>
    & { user: (
      { __typename?: 'users' }
      & Pick<Users, 'id'>
    ), job: (
      { __typename?: 'jobs' }
      & Pick<Jobs, 'id' | 'target_name'>
      & { server: Maybe<(
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'name' | 'firebase_messaging_token' | 'notifications_enabled' | 'email_notifications_enabled' | 'email'>
      )>, lawyer: (
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'name' | 'firebase_messaging_token' | 'notifications_enabled' | 'email_notifications_enabled' | 'email'>
      ) }
    ) }
  )> }
);

export type SetIntentQueryVariables = {
  jobId: Scalars['uuid'];
  planId: Scalars['uuid'];
};


export type SetIntentQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'stripe_payment_intent_id'>
    & { lawyer: (
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'stripe_customer_id'>
    ) }
  )>, plan: Maybe<(
    { __typename?: 'plans' }
    & Pick<Plans, 'id' | 'fee' | 'bounty'>
  )> }
);

export type IndexPageQueryVariables = {
  userId?: Maybe<Scalars['uuid']>;
};


export type IndexPageQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'approved' | 'address_id'>
  )> }
  & PageQueryFragment
);

export type JobAttemptQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobAttemptQuery = (
  { __typename?: 'query_root' }
  & { jobs_by_pk: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'target_name'>
  )> }
  & PageQueryFragment
);

export type JobDetailsChatQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobDetailsChatQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'notifications_enabled'>
  )>, job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobDetailsPageJobFragment
  )> }
  & JobDetailsPageQueryFragment
);

export type JobDetialsQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobDetialsQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'created_at' | 'description' | 'stripe_payment_intent_succeeded' | 'target_name' | 'pickup_required'>
    & { target_address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id' | 'street' | 'unit' | 'postal_code' | 'city' | 'province'>
    )>, pickup_address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id' | 'street' | 'unit' | 'postal_code' | 'city' | 'province'>
    )>, server: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )>, attempts: Array<(
      { __typename?: 'attempts' }
      & Pick<Attempts, 'id' | 'attempted_at' | 'success' | 'notes' | 'image_url'>
    )>, plan: Maybe<(
      { __typename?: 'plans' }
      & Pick<Plans, 'id' | 'name' | 'attempts' | 'duration'>
    )>, documents: Array<(
      { __typename?: 'documents' }
      & Pick<Documents, 'id' | 'title' | 'url'>
    )> }
    & RateCardJobFragment
    & JobDetailsPageJobFragment
  )> }
  & JobDetailsPageQueryFragment
);

export type JobDetailsSubscriptionVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobDetailsSubscription = (
  { __typename?: 'subscription_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & { messages_aggregate: (
      { __typename?: 'messages_aggregate' }
      & { aggregate: Maybe<(
        { __typename?: 'messages_aggregate_fields' }
        & Pick<Messages_Aggregate_Fields, 'count'>
      )> }
    ) }
  )> }
);

export type JobDetailsReportQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobDetailsReportQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'created_at' | 'target_name'>
    & { target_address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id' | 'street' | 'unit' | 'postal_code' | 'city' | 'province'>
    )>, server: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )>, attempts: Array<(
      { __typename?: 'attempts' }
      & Pick<Attempts, 'id' | 'attempted_at' | 'success' | 'notes' | 'image_url'>
    )>, documents: Array<(
      { __typename?: 'documents' }
      & Pick<Documents, 'id' | 'title'>
    )> }
    & JobDetailsPageJobFragment
  )> }
  & JobDetailsPageQueryFragment
);

export type JobsAvailableJobQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobsAvailableJobQuery = (
  { __typename?: 'query_root' }
  & { available_jobs: Array<(
    { __typename?: 'available_jobs' }
    & Pick<Available_Jobs, 'id'>
    & AvailableJobJobFragment
  )> }
  & JobDetailsPageQueryFragment
);

export type JobsAvailableQueryVariables = {};


export type JobsAvailableQuery = (
  { __typename?: 'query_root' }
  & { available_jobs: Array<(
    { __typename?: 'available_jobs' }
    & Pick<Available_Jobs, 'id'>
    & AvailableJobJobFragment
  )> }
  & PageQueryFragment
);

export type JobsCreateDocumentsQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobsCreateDocumentsQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id'>
    & { address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id' | 'street' | 'unit' | 'city' | 'province'>
      & { postalCode: Addresses['postal_code'] }
    )> }
  )>, job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
  )> }
  & PageQueryFragment
);

export type JobsCreatePaymentQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobsCreatePaymentQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'stripe_payment_intent_client_secret' | 'id'>
    & { plan: Maybe<(
      { __typename?: 'plans' }
      & Pick<Plans, 'id' | 'name' | 'fee' | 'bounty' | 'attempts' | 'duration'>
    )> }
  )> }
  & PageQueryFragment
);

export type JobsCreatePlanQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobsCreatePlanQuery = (
  { __typename?: 'query_root' }
  & { job: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'stripe_payment_intent_client_secret' | 'id'>
  )>, plans: Array<(
    { __typename?: 'plans' }
    & Pick<Plans, 'id' | 'name' | 'fee' | 'bounty' | 'attempts' | 'duration' | 'order'>
  )> }
  & PageQueryFragment
);

export type JobsCreateTargetPageQueryVariables = {};


export type JobsCreateTargetPageQuery = (
  { __typename?: 'query_root' }
  & PageQueryFragment
);

export type JobsListJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id' | 'created_at' | 'case_number' | 'pickup_required' | 'target_name'>
  & { target_address: Maybe<(
    { __typename?: 'addresses' }
    & Pick<Addresses, 'id' | 'street' | 'city' | 'postal_code' | 'province'>
  )>, attempts: Array<(
    { __typename?: 'attempts' }
    & Pick<Attempts, 'id' | 'success'>
  )>, plan: Maybe<(
    { __typename?: 'plans' }
    & Pick<Plans, 'id' | 'duration' | 'attempts'>
  )> }
  & JobStatusIconJobFragment
);

export type JobsListQueryVariables = {
  userId: Scalars['uuid'];
  isLawyer: Scalars['Boolean'];
};


export type JobsListQuery = (
  { __typename?: 'query_root' }
  & { lawyerJobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobsListJobFragment
  )>, serverJobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobsListJobFragment
  )> }
  & PageQueryFragment
);

export type LawyerOnboardingPageQueryVariables = {};


export type LawyerOnboardingPageQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'address_id'>
  )> }
  & PageQueryFragment
);

export type OnboardingPageQueryVariables = {};


export type OnboardingPageQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'address_id'>
  )> }
  & PageQueryFragment
);

export type ServerOnboardingNotificationsQueryVariables = {};


export type ServerOnboardingNotificationsQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'firebase_messaging_token'>
  )> }
  & PageQueryFragment
);

export type PendingApprovalQueryVariables = {
  userId?: Maybe<Scalars['uuid']>;
};


export type PendingApprovalQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'approved'>
  )> }
  & PageQueryFragment
);

export type SettingsPageQueryVariables = {};


export type SettingsPageQuery = (
  { __typename?: 'query_root' }
  & { current_user: Array<(
    { __typename?: 'current_user' }
    & Pick<Current_User, 'id' | 'email_notifications_enabled' | 'notifications_enabled' | 'firebase_messaging_token'>
    & { address: Maybe<(
      { __typename?: 'addresses' }
      & Pick<Addresses, 'id' | 'street' | 'unit' | 'city' | 'province'>
      & { postalCode: Addresses['postal_code'] }
    )> }
  )> }
  & PageQueryFragment
);

export const AvailableJobJobFragmentDoc = gql`
    fragment AvailableJobJob on available_jobs {
  id
  created_at
  pickup_required
  target_name
  target_address {
    id
    street
    unit
    postal_code
    city
    province
  }
  pickup_address {
    id
    street
    unit
    postal_code
    city
    province
  }
  plan {
    id
    attempts
    duration
  }
}
    `;
export const ChatMessageMessageFragmentDoc = gql`
    fragment ChatMessageMessage on messages {
  id
  created_at
  message
  read_at
  user {
    id
    name
  }
}
    `;
export const JobDetailsPageJobFragmentDoc = gql`
    fragment JobDetailsPageJob on jobs {
  id
  target_name
  case_number
  lawyer_user_id
  server {
    id
  }
  attempts {
    id
    success
  }
}
    `;
export const PageQueryFragmentDoc = gql`
    fragment PageQuery on query_root {
  current_user {
    id
    firebase_messaging_token
    notifications_enabled
    approved
  }
}
    `;
export const JobDetailsPageQueryFragmentDoc = gql`
    fragment JobDetailsPageQuery on query_root {
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;
export const RateCardJobFragmentDoc = gql`
    fragment RateCardJob on jobs {
  id
  ratings(where: {user_id: {_neq: $userId}}) {
    value
  }
  server {
    id
    name
  }
  lawyer {
    id
    name
  }
}
    `;
export const JobStatusIconJobFragmentDoc = gql`
    fragment JobStatusIconJob on jobs {
  id
  created_at
  attempts {
    id
    success
  }
  plan {
    id
    attempts
    duration
  }
}
    `;
export const JobsListJobFragmentDoc = gql`
    fragment JobsListJob on jobs {
  id
  created_at
  case_number
  pickup_required
  target_name
  target_address {
    id
    street
    city
    postal_code
    province
  }
  attempts {
    id
    success
  }
  plan {
    id
    duration
    attempts
  }
  ...JobStatusIconJob
}
    ${JobStatusIconJobFragmentDoc}`;
export const ChatMessagesDocument = gql`
    subscription ChatMessages($jobId: uuid!) {
  messages(where: {job_id: {_eq: $jobId}}, order_by: {created_at: asc}) {
    id
    ...ChatMessageMessage
  }
}
    ${ChatMessageMessageFragmentDoc}`;

/**
 * __useChatMessagesSubscription__
 *
 * To run a query within a React component, call `useChatMessagesSubscription` and pass it any options that fit your needs.
 * When your component renders, `useChatMessagesSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatMessagesSubscription({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useChatMessagesSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<ChatMessagesSubscription, ChatMessagesSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<ChatMessagesSubscription, ChatMessagesSubscriptionVariables>(ChatMessagesDocument, baseOptions);
      }
export type ChatMessagesSubscriptionHookResult = ReturnType<typeof useChatMessagesSubscription>;
export type ChatMessagesSubscriptionResult = ApolloReactCommon.SubscriptionResult<ChatMessagesSubscription>;
export const ClaimJobDocument = gql`
    mutation ClaimJob($jobId: uuid!) {
  update_jobs(where: {id: {_eq: $jobId}}) {
    affected_rows
    returning {
      id
      server_user_id
      server {
        id
      }
    }
  }
}
    `;
export type ClaimJobMutationFn = ApolloReactCommon.MutationFunction<ClaimJobMutation, ClaimJobMutationVariables>;

/**
 * __useClaimJobMutation__
 *
 * To run a mutation, you first call `useClaimJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClaimJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [claimJobMutation, { data, loading, error }] = useClaimJobMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useClaimJobMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ClaimJobMutation, ClaimJobMutationVariables>) {
        return ApolloReactHooks.useMutation<ClaimJobMutation, ClaimJobMutationVariables>(ClaimJobDocument, baseOptions);
      }
export type ClaimJobMutationHookResult = ReturnType<typeof useClaimJobMutation>;
export type ClaimJobMutationResult = ApolloReactCommon.MutationResult<ClaimJobMutation>;
export type ClaimJobMutationOptions = ApolloReactCommon.BaseMutationOptions<ClaimJobMutation, ClaimJobMutationVariables>;
export const DeleteDocumentDocument = gql`
    mutation DeleteDocument($id: uuid!) {
  delete_documents(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
    `;
export type DeleteDocumentMutationFn = ApolloReactCommon.MutationFunction<DeleteDocumentMutation, DeleteDocumentMutationVariables>;

/**
 * __useDeleteDocumentMutation__
 *
 * To run a mutation, you first call `useDeleteDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDocumentMutation, { data, loading, error }] = useDeleteDocumentMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteDocumentMutation, DeleteDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteDocumentMutation, DeleteDocumentMutationVariables>(DeleteDocumentDocument, baseOptions);
      }
export type DeleteDocumentMutationHookResult = ReturnType<typeof useDeleteDocumentMutation>;
export type DeleteDocumentMutationResult = ApolloReactCommon.MutationResult<DeleteDocumentMutation>;
export type DeleteDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteDocumentMutation, DeleteDocumentMutationVariables>;
export const InsertAddressDocument = gql`
    mutation InsertAddress($street: String!, $unit: String, $postalCode: String!, $city: String!, $province: provinces_enum!) {
  insert_addresses(objects: {city: $city, street: $street, unit: $unit, postal_code: $postalCode, province: $province}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export type InsertAddressMutationFn = ApolloReactCommon.MutationFunction<InsertAddressMutation, InsertAddressMutationVariables>;

/**
 * __useInsertAddressMutation__
 *
 * To run a mutation, you first call `useInsertAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAddressMutation, { data, loading, error }] = useInsertAddressMutation({
 *   variables: {
 *      street: // value for 'street'
 *      unit: // value for 'unit'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      province: // value for 'province'
 *   },
 * });
 */
export function useInsertAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertAddressMutation, InsertAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertAddressMutation, InsertAddressMutationVariables>(InsertAddressDocument, baseOptions);
      }
export type InsertAddressMutationHookResult = ReturnType<typeof useInsertAddressMutation>;
export type InsertAddressMutationResult = ApolloReactCommon.MutationResult<InsertAddressMutation>;
export type InsertAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertAddressMutation, InsertAddressMutationVariables>;
export const InsertAttemptDocument = gql`
    mutation InsertAttempt($jobId: uuid!, $attemptedAt: timestamptz!, $success: Boolean!, $notes: String, $imageUrl: String) {
  insert_attempts(objects: {attempted_at: $attemptedAt, job_id: $jobId, success: $success, notes: $notes, image_url: $imageUrl}) {
    affected_rows
  }
}
    `;
export type InsertAttemptMutationFn = ApolloReactCommon.MutationFunction<InsertAttemptMutation, InsertAttemptMutationVariables>;

/**
 * __useInsertAttemptMutation__
 *
 * To run a mutation, you first call `useInsertAttemptMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertAttemptMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertAttemptMutation, { data, loading, error }] = useInsertAttemptMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      attemptedAt: // value for 'attemptedAt'
 *      success: // value for 'success'
 *      notes: // value for 'notes'
 *      imageUrl: // value for 'imageUrl'
 *   },
 * });
 */
export function useInsertAttemptMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertAttemptMutation, InsertAttemptMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertAttemptMutation, InsertAttemptMutationVariables>(InsertAttemptDocument, baseOptions);
      }
export type InsertAttemptMutationHookResult = ReturnType<typeof useInsertAttemptMutation>;
export type InsertAttemptMutationResult = ApolloReactCommon.MutationResult<InsertAttemptMutation>;
export type InsertAttemptMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertAttemptMutation, InsertAttemptMutationVariables>;
export const InsertDocumentDocument = gql`
    mutation InsertDocument($jobId: uuid!, $title: String!, $url: String!) {
  insert_documents(objects: {job_id: $jobId, url: $url, title: $title}) {
    returning {
      id
      title
      url
    }
  }
}
    `;
export type InsertDocumentMutationFn = ApolloReactCommon.MutationFunction<InsertDocumentMutation, InsertDocumentMutationVariables>;

/**
 * __useInsertDocumentMutation__
 *
 * To run a mutation, you first call `useInsertDocumentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertDocumentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertDocumentMutation, { data, loading, error }] = useInsertDocumentMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      title: // value for 'title'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useInsertDocumentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertDocumentMutation, InsertDocumentMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertDocumentMutation, InsertDocumentMutationVariables>(InsertDocumentDocument, baseOptions);
      }
export type InsertDocumentMutationHookResult = ReturnType<typeof useInsertDocumentMutation>;
export type InsertDocumentMutationResult = ApolloReactCommon.MutationResult<InsertDocumentMutation>;
export type InsertDocumentMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertDocumentMutation, InsertDocumentMutationVariables>;
export const InsertJobDocument = gql`
    mutation InsertJob {
  insert_jobs(objects: {}) {
    returning {
      id
    }
  }
}
    `;
export type InsertJobMutationFn = ApolloReactCommon.MutationFunction<InsertJobMutation, InsertJobMutationVariables>;

/**
 * __useInsertJobMutation__
 *
 * To run a mutation, you first call `useInsertJobMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertJobMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertJobMutation, { data, loading, error }] = useInsertJobMutation({
 *   variables: {
 *   },
 * });
 */
export function useInsertJobMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertJobMutation, InsertJobMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertJobMutation, InsertJobMutationVariables>(InsertJobDocument, baseOptions);
      }
export type InsertJobMutationHookResult = ReturnType<typeof useInsertJobMutation>;
export type InsertJobMutationResult = ApolloReactCommon.MutationResult<InsertJobMutation>;
export type InsertJobMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertJobMutation, InsertJobMutationVariables>;
export const InsertRatingDocument = gql`
    mutation InsertRating($jobId: uuid!, $userId: uuid!, $rating: Int, $comment: String) {
  insert_ratings(objects: {job_id: $jobId, user_id: $userId, value: $rating, comment: $comment}) {
    affected_rows
  }
}
    `;
export type InsertRatingMutationFn = ApolloReactCommon.MutationFunction<InsertRatingMutation, InsertRatingMutationVariables>;

/**
 * __useInsertRatingMutation__
 *
 * To run a mutation, you first call `useInsertRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRatingMutation, { data, loading, error }] = useInsertRatingMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *      rating: // value for 'rating'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useInsertRatingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertRatingMutation, InsertRatingMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertRatingMutation, InsertRatingMutationVariables>(InsertRatingDocument, baseOptions);
      }
export type InsertRatingMutationHookResult = ReturnType<typeof useInsertRatingMutation>;
export type InsertRatingMutationResult = ApolloReactCommon.MutationResult<InsertRatingMutation>;
export type InsertRatingMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertRatingMutation, InsertRatingMutationVariables>;
export const MarkMessageReadDocument = gql`
    mutation MarkMessageRead($messageId: uuid!) {
  update_messages(where: {id: {_eq: $messageId}}) {
    affected_rows
  }
}
    `;
export type MarkMessageReadMutationFn = ApolloReactCommon.MutationFunction<MarkMessageReadMutation, MarkMessageReadMutationVariables>;

/**
 * __useMarkMessageReadMutation__
 *
 * To run a mutation, you first call `useMarkMessageReadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMarkMessageReadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [markMessageReadMutation, { data, loading, error }] = useMarkMessageReadMutation({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useMarkMessageReadMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MarkMessageReadMutation, MarkMessageReadMutationVariables>) {
        return ApolloReactHooks.useMutation<MarkMessageReadMutation, MarkMessageReadMutationVariables>(MarkMessageReadDocument, baseOptions);
      }
export type MarkMessageReadMutationHookResult = ReturnType<typeof useMarkMessageReadMutation>;
export type MarkMessageReadMutationResult = ApolloReactCommon.MutationResult<MarkMessageReadMutation>;
export type MarkMessageReadMutationOptions = ApolloReactCommon.BaseMutationOptions<MarkMessageReadMutation, MarkMessageReadMutationVariables>;
export const PostSignupDocument = gql`
    mutation PostSignup($role: String!, $userId: uuid!, $name: String) {
  insert_user_roles(objects: [{role: $role, user_id: $userId}]) {
    affected_rows
  }
  update_users(where: {id: {_eq: $userId}}, _set: {default_role: $role, name: $name}) {
    affected_rows
  }
}
    `;
export type PostSignupMutationFn = ApolloReactCommon.MutationFunction<PostSignupMutation, PostSignupMutationVariables>;

/**
 * __usePostSignupMutation__
 *
 * To run a mutation, you first call `usePostSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postSignupMutation, { data, loading, error }] = usePostSignupMutation({
 *   variables: {
 *      role: // value for 'role'
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *   },
 * });
 */
export function usePostSignupMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<PostSignupMutation, PostSignupMutationVariables>) {
        return ApolloReactHooks.useMutation<PostSignupMutation, PostSignupMutationVariables>(PostSignupDocument, baseOptions);
      }
export type PostSignupMutationHookResult = ReturnType<typeof usePostSignupMutation>;
export type PostSignupMutationResult = ApolloReactCommon.MutationResult<PostSignupMutation>;
export type PostSignupMutationOptions = ApolloReactCommon.BaseMutationOptions<PostSignupMutation, PostSignupMutationVariables>;
export const SendMessageDocument = gql`
    mutation SendMessage($jobId: uuid!, $message: String!) {
  insert_messages(objects: {job_id: $jobId, message: $message}) {
    affected_rows
  }
}
    `;
export type SendMessageMutationFn = ApolloReactCommon.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      message: // value for 'message'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        return ApolloReactHooks.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, baseOptions);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = ApolloReactCommon.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = ApolloReactCommon.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const SetEmailNotificationsEnabledDocument = gql`
    mutation SetEmailNotificationsEnabled($userId: uuid!, $enabled: Boolean!) {
  update_users(_set: {email_notifications_enabled: $enabled}, where: {id: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type SetEmailNotificationsEnabledMutationFn = ApolloReactCommon.MutationFunction<SetEmailNotificationsEnabledMutation, SetEmailNotificationsEnabledMutationVariables>;

/**
 * __useSetEmailNotificationsEnabledMutation__
 *
 * To run a mutation, you first call `useSetEmailNotificationsEnabledMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEmailNotificationsEnabledMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEmailNotificationsEnabledMutation, { data, loading, error }] = useSetEmailNotificationsEnabledMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      enabled: // value for 'enabled'
 *   },
 * });
 */
export function useSetEmailNotificationsEnabledMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetEmailNotificationsEnabledMutation, SetEmailNotificationsEnabledMutationVariables>) {
        return ApolloReactHooks.useMutation<SetEmailNotificationsEnabledMutation, SetEmailNotificationsEnabledMutationVariables>(SetEmailNotificationsEnabledDocument, baseOptions);
      }
export type SetEmailNotificationsEnabledMutationHookResult = ReturnType<typeof useSetEmailNotificationsEnabledMutation>;
export type SetEmailNotificationsEnabledMutationResult = ApolloReactCommon.MutationResult<SetEmailNotificationsEnabledMutation>;
export type SetEmailNotificationsEnabledMutationOptions = ApolloReactCommon.BaseMutationOptions<SetEmailNotificationsEnabledMutation, SetEmailNotificationsEnabledMutationVariables>;
export const SetFirebaseMessagingTokenDocument = gql`
    mutation SetFirebaseMessagingToken($userId: uuid!, $token: String!, $notificationsEnabled: Boolean!) {
  update_users(_set: {firebase_messaging_token: $token, notifications_enabled: $notificationsEnabled}, where: {id: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export type SetFirebaseMessagingTokenMutationFn = ApolloReactCommon.MutationFunction<SetFirebaseMessagingTokenMutation, SetFirebaseMessagingTokenMutationVariables>;

/**
 * __useSetFirebaseMessagingTokenMutation__
 *
 * To run a mutation, you first call `useSetFirebaseMessagingTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetFirebaseMessagingTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setFirebaseMessagingTokenMutation, { data, loading, error }] = useSetFirebaseMessagingTokenMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      token: // value for 'token'
 *      notificationsEnabled: // value for 'notificationsEnabled'
 *   },
 * });
 */
export function useSetFirebaseMessagingTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetFirebaseMessagingTokenMutation, SetFirebaseMessagingTokenMutationVariables>) {
        return ApolloReactHooks.useMutation<SetFirebaseMessagingTokenMutation, SetFirebaseMessagingTokenMutationVariables>(SetFirebaseMessagingTokenDocument, baseOptions);
      }
export type SetFirebaseMessagingTokenMutationHookResult = ReturnType<typeof useSetFirebaseMessagingTokenMutation>;
export type SetFirebaseMessagingTokenMutationResult = ApolloReactCommon.MutationResult<SetFirebaseMessagingTokenMutation>;
export type SetFirebaseMessagingTokenMutationOptions = ApolloReactCommon.BaseMutationOptions<SetFirebaseMessagingTokenMutation, SetFirebaseMessagingTokenMutationVariables>;
export const SetJobPickupRequiredDocument = gql`
    mutation SetJobPickupRequired($jobId: uuid!, $addressId: uuid!) {
  update_jobs(where: {id: {_eq: $jobId}}, _set: {pickup_required: true, pickup_address_id: $addressId}) {
    affected_rows
  }
}
    `;
export type SetJobPickupRequiredMutationFn = ApolloReactCommon.MutationFunction<SetJobPickupRequiredMutation, SetJobPickupRequiredMutationVariables>;

/**
 * __useSetJobPickupRequiredMutation__
 *
 * To run a mutation, you first call `useSetJobPickupRequiredMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetJobPickupRequiredMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setJobPickupRequiredMutation, { data, loading, error }] = useSetJobPickupRequiredMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useSetJobPickupRequiredMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetJobPickupRequiredMutation, SetJobPickupRequiredMutationVariables>) {
        return ApolloReactHooks.useMutation<SetJobPickupRequiredMutation, SetJobPickupRequiredMutationVariables>(SetJobPickupRequiredDocument, baseOptions);
      }
export type SetJobPickupRequiredMutationHookResult = ReturnType<typeof useSetJobPickupRequiredMutation>;
export type SetJobPickupRequiredMutationResult = ApolloReactCommon.MutationResult<SetJobPickupRequiredMutation>;
export type SetJobPickupRequiredMutationOptions = ApolloReactCommon.BaseMutationOptions<SetJobPickupRequiredMutation, SetJobPickupRequiredMutationVariables>;
export const SetJobStripePaymentIntentDocument = gql`
    mutation SetJobStripePaymentIntent($jobId: uuid!, $planId: uuid!, $stripePaymentIntentId: String!, $stripePaymentIntentClientSecret: String!) {
  update_jobs(where: {id: {_eq: $jobId}}, _set: {stripe_payment_intent_id: $stripePaymentIntentId, stripe_payment_intent_client_secret: $stripePaymentIntentClientSecret, plan_id: $planId}) {
    affected_rows
  }
}
    `;
export type SetJobStripePaymentIntentMutationFn = ApolloReactCommon.MutationFunction<SetJobStripePaymentIntentMutation, SetJobStripePaymentIntentMutationVariables>;

/**
 * __useSetJobStripePaymentIntentMutation__
 *
 * To run a mutation, you first call `useSetJobStripePaymentIntentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetJobStripePaymentIntentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setJobStripePaymentIntentMutation, { data, loading, error }] = useSetJobStripePaymentIntentMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      planId: // value for 'planId'
 *      stripePaymentIntentId: // value for 'stripePaymentIntentId'
 *      stripePaymentIntentClientSecret: // value for 'stripePaymentIntentClientSecret'
 *   },
 * });
 */
export function useSetJobStripePaymentIntentMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetJobStripePaymentIntentMutation, SetJobStripePaymentIntentMutationVariables>) {
        return ApolloReactHooks.useMutation<SetJobStripePaymentIntentMutation, SetJobStripePaymentIntentMutationVariables>(SetJobStripePaymentIntentDocument, baseOptions);
      }
export type SetJobStripePaymentIntentMutationHookResult = ReturnType<typeof useSetJobStripePaymentIntentMutation>;
export type SetJobStripePaymentIntentMutationResult = ApolloReactCommon.MutationResult<SetJobStripePaymentIntentMutation>;
export type SetJobStripePaymentIntentMutationOptions = ApolloReactCommon.BaseMutationOptions<SetJobStripePaymentIntentMutation, SetJobStripePaymentIntentMutationVariables>;
export const SetJobStripePaymentIntentSucceededDocument = gql`
    mutation SetJobStripePaymentIntentSucceeded($stripePaymentIntentId: String!) {
  update_jobs(where: {stripe_payment_intent_id: {_eq: $stripePaymentIntentId}}, _set: {stripe_payment_intent_succeeded: true}) {
    affected_rows
  }
}
    `;
export type SetJobStripePaymentIntentSucceededMutationFn = ApolloReactCommon.MutationFunction<SetJobStripePaymentIntentSucceededMutation, SetJobStripePaymentIntentSucceededMutationVariables>;

/**
 * __useSetJobStripePaymentIntentSucceededMutation__
 *
 * To run a mutation, you first call `useSetJobStripePaymentIntentSucceededMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetJobStripePaymentIntentSucceededMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setJobStripePaymentIntentSucceededMutation, { data, loading, error }] = useSetJobStripePaymentIntentSucceededMutation({
 *   variables: {
 *      stripePaymentIntentId: // value for 'stripePaymentIntentId'
 *   },
 * });
 */
export function useSetJobStripePaymentIntentSucceededMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetJobStripePaymentIntentSucceededMutation, SetJobStripePaymentIntentSucceededMutationVariables>) {
        return ApolloReactHooks.useMutation<SetJobStripePaymentIntentSucceededMutation, SetJobStripePaymentIntentSucceededMutationVariables>(SetJobStripePaymentIntentSucceededDocument, baseOptions);
      }
export type SetJobStripePaymentIntentSucceededMutationHookResult = ReturnType<typeof useSetJobStripePaymentIntentSucceededMutation>;
export type SetJobStripePaymentIntentSucceededMutationResult = ApolloReactCommon.MutationResult<SetJobStripePaymentIntentSucceededMutation>;
export type SetJobStripePaymentIntentSucceededMutationOptions = ApolloReactCommon.BaseMutationOptions<SetJobStripePaymentIntentSucceededMutation, SetJobStripePaymentIntentSucceededMutationVariables>;
export const SetJobTargetDocument = gql`
    mutation SetJobTarget($jobId: uuid!, $targetName: String!, $addressId: uuid!, $caseNumber: String) {
  update_jobs(where: {id: {_eq: $jobId}}, _set: {target_name: $targetName, target_address_id: $addressId, case_number: $caseNumber}) {
    affected_rows
    returning {
      id
      target_name
      target_address_id
    }
  }
}
    `;
export type SetJobTargetMutationFn = ApolloReactCommon.MutationFunction<SetJobTargetMutation, SetJobTargetMutationVariables>;

/**
 * __useSetJobTargetMutation__
 *
 * To run a mutation, you first call `useSetJobTargetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetJobTargetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setJobTargetMutation, { data, loading, error }] = useSetJobTargetMutation({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      targetName: // value for 'targetName'
 *      addressId: // value for 'addressId'
 *      caseNumber: // value for 'caseNumber'
 *   },
 * });
 */
export function useSetJobTargetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetJobTargetMutation, SetJobTargetMutationVariables>) {
        return ApolloReactHooks.useMutation<SetJobTargetMutation, SetJobTargetMutationVariables>(SetJobTargetDocument, baseOptions);
      }
export type SetJobTargetMutationHookResult = ReturnType<typeof useSetJobTargetMutation>;
export type SetJobTargetMutationResult = ApolloReactCommon.MutationResult<SetJobTargetMutation>;
export type SetJobTargetMutationOptions = ApolloReactCommon.BaseMutationOptions<SetJobTargetMutation, SetJobTargetMutationVariables>;
export const SetUserAddressDocument = gql`
    mutation SetUserAddress($userId: uuid!, $addressId: uuid!) {
  update_users(where: {id: {_eq: $userId}}, _set: {address_id: $addressId}) {
    affected_rows
  }
}
    `;
export type SetUserAddressMutationFn = ApolloReactCommon.MutationFunction<SetUserAddressMutation, SetUserAddressMutationVariables>;

/**
 * __useSetUserAddressMutation__
 *
 * To run a mutation, you first call `useSetUserAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetUserAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setUserAddressMutation, { data, loading, error }] = useSetUserAddressMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      addressId: // value for 'addressId'
 *   },
 * });
 */
export function useSetUserAddressMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetUserAddressMutation, SetUserAddressMutationVariables>) {
        return ApolloReactHooks.useMutation<SetUserAddressMutation, SetUserAddressMutationVariables>(SetUserAddressDocument, baseOptions);
      }
export type SetUserAddressMutationHookResult = ReturnType<typeof useSetUserAddressMutation>;
export type SetUserAddressMutationResult = ApolloReactCommon.MutationResult<SetUserAddressMutation>;
export type SetUserAddressMutationOptions = ApolloReactCommon.BaseMutationOptions<SetUserAddressMutation, SetUserAddressMutationVariables>;
export const SetStripeCustomerIdDocument = gql`
    mutation SetStripeCustomerId($userId: uuid!, $stripeCustomerId: String!) {
  update_users(where: {id: {_eq: $userId}}, _set: {stripe_customer_id: $stripeCustomerId}) {
    affected_rows
  }
}
    `;
export type SetStripeCustomerIdMutationFn = ApolloReactCommon.MutationFunction<SetStripeCustomerIdMutation, SetStripeCustomerIdMutationVariables>;

/**
 * __useSetStripeCustomerIdMutation__
 *
 * To run a mutation, you first call `useSetStripeCustomerIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetStripeCustomerIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setStripeCustomerIdMutation, { data, loading, error }] = useSetStripeCustomerIdMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      stripeCustomerId: // value for 'stripeCustomerId'
 *   },
 * });
 */
export function useSetStripeCustomerIdMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetStripeCustomerIdMutation, SetStripeCustomerIdMutationVariables>) {
        return ApolloReactHooks.useMutation<SetStripeCustomerIdMutation, SetStripeCustomerIdMutationVariables>(SetStripeCustomerIdDocument, baseOptions);
      }
export type SetStripeCustomerIdMutationHookResult = ReturnType<typeof useSetStripeCustomerIdMutation>;
export type SetStripeCustomerIdMutationResult = ApolloReactCommon.MutationResult<SetStripeCustomerIdMutation>;
export type SetStripeCustomerIdMutationOptions = ApolloReactCommon.BaseMutationOptions<SetStripeCustomerIdMutation, SetStripeCustomerIdMutationVariables>;
export const JobUpdatedDocument = gql`
    query JobUpdated($jobId: uuid!) {
  job: jobs_by_pk(id: $jobId) {
    id
    target_address {
      city
    }
  }
}
    `;

/**
 * __useJobUpdatedQuery__
 *
 * To run a query within a React component, call `useJobUpdatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobUpdatedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobUpdatedQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobUpdatedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobUpdatedQuery, JobUpdatedQueryVariables>) {
        return ApolloReactHooks.useQuery<JobUpdatedQuery, JobUpdatedQueryVariables>(JobUpdatedDocument, baseOptions);
      }
export function useJobUpdatedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobUpdatedQuery, JobUpdatedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobUpdatedQuery, JobUpdatedQueryVariables>(JobUpdatedDocument, baseOptions);
        }
export type JobUpdatedQueryHookResult = ReturnType<typeof useJobUpdatedQuery>;
export type JobUpdatedLazyQueryHookResult = ReturnType<typeof useJobUpdatedLazyQuery>;
export type JobUpdatedQueryResult = ApolloReactCommon.QueryResult<JobUpdatedQuery, JobUpdatedQueryVariables>;
export const JobUpdatedServersDocument = gql`
    query JobUpdatedServers($city: String!) {
  users(where: {role: {role: {_eq: "server"}}, firebase_messaging_token: {_is_null: false}, approved: {_eq: true}, address: {city: {_ilike: $city}}, notifications_enabled: {_eq: true}}) {
    id
    name
    firebase_messaging_token
    notifications_enabled
    email_notifications_enabled
    email
  }
}
    `;

/**
 * __useJobUpdatedServersQuery__
 *
 * To run a query within a React component, call `useJobUpdatedServersQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobUpdatedServersQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobUpdatedServersQuery({
 *   variables: {
 *      city: // value for 'city'
 *   },
 * });
 */
export function useJobUpdatedServersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobUpdatedServersQuery, JobUpdatedServersQueryVariables>) {
        return ApolloReactHooks.useQuery<JobUpdatedServersQuery, JobUpdatedServersQueryVariables>(JobUpdatedServersDocument, baseOptions);
      }
export function useJobUpdatedServersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobUpdatedServersQuery, JobUpdatedServersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobUpdatedServersQuery, JobUpdatedServersQueryVariables>(JobUpdatedServersDocument, baseOptions);
        }
export type JobUpdatedServersQueryHookResult = ReturnType<typeof useJobUpdatedServersQuery>;
export type JobUpdatedServersLazyQueryHookResult = ReturnType<typeof useJobUpdatedServersLazyQuery>;
export type JobUpdatedServersQueryResult = ApolloReactCommon.QueryResult<JobUpdatedServersQuery, JobUpdatedServersQueryVariables>;
export const HasuraMessageInsertedApiDocument = gql`
    query HasuraMessageInsertedApi($messageId: uuid!) {
  message: messages_by_pk(id: $messageId) {
    id
    read_at
    message
    user {
      id
    }
    job {
      id
      target_name
      server {
        id
        name
        firebase_messaging_token
        notifications_enabled
        email_notifications_enabled
        email
      }
      lawyer {
        id
        name
        firebase_messaging_token
        notifications_enabled
        email_notifications_enabled
        email
      }
    }
  }
}
    `;

/**
 * __useHasuraMessageInsertedApiQuery__
 *
 * To run a query within a React component, call `useHasuraMessageInsertedApiQuery` and pass it any options that fit your needs.
 * When your component renders, `useHasuraMessageInsertedApiQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHasuraMessageInsertedApiQuery({
 *   variables: {
 *      messageId: // value for 'messageId'
 *   },
 * });
 */
export function useHasuraMessageInsertedApiQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HasuraMessageInsertedApiQuery, HasuraMessageInsertedApiQueryVariables>) {
        return ApolloReactHooks.useQuery<HasuraMessageInsertedApiQuery, HasuraMessageInsertedApiQueryVariables>(HasuraMessageInsertedApiDocument, baseOptions);
      }
export function useHasuraMessageInsertedApiLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HasuraMessageInsertedApiQuery, HasuraMessageInsertedApiQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HasuraMessageInsertedApiQuery, HasuraMessageInsertedApiQueryVariables>(HasuraMessageInsertedApiDocument, baseOptions);
        }
export type HasuraMessageInsertedApiQueryHookResult = ReturnType<typeof useHasuraMessageInsertedApiQuery>;
export type HasuraMessageInsertedApiLazyQueryHookResult = ReturnType<typeof useHasuraMessageInsertedApiLazyQuery>;
export type HasuraMessageInsertedApiQueryResult = ApolloReactCommon.QueryResult<HasuraMessageInsertedApiQuery, HasuraMessageInsertedApiQueryVariables>;
export const SetIntentDocument = gql`
    query SetIntent($jobId: uuid!, $planId: uuid!) {
  job: jobs_by_pk(id: $jobId) {
    id
    stripe_payment_intent_id
    lawyer {
      id
      stripe_customer_id
    }
  }
  plan: plans_by_pk(id: $planId) {
    id
    fee
    bounty
  }
}
    `;

/**
 * __useSetIntentQuery__
 *
 * To run a query within a React component, call `useSetIntentQuery` and pass it any options that fit your needs.
 * When your component renders, `useSetIntentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSetIntentQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useSetIntentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SetIntentQuery, SetIntentQueryVariables>) {
        return ApolloReactHooks.useQuery<SetIntentQuery, SetIntentQueryVariables>(SetIntentDocument, baseOptions);
      }
export function useSetIntentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SetIntentQuery, SetIntentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SetIntentQuery, SetIntentQueryVariables>(SetIntentDocument, baseOptions);
        }
export type SetIntentQueryHookResult = ReturnType<typeof useSetIntentQuery>;
export type SetIntentLazyQueryHookResult = ReturnType<typeof useSetIntentLazyQuery>;
export type SetIntentQueryResult = ApolloReactCommon.QueryResult<SetIntentQuery, SetIntentQueryVariables>;
export const IndexPageDocument = gql`
    query IndexPage($userId: uuid) {
  current_user {
    id
    approved
    address_id
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useIndexPageQuery__
 *
 * To run a query within a React component, call `useIndexPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useIndexPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIndexPageQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useIndexPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<IndexPageQuery, IndexPageQueryVariables>) {
        return ApolloReactHooks.useQuery<IndexPageQuery, IndexPageQueryVariables>(IndexPageDocument, baseOptions);
      }
export function useIndexPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<IndexPageQuery, IndexPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<IndexPageQuery, IndexPageQueryVariables>(IndexPageDocument, baseOptions);
        }
export type IndexPageQueryHookResult = ReturnType<typeof useIndexPageQuery>;
export type IndexPageLazyQueryHookResult = ReturnType<typeof useIndexPageLazyQuery>;
export type IndexPageQueryResult = ApolloReactCommon.QueryResult<IndexPageQuery, IndexPageQueryVariables>;
export const JobAttemptDocument = gql`
    query JobAttempt($jobId: uuid!, $userId: uuid) {
  jobs_by_pk(id: $jobId) {
    id
    target_name
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useJobAttemptQuery__
 *
 * To run a query within a React component, call `useJobAttemptQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobAttemptQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobAttemptQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useJobAttemptQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobAttemptQuery, JobAttemptQueryVariables>) {
        return ApolloReactHooks.useQuery<JobAttemptQuery, JobAttemptQueryVariables>(JobAttemptDocument, baseOptions);
      }
export function useJobAttemptLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobAttemptQuery, JobAttemptQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobAttemptQuery, JobAttemptQueryVariables>(JobAttemptDocument, baseOptions);
        }
export type JobAttemptQueryHookResult = ReturnType<typeof useJobAttemptQuery>;
export type JobAttemptLazyQueryHookResult = ReturnType<typeof useJobAttemptLazyQuery>;
export type JobAttemptQueryResult = ApolloReactCommon.QueryResult<JobAttemptQuery, JobAttemptQueryVariables>;
export const JobDetailsChatDocument = gql`
    query JobDetailsChat($jobId: uuid!) {
  current_user {
    id
    notifications_enabled
  }
  job: jobs_by_pk(id: $jobId) {
    id
    ...JobDetailsPageJob
  }
  ...JobDetailsPageQuery
}
    ${JobDetailsPageJobFragmentDoc}
${JobDetailsPageQueryFragmentDoc}`;

/**
 * __useJobDetailsChatQuery__
 *
 * To run a query within a React component, call `useJobDetailsChatQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobDetailsChatQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetailsChatQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobDetailsChatQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobDetailsChatQuery, JobDetailsChatQueryVariables>) {
        return ApolloReactHooks.useQuery<JobDetailsChatQuery, JobDetailsChatQueryVariables>(JobDetailsChatDocument, baseOptions);
      }
export function useJobDetailsChatLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobDetailsChatQuery, JobDetailsChatQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobDetailsChatQuery, JobDetailsChatQueryVariables>(JobDetailsChatDocument, baseOptions);
        }
export type JobDetailsChatQueryHookResult = ReturnType<typeof useJobDetailsChatQuery>;
export type JobDetailsChatLazyQueryHookResult = ReturnType<typeof useJobDetailsChatLazyQuery>;
export type JobDetailsChatQueryResult = ApolloReactCommon.QueryResult<JobDetailsChatQuery, JobDetailsChatQueryVariables>;
export const JobDetialsDocument = gql`
    query JobDetials($jobId: uuid!, $userId: uuid) {
  job: jobs_by_pk(id: $jobId) {
    id
    created_at
    description
    stripe_payment_intent_succeeded
    target_name
    pickup_required
    target_address {
      id
      street
      unit
      postal_code
      city
      province
    }
    pickup_address {
      id
      street
      unit
      postal_code
      city
      province
    }
    server {
      id
      name
    }
    attempts {
      id
      attempted_at
      success
      notes
      image_url
    }
    plan {
      id
      name
      attempts
      duration
    }
    documents {
      id
      title
      url
    }
    ...RateCardJob
    ...JobDetailsPageJob
  }
  ...JobDetailsPageQuery
}
    ${RateCardJobFragmentDoc}
${JobDetailsPageJobFragmentDoc}
${JobDetailsPageQueryFragmentDoc}`;

/**
 * __useJobDetialsQuery__
 *
 * To run a query within a React component, call `useJobDetialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobDetialsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetialsQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useJobDetialsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobDetialsQuery, JobDetialsQueryVariables>) {
        return ApolloReactHooks.useQuery<JobDetialsQuery, JobDetialsQueryVariables>(JobDetialsDocument, baseOptions);
      }
export function useJobDetialsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobDetialsQuery, JobDetialsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobDetialsQuery, JobDetialsQueryVariables>(JobDetialsDocument, baseOptions);
        }
export type JobDetialsQueryHookResult = ReturnType<typeof useJobDetialsQuery>;
export type JobDetialsLazyQueryHookResult = ReturnType<typeof useJobDetialsLazyQuery>;
export type JobDetialsQueryResult = ApolloReactCommon.QueryResult<JobDetialsQuery, JobDetialsQueryVariables>;
export const JobDetailsDocument = gql`
    subscription JobDetails($jobId: uuid!, $userId: uuid) {
  job: jobs_by_pk(id: $jobId) {
    messages_aggregate(where: {read_at: {_is_null: true}, user_id: {_neq: $userId}}) {
      aggregate {
        count
      }
    }
  }
}
    `;

/**
 * __useJobDetailsSubscription__
 *
 * To run a query within a React component, call `useJobDetailsSubscription` and pass it any options that fit your needs.
 * When your component renders, `useJobDetailsSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetailsSubscription({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useJobDetailsSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<JobDetailsSubscription, JobDetailsSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<JobDetailsSubscription, JobDetailsSubscriptionVariables>(JobDetailsDocument, baseOptions);
      }
export type JobDetailsSubscriptionHookResult = ReturnType<typeof useJobDetailsSubscription>;
export type JobDetailsSubscriptionResult = ApolloReactCommon.SubscriptionResult<JobDetailsSubscription>;
export const JobDetailsReportDocument = gql`
    query JobDetailsReport($jobId: uuid!) {
  job: jobs_by_pk(id: $jobId) {
    id
    created_at
    target_name
    target_address {
      id
      street
      unit
      postal_code
      city
      province
    }
    server {
      id
      name
    }
    attempts {
      id
      attempted_at
      success
      notes
      image_url
    }
    documents {
      id
      title
    }
    ...JobDetailsPageJob
  }
  ...JobDetailsPageQuery
}
    ${JobDetailsPageJobFragmentDoc}
${JobDetailsPageQueryFragmentDoc}`;

/**
 * __useJobDetailsReportQuery__
 *
 * To run a query within a React component, call `useJobDetailsReportQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobDetailsReportQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetailsReportQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobDetailsReportQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobDetailsReportQuery, JobDetailsReportQueryVariables>) {
        return ApolloReactHooks.useQuery<JobDetailsReportQuery, JobDetailsReportQueryVariables>(JobDetailsReportDocument, baseOptions);
      }
export function useJobDetailsReportLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobDetailsReportQuery, JobDetailsReportQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobDetailsReportQuery, JobDetailsReportQueryVariables>(JobDetailsReportDocument, baseOptions);
        }
export type JobDetailsReportQueryHookResult = ReturnType<typeof useJobDetailsReportQuery>;
export type JobDetailsReportLazyQueryHookResult = ReturnType<typeof useJobDetailsReportLazyQuery>;
export type JobDetailsReportQueryResult = ApolloReactCommon.QueryResult<JobDetailsReportQuery, JobDetailsReportQueryVariables>;
export const JobsAvailableJobDocument = gql`
    query JobsAvailableJob($jobId: uuid!) {
  available_jobs(where: {id: {_eq: $jobId}}) {
    id
    ...AvailableJobJob
  }
  ...JobDetailsPageQuery
}
    ${AvailableJobJobFragmentDoc}
${JobDetailsPageQueryFragmentDoc}`;

/**
 * __useJobsAvailableJobQuery__
 *
 * To run a query within a React component, call `useJobsAvailableJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsAvailableJobQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsAvailableJobQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobsAvailableJobQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsAvailableJobQuery, JobsAvailableJobQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsAvailableJobQuery, JobsAvailableJobQueryVariables>(JobsAvailableJobDocument, baseOptions);
      }
export function useJobsAvailableJobLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsAvailableJobQuery, JobsAvailableJobQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsAvailableJobQuery, JobsAvailableJobQueryVariables>(JobsAvailableJobDocument, baseOptions);
        }
export type JobsAvailableJobQueryHookResult = ReturnType<typeof useJobsAvailableJobQuery>;
export type JobsAvailableJobLazyQueryHookResult = ReturnType<typeof useJobsAvailableJobLazyQuery>;
export type JobsAvailableJobQueryResult = ApolloReactCommon.QueryResult<JobsAvailableJobQuery, JobsAvailableJobQueryVariables>;
export const JobsAvailableDocument = gql`
    query JobsAvailable {
  available_jobs(order_by: {created_at: asc}) {
    id
    ...AvailableJobJob
  }
  ...PageQuery
}
    ${AvailableJobJobFragmentDoc}
${PageQueryFragmentDoc}`;

/**
 * __useJobsAvailableQuery__
 *
 * To run a query within a React component, call `useJobsAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsAvailableQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobsAvailableQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsAvailableQuery, JobsAvailableQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsAvailableQuery, JobsAvailableQueryVariables>(JobsAvailableDocument, baseOptions);
      }
export function useJobsAvailableLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsAvailableQuery, JobsAvailableQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsAvailableQuery, JobsAvailableQueryVariables>(JobsAvailableDocument, baseOptions);
        }
export type JobsAvailableQueryHookResult = ReturnType<typeof useJobsAvailableQuery>;
export type JobsAvailableLazyQueryHookResult = ReturnType<typeof useJobsAvailableLazyQuery>;
export type JobsAvailableQueryResult = ApolloReactCommon.QueryResult<JobsAvailableQuery, JobsAvailableQueryVariables>;
export const JobsCreateDocumentsDocument = gql`
    query JobsCreateDocuments($jobId: uuid!) {
  current_user {
    id
    address {
      id
      street
      unit
      postalCode: postal_code
      city
      province
    }
  }
  job: jobs_by_pk(id: $jobId) {
    id
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useJobsCreateDocumentsQuery__
 *
 * To run a query within a React component, call `useJobsCreateDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsCreateDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsCreateDocumentsQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobsCreateDocumentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsCreateDocumentsQuery, JobsCreateDocumentsQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsCreateDocumentsQuery, JobsCreateDocumentsQueryVariables>(JobsCreateDocumentsDocument, baseOptions);
      }
export function useJobsCreateDocumentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsCreateDocumentsQuery, JobsCreateDocumentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsCreateDocumentsQuery, JobsCreateDocumentsQueryVariables>(JobsCreateDocumentsDocument, baseOptions);
        }
export type JobsCreateDocumentsQueryHookResult = ReturnType<typeof useJobsCreateDocumentsQuery>;
export type JobsCreateDocumentsLazyQueryHookResult = ReturnType<typeof useJobsCreateDocumentsLazyQuery>;
export type JobsCreateDocumentsQueryResult = ApolloReactCommon.QueryResult<JobsCreateDocumentsQuery, JobsCreateDocumentsQueryVariables>;
export const JobsCreatePaymentDocument = gql`
    query JobsCreatePayment($jobId: uuid!, $userId: uuid) {
  job: jobs_by_pk(id: $jobId) {
    stripe_payment_intent_client_secret
    id
    plan {
      id
      name
      fee
      bounty
      attempts
      duration
    }
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useJobsCreatePaymentQuery__
 *
 * To run a query within a React component, call `useJobsCreatePaymentQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsCreatePaymentQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsCreatePaymentQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useJobsCreatePaymentQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsCreatePaymentQuery, JobsCreatePaymentQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsCreatePaymentQuery, JobsCreatePaymentQueryVariables>(JobsCreatePaymentDocument, baseOptions);
      }
export function useJobsCreatePaymentLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsCreatePaymentQuery, JobsCreatePaymentQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsCreatePaymentQuery, JobsCreatePaymentQueryVariables>(JobsCreatePaymentDocument, baseOptions);
        }
export type JobsCreatePaymentQueryHookResult = ReturnType<typeof useJobsCreatePaymentQuery>;
export type JobsCreatePaymentLazyQueryHookResult = ReturnType<typeof useJobsCreatePaymentLazyQuery>;
export type JobsCreatePaymentQueryResult = ApolloReactCommon.QueryResult<JobsCreatePaymentQuery, JobsCreatePaymentQueryVariables>;
export const JobsCreatePlanDocument = gql`
    query JobsCreatePlan($jobId: uuid!) {
  job: jobs_by_pk(id: $jobId) {
    stripe_payment_intent_client_secret
    id
  }
  plans(order_by: {order: asc}) {
    id
    name
    fee
    bounty
    attempts
    duration
    order
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useJobsCreatePlanQuery__
 *
 * To run a query within a React component, call `useJobsCreatePlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsCreatePlanQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsCreatePlanQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobsCreatePlanQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsCreatePlanQuery, JobsCreatePlanQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsCreatePlanQuery, JobsCreatePlanQueryVariables>(JobsCreatePlanDocument, baseOptions);
      }
export function useJobsCreatePlanLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsCreatePlanQuery, JobsCreatePlanQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsCreatePlanQuery, JobsCreatePlanQueryVariables>(JobsCreatePlanDocument, baseOptions);
        }
export type JobsCreatePlanQueryHookResult = ReturnType<typeof useJobsCreatePlanQuery>;
export type JobsCreatePlanLazyQueryHookResult = ReturnType<typeof useJobsCreatePlanLazyQuery>;
export type JobsCreatePlanQueryResult = ApolloReactCommon.QueryResult<JobsCreatePlanQuery, JobsCreatePlanQueryVariables>;
export const JobsCreateTargetPageDocument = gql`
    query JobsCreateTargetPage {
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useJobsCreateTargetPageQuery__
 *
 * To run a query within a React component, call `useJobsCreateTargetPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsCreateTargetPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsCreateTargetPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useJobsCreateTargetPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsCreateTargetPageQuery, JobsCreateTargetPageQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsCreateTargetPageQuery, JobsCreateTargetPageQueryVariables>(JobsCreateTargetPageDocument, baseOptions);
      }
export function useJobsCreateTargetPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsCreateTargetPageQuery, JobsCreateTargetPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsCreateTargetPageQuery, JobsCreateTargetPageQueryVariables>(JobsCreateTargetPageDocument, baseOptions);
        }
export type JobsCreateTargetPageQueryHookResult = ReturnType<typeof useJobsCreateTargetPageQuery>;
export type JobsCreateTargetPageLazyQueryHookResult = ReturnType<typeof useJobsCreateTargetPageLazyQuery>;
export type JobsCreateTargetPageQueryResult = ApolloReactCommon.QueryResult<JobsCreateTargetPageQuery, JobsCreateTargetPageQueryVariables>;
export const JobsListDocument = gql`
    query JobsList($userId: uuid!, $isLawyer: Boolean!) {
  lawyerJobs: jobs(order_by: {created_at: desc}, where: {stripe_payment_intent_succeeded: {_eq: true}}) @include(if: $isLawyer) {
    id
    ...JobsListJob
  }
  serverJobs: jobs(order_by: {created_at: desc}, where: {server_user_id: {_eq: $userId}, stripe_payment_intent_succeeded: {_eq: true}}) @skip(if: $isLawyer) {
    id
    ...JobsListJob
  }
  ...PageQuery
}
    ${JobsListJobFragmentDoc}
${PageQueryFragmentDoc}`;

/**
 * __useJobsListQuery__
 *
 * To run a query within a React component, call `useJobsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobsListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobsListQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      isLawyer: // value for 'isLawyer'
 *   },
 * });
 */
export function useJobsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobsListQuery, JobsListQueryVariables>) {
        return ApolloReactHooks.useQuery<JobsListQuery, JobsListQueryVariables>(JobsListDocument, baseOptions);
      }
export function useJobsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobsListQuery, JobsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobsListQuery, JobsListQueryVariables>(JobsListDocument, baseOptions);
        }
export type JobsListQueryHookResult = ReturnType<typeof useJobsListQuery>;
export type JobsListLazyQueryHookResult = ReturnType<typeof useJobsListLazyQuery>;
export type JobsListQueryResult = ApolloReactCommon.QueryResult<JobsListQuery, JobsListQueryVariables>;
export const LawyerOnboardingPageDocument = gql`
    query LawyerOnboardingPage {
  current_user {
    id
    address_id
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useLawyerOnboardingPageQuery__
 *
 * To run a query within a React component, call `useLawyerOnboardingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useLawyerOnboardingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLawyerOnboardingPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useLawyerOnboardingPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LawyerOnboardingPageQuery, LawyerOnboardingPageQueryVariables>) {
        return ApolloReactHooks.useQuery<LawyerOnboardingPageQuery, LawyerOnboardingPageQueryVariables>(LawyerOnboardingPageDocument, baseOptions);
      }
export function useLawyerOnboardingPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LawyerOnboardingPageQuery, LawyerOnboardingPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LawyerOnboardingPageQuery, LawyerOnboardingPageQueryVariables>(LawyerOnboardingPageDocument, baseOptions);
        }
export type LawyerOnboardingPageQueryHookResult = ReturnType<typeof useLawyerOnboardingPageQuery>;
export type LawyerOnboardingPageLazyQueryHookResult = ReturnType<typeof useLawyerOnboardingPageLazyQuery>;
export type LawyerOnboardingPageQueryResult = ApolloReactCommon.QueryResult<LawyerOnboardingPageQuery, LawyerOnboardingPageQueryVariables>;
export const OnboardingPageDocument = gql`
    query OnboardingPage {
  current_user {
    id
    address_id
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useOnboardingPageQuery__
 *
 * To run a query within a React component, call `useOnboardingPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useOnboardingPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnboardingPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useOnboardingPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OnboardingPageQuery, OnboardingPageQueryVariables>) {
        return ApolloReactHooks.useQuery<OnboardingPageQuery, OnboardingPageQueryVariables>(OnboardingPageDocument, baseOptions);
      }
export function useOnboardingPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OnboardingPageQuery, OnboardingPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OnboardingPageQuery, OnboardingPageQueryVariables>(OnboardingPageDocument, baseOptions);
        }
export type OnboardingPageQueryHookResult = ReturnType<typeof useOnboardingPageQuery>;
export type OnboardingPageLazyQueryHookResult = ReturnType<typeof useOnboardingPageLazyQuery>;
export type OnboardingPageQueryResult = ApolloReactCommon.QueryResult<OnboardingPageQuery, OnboardingPageQueryVariables>;
export const ServerOnboardingNotificationsDocument = gql`
    query ServerOnboardingNotifications {
  current_user {
    id
    firebase_messaging_token
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useServerOnboardingNotificationsQuery__
 *
 * To run a query within a React component, call `useServerOnboardingNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useServerOnboardingNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServerOnboardingNotificationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useServerOnboardingNotificationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ServerOnboardingNotificationsQuery, ServerOnboardingNotificationsQueryVariables>) {
        return ApolloReactHooks.useQuery<ServerOnboardingNotificationsQuery, ServerOnboardingNotificationsQueryVariables>(ServerOnboardingNotificationsDocument, baseOptions);
      }
export function useServerOnboardingNotificationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ServerOnboardingNotificationsQuery, ServerOnboardingNotificationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ServerOnboardingNotificationsQuery, ServerOnboardingNotificationsQueryVariables>(ServerOnboardingNotificationsDocument, baseOptions);
        }
export type ServerOnboardingNotificationsQueryHookResult = ReturnType<typeof useServerOnboardingNotificationsQuery>;
export type ServerOnboardingNotificationsLazyQueryHookResult = ReturnType<typeof useServerOnboardingNotificationsLazyQuery>;
export type ServerOnboardingNotificationsQueryResult = ApolloReactCommon.QueryResult<ServerOnboardingNotificationsQuery, ServerOnboardingNotificationsQueryVariables>;
export const PendingApprovalDocument = gql`
    query PendingApproval($userId: uuid) {
  current_user {
    id
    approved
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __usePendingApprovalQuery__
 *
 * To run a query within a React component, call `usePendingApprovalQuery` and pass it any options that fit your needs.
 * When your component renders, `usePendingApprovalQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePendingApprovalQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function usePendingApprovalQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PendingApprovalQuery, PendingApprovalQueryVariables>) {
        return ApolloReactHooks.useQuery<PendingApprovalQuery, PendingApprovalQueryVariables>(PendingApprovalDocument, baseOptions);
      }
export function usePendingApprovalLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PendingApprovalQuery, PendingApprovalQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PendingApprovalQuery, PendingApprovalQueryVariables>(PendingApprovalDocument, baseOptions);
        }
export type PendingApprovalQueryHookResult = ReturnType<typeof usePendingApprovalQuery>;
export type PendingApprovalLazyQueryHookResult = ReturnType<typeof usePendingApprovalLazyQuery>;
export type PendingApprovalQueryResult = ApolloReactCommon.QueryResult<PendingApprovalQuery, PendingApprovalQueryVariables>;
export const SettingsPageDocument = gql`
    query SettingsPage {
  current_user {
    id
    email_notifications_enabled
    notifications_enabled
    firebase_messaging_token
    address {
      id
      street
      unit
      postalCode: postal_code
      city
      province
    }
  }
  ...PageQuery
}
    ${PageQueryFragmentDoc}`;

/**
 * __useSettingsPageQuery__
 *
 * To run a query within a React component, call `useSettingsPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsPageQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SettingsPageQuery, SettingsPageQueryVariables>) {
        return ApolloReactHooks.useQuery<SettingsPageQuery, SettingsPageQueryVariables>(SettingsPageDocument, baseOptions);
      }
export function useSettingsPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SettingsPageQuery, SettingsPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SettingsPageQuery, SettingsPageQueryVariables>(SettingsPageDocument, baseOptions);
        }
export type SettingsPageQueryHookResult = ReturnType<typeof useSettingsPageQuery>;
export type SettingsPageLazyQueryHookResult = ReturnType<typeof useSettingsPageLazyQuery>;
export type SettingsPageQueryResult = ApolloReactCommon.QueryResult<SettingsPageQuery, SettingsPageQueryVariables>;