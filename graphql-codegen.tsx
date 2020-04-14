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
};

export type Attempts = {
   __typename?: 'attempts';
  attempted_at: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  image_url?: Maybe<Scalars['String']>;
  job: Jobs;
  job_id: Scalars['uuid'];
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
  success?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Max_Fields = {
   __typename?: 'attempts_max_fields';
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Max_Order_By = {
  attempted_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Attempts_Min_Fields = {
   __typename?: 'attempts_min_fields';
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  image_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Attempts_Min_Order_By = {
  attempted_at?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  image_url?: Maybe<Order_By>;
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
  success?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Attempts_Select_Column {
  AttemptedAt = 'attempted_at',
  CreatedAt = 'created_at',
  Id = 'id',
  ImageUrl = 'image_url',
  JobId = 'job_id',
  Success = 'success',
  UpdatedAt = 'updated_at'
}

export type Attempts_Set_Input = {
  attempted_at?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  image_url?: Maybe<Scalars['String']>;
  job_id?: Maybe<Scalars['uuid']>;
  success?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Attempts_Update_Column {
  AttemptedAt = 'attempted_at',
  CreatedAt = 'created_at',
  Id = 'id',
  ImageUrl = 'image_url',
  JobId = 'job_id',
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
};

export type Auth_Refresh_Tokens_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
};

export type Auth_Refresh_Tokens_Min_Fields = {
   __typename?: 'auth_refresh_tokens_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
};

export type Auth_Refresh_Tokens_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  expires_at?: Maybe<Order_By>;
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
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

export type Auth_User_Accounts_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  username?: Maybe<Order_By>;
};

export type Auth_User_Accounts_Min_Fields = {
   __typename?: 'auth_user_accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  username?: Maybe<Scalars['String']>;
};

export type Auth_User_Accounts_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Auth_User_Providers_Max_Order_By = {
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Auth_User_Providers_Min_Fields = {
   __typename?: 'auth_user_providers_min_fields';
  auth_provider?: Maybe<Scalars['String']>;
  auth_provider_unique_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Auth_User_Providers_Min_Order_By = {
  auth_provider?: Maybe<Order_By>;
  auth_provider_unique_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export type Documents_Min_Fields = {
   __typename?: 'documents_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Min_Order_By = {
  created_at?: Maybe<Order_By>;
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

export type Jobs = {
   __typename?: 'jobs';
  attempts: Array<Attempts>;
  attempts_aggregate: Attempts_Aggregate;
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  id: Scalars['uuid'];
  lawyer: Users;
  lawyer_user_id: Scalars['uuid'];
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  pickup_city?: Maybe<Scalars['String']>;
  pickup_postal_code?: Maybe<Scalars['String']>;
  pickup_province?: Maybe<Scalars['String']>;
  pickup_required: Scalars['Boolean'];
  pickup_street?: Maybe<Scalars['String']>;
  pickup_unit?: Maybe<Scalars['String']>;
  server?: Maybe<Users>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded: Scalars['Boolean'];
  target?: Maybe<Targets>;
  target_id?: Maybe<Scalars['uuid']>;
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  documents?: Maybe<Documents_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lawyer?: Maybe<Users_Bool_Exp>;
  lawyer_user_id?: Maybe<Uuid_Comparison_Exp>;
  messages?: Maybe<Messages_Bool_Exp>;
  pickup_city?: Maybe<String_Comparison_Exp>;
  pickup_postal_code?: Maybe<String_Comparison_Exp>;
  pickup_province?: Maybe<String_Comparison_Exp>;
  pickup_required?: Maybe<Boolean_Comparison_Exp>;
  pickup_street?: Maybe<String_Comparison_Exp>;
  pickup_unit?: Maybe<String_Comparison_Exp>;
  server?: Maybe<Users_Bool_Exp>;
  server_user_id?: Maybe<Uuid_Comparison_Exp>;
  stripe_payment_intent_client_secret?: Maybe<String_Comparison_Exp>;
  stripe_payment_intent_id?: Maybe<String_Comparison_Exp>;
  stripe_payment_intent_succeeded?: Maybe<Boolean_Comparison_Exp>;
  target?: Maybe<Targets_Bool_Exp>;
  target_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Jobs_Constraint {
  JobsPkey = 'jobs_pkey',
  JobsTargetIdKey = 'jobs_target_id_key'
}

export type Jobs_Insert_Input = {
  attempts?: Maybe<Attempts_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  documents?: Maybe<Documents_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  lawyer?: Maybe<Users_Obj_Rel_Insert_Input>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>;
  pickup_city?: Maybe<Scalars['String']>;
  pickup_postal_code?: Maybe<Scalars['String']>;
  pickup_province?: Maybe<Scalars['String']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  pickup_street?: Maybe<Scalars['String']>;
  pickup_unit?: Maybe<Scalars['String']>;
  server?: Maybe<Users_Obj_Rel_Insert_Input>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Targets_Obj_Rel_Insert_Input>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Fields = {
   __typename?: 'jobs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  pickup_city?: Maybe<Scalars['String']>;
  pickup_postal_code?: Maybe<Scalars['String']>;
  pickup_province?: Maybe<Scalars['String']>;
  pickup_street?: Maybe<Scalars['String']>;
  pickup_unit?: Maybe<Scalars['String']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  pickup_city?: Maybe<Order_By>;
  pickup_postal_code?: Maybe<Order_By>;
  pickup_province?: Maybe<Order_By>;
  pickup_street?: Maybe<Order_By>;
  pickup_unit?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Jobs_Min_Fields = {
   __typename?: 'jobs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  pickup_city?: Maybe<Scalars['String']>;
  pickup_postal_code?: Maybe<Scalars['String']>;
  pickup_province?: Maybe<Scalars['String']>;
  pickup_street?: Maybe<Scalars['String']>;
  pickup_unit?: Maybe<Scalars['String']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  pickup_city?: Maybe<Order_By>;
  pickup_postal_code?: Maybe<Order_By>;
  pickup_province?: Maybe<Order_By>;
  pickup_street?: Maybe<Order_By>;
  pickup_unit?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
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
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  documents_aggregate?: Maybe<Documents_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  lawyer?: Maybe<Users_Order_By>;
  lawyer_user_id?: Maybe<Order_By>;
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>;
  pickup_city?: Maybe<Order_By>;
  pickup_postal_code?: Maybe<Order_By>;
  pickup_province?: Maybe<Order_By>;
  pickup_required?: Maybe<Order_By>;
  pickup_street?: Maybe<Order_By>;
  pickup_unit?: Maybe<Order_By>;
  server?: Maybe<Users_Order_By>;
  server_user_id?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  stripe_payment_intent_succeeded?: Maybe<Order_By>;
  target?: Maybe<Targets_Order_By>;
  target_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Jobs_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  PickupCity = 'pickup_city',
  PickupPostalCode = 'pickup_postal_code',
  PickupProvince = 'pickup_province',
  PickupRequired = 'pickup_required',
  PickupStreet = 'pickup_street',
  PickupUnit = 'pickup_unit',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
  StripePaymentIntentSucceeded = 'stripe_payment_intent_succeeded',
  TargetId = 'target_id',
  UpdatedAt = 'updated_at'
}

export type Jobs_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  pickup_city?: Maybe<Scalars['String']>;
  pickup_postal_code?: Maybe<Scalars['String']>;
  pickup_province?: Maybe<Scalars['String']>;
  pickup_required?: Maybe<Scalars['Boolean']>;
  pickup_street?: Maybe<Scalars['String']>;
  pickup_unit?: Maybe<Scalars['String']>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  stripe_payment_intent_succeeded?: Maybe<Scalars['Boolean']>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Jobs_Update_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  PickupCity = 'pickup_city',
  PickupPostalCode = 'pickup_postal_code',
  PickupProvince = 'pickup_province',
  PickupRequired = 'pickup_required',
  PickupStreet = 'pickup_street',
  PickupUnit = 'pickup_unit',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
  StripePaymentIntentSucceeded = 'stripe_payment_intent_succeeded',
  TargetId = 'target_id',
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
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['uuid']>;
};

export type Messages_Max_Fields = {
   __typename?: 'messages_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  message?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Messages_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Messages_Min_Fields = {
   __typename?: 'messages_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  message?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Messages_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  message?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
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
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

export enum Messages_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Message = 'message',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Messages_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

export enum Messages_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Message = 'message',
  UpdatedAt = 'updated_at',
  UserId = 'user_id'
}

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_attempts?: Maybe<Attempts_Mutation_Response>;
  delete_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  delete_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  delete_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  delete_documents?: Maybe<Documents_Mutation_Response>;
  delete_jobs?: Maybe<Jobs_Mutation_Response>;
  delete_messages?: Maybe<Messages_Mutation_Response>;
  delete_roles?: Maybe<Roles_Mutation_Response>;
  delete_targets?: Maybe<Targets_Mutation_Response>;
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  delete_users?: Maybe<Users_Mutation_Response>;
  insert_attempts?: Maybe<Attempts_Mutation_Response>;
  insert_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  insert_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  insert_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  insert_documents?: Maybe<Documents_Mutation_Response>;
  insert_jobs?: Maybe<Jobs_Mutation_Response>;
  insert_messages?: Maybe<Messages_Mutation_Response>;
  insert_roles?: Maybe<Roles_Mutation_Response>;
  insert_targets?: Maybe<Targets_Mutation_Response>;
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  insert_users?: Maybe<Users_Mutation_Response>;
  update_attempts?: Maybe<Attempts_Mutation_Response>;
  update_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  update_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  update_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  update_documents?: Maybe<Documents_Mutation_Response>;
  update_jobs?: Maybe<Jobs_Mutation_Response>;
  update_messages?: Maybe<Messages_Mutation_Response>;
  update_roles?: Maybe<Roles_Mutation_Response>;
  update_targets?: Maybe<Targets_Mutation_Response>;
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  update_users?: Maybe<Users_Mutation_Response>;
};


export type Mutation_RootDelete_AttemptsArgs = {
  where: Attempts_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Auth_ProvidersArgs = {
  where: Auth_Auth_Providers_Bool_Exp;
};


export type Mutation_RootDelete_Auth_Refresh_TokensArgs = {
  where: Auth_Refresh_Tokens_Bool_Exp;
};


export type Mutation_RootDelete_Auth_User_AccountsArgs = {
  where: Auth_User_Accounts_Bool_Exp;
};


export type Mutation_RootDelete_Auth_User_ProvidersArgs = {
  where: Auth_User_Providers_Bool_Exp;
};


export type Mutation_RootDelete_DocumentsArgs = {
  where: Documents_Bool_Exp;
};


export type Mutation_RootDelete_JobsArgs = {
  where: Jobs_Bool_Exp;
};


export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


export type Mutation_RootDelete_TargetsArgs = {
  where: Targets_Bool_Exp;
};


export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


export type Mutation_RootInsert_AttemptsArgs = {
  objects: Array<Attempts_Insert_Input>;
  on_conflict?: Maybe<Attempts_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Auth_ProvidersArgs = {
  objects: Array<Auth_Auth_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_Auth_Providers_On_Conflict>;
};


export type Mutation_RootInsert_Auth_Refresh_TokensArgs = {
  objects: Array<Auth_Refresh_Tokens_Insert_Input>;
  on_conflict?: Maybe<Auth_Refresh_Tokens_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_AccountsArgs = {
  objects: Array<Auth_User_Accounts_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Accounts_On_Conflict>;
};


export type Mutation_RootInsert_Auth_User_ProvidersArgs = {
  objects: Array<Auth_User_Providers_Insert_Input>;
  on_conflict?: Maybe<Auth_User_Providers_On_Conflict>;
};


export type Mutation_RootInsert_DocumentsArgs = {
  objects: Array<Documents_Insert_Input>;
  on_conflict?: Maybe<Documents_On_Conflict>;
};


export type Mutation_RootInsert_JobsArgs = {
  objects: Array<Jobs_Insert_Input>;
  on_conflict?: Maybe<Jobs_On_Conflict>;
};


export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: Maybe<Messages_On_Conflict>;
};


export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: Maybe<Roles_On_Conflict>;
};


export type Mutation_RootInsert_TargetsArgs = {
  objects: Array<Targets_Insert_Input>;
  on_conflict?: Maybe<Targets_On_Conflict>;
};


export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: Maybe<User_Roles_On_Conflict>;
};


export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


export type Mutation_RootUpdate_AttemptsArgs = {
  _set?: Maybe<Attempts_Set_Input>;
  where: Attempts_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Auth_ProvidersArgs = {
  _set?: Maybe<Auth_Auth_Providers_Set_Input>;
  where: Auth_Auth_Providers_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_Refresh_TokensArgs = {
  _set?: Maybe<Auth_Refresh_Tokens_Set_Input>;
  where: Auth_Refresh_Tokens_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_User_AccountsArgs = {
  _set?: Maybe<Auth_User_Accounts_Set_Input>;
  where: Auth_User_Accounts_Bool_Exp;
};


export type Mutation_RootUpdate_Auth_User_ProvidersArgs = {
  _set?: Maybe<Auth_User_Providers_Set_Input>;
  where: Auth_User_Providers_Bool_Exp;
};


export type Mutation_RootUpdate_DocumentsArgs = {
  _set?: Maybe<Documents_Set_Input>;
  where: Documents_Bool_Exp;
};


export type Mutation_RootUpdate_JobsArgs = {
  _set?: Maybe<Jobs_Set_Input>;
  where: Jobs_Bool_Exp;
};


export type Mutation_RootUpdate_MessagesArgs = {
  _set?: Maybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


export type Mutation_RootUpdate_RolesArgs = {
  _set?: Maybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


export type Mutation_RootUpdate_TargetsArgs = {
  _set?: Maybe<Targets_Set_Input>;
  where: Targets_Bool_Exp;
};


export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: Maybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
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

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
   __typename?: 'query_root';
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
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  documents_by_pk?: Maybe<Documents>;
  jobs: Array<Jobs>;
  jobs_aggregate: Jobs_Aggregate;
  jobs_by_pk?: Maybe<Jobs>;
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  roles: Array<Roles>;
  roles_aggregate: Roles_Aggregate;
  roles_by_pk?: Maybe<Roles>;
  targets: Array<Targets>;
  targets_aggregate: Targets_Aggregate;
  targets_by_pk?: Maybe<Targets>;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
  user_roles_by_pk?: Maybe<User_Roles>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
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


export type Query_RootTargetsArgs = {
  distinct_on?: Maybe<Array<Targets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Targets_Order_By>>;
  where?: Maybe<Targets_Bool_Exp>;
};


export type Query_RootTargets_AggregateArgs = {
  distinct_on?: Maybe<Array<Targets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Targets_Order_By>>;
  where?: Maybe<Targets_Bool_Exp>;
};


export type Query_RootTargets_By_PkArgs = {
  id: Scalars['uuid'];
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
  documents: Array<Documents>;
  documents_aggregate: Documents_Aggregate;
  documents_by_pk?: Maybe<Documents>;
  jobs: Array<Jobs>;
  jobs_aggregate: Jobs_Aggregate;
  jobs_by_pk?: Maybe<Jobs>;
  messages: Array<Messages>;
  messages_aggregate: Messages_Aggregate;
  messages_by_pk?: Maybe<Messages>;
  roles: Array<Roles>;
  roles_aggregate: Roles_Aggregate;
  roles_by_pk?: Maybe<Roles>;
  targets: Array<Targets>;
  targets_aggregate: Targets_Aggregate;
  targets_by_pk?: Maybe<Targets>;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
  user_roles_by_pk?: Maybe<User_Roles>;
  users: Array<Users>;
  users_aggregate: Users_Aggregate;
  users_by_pk?: Maybe<Users>;
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


export type Subscription_RootTargetsArgs = {
  distinct_on?: Maybe<Array<Targets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Targets_Order_By>>;
  where?: Maybe<Targets_Bool_Exp>;
};


export type Subscription_RootTargets_AggregateArgs = {
  distinct_on?: Maybe<Array<Targets_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Targets_Order_By>>;
  where?: Maybe<Targets_Bool_Exp>;
};


export type Subscription_RootTargets_By_PkArgs = {
  id: Scalars['uuid'];
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

export type Targets = {
   __typename?: 'targets';
  city: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  jobs: Array<Jobs>;
  jobs_aggregate: Jobs_Aggregate;
  name: Scalars['String'];
  postal_code: Scalars['String'];
  province: Scalars['String'];
  street: Scalars['String'];
  unit: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


export type TargetsJobsArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};


export type TargetsJobs_AggregateArgs = {
  distinct_on?: Maybe<Array<Jobs_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Jobs_Order_By>>;
  where?: Maybe<Jobs_Bool_Exp>;
};

export type Targets_Aggregate = {
   __typename?: 'targets_aggregate';
  aggregate?: Maybe<Targets_Aggregate_Fields>;
  nodes: Array<Targets>;
};

export type Targets_Aggregate_Fields = {
   __typename?: 'targets_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Targets_Max_Fields>;
  min?: Maybe<Targets_Min_Fields>;
};


export type Targets_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Targets_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Targets_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Targets_Max_Order_By>;
  min?: Maybe<Targets_Min_Order_By>;
};

export type Targets_Arr_Rel_Insert_Input = {
  data: Array<Targets_Insert_Input>;
  on_conflict?: Maybe<Targets_On_Conflict>;
};

export type Targets_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Targets_Bool_Exp>>>;
  _not?: Maybe<Targets_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Targets_Bool_Exp>>>;
  city?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  jobs?: Maybe<Jobs_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  province?: Maybe<String_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Targets_Constraint {
  TargetPkey = 'target_pkey',
  TargetsIdKey = 'targets_id_key'
}

export type Targets_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Targets_Max_Fields = {
   __typename?: 'targets_max_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Targets_Max_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Targets_Min_Fields = {
   __typename?: 'targets_min_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Targets_Min_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Targets_Mutation_Response = {
   __typename?: 'targets_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Targets>;
};

export type Targets_Obj_Rel_Insert_Input = {
  data: Targets_Insert_Input;
  on_conflict?: Maybe<Targets_On_Conflict>;
};

export type Targets_On_Conflict = {
  constraint: Targets_Constraint;
  update_columns: Array<Targets_Update_Column>;
  where?: Maybe<Targets_Bool_Exp>;
};

export type Targets_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Targets_Select_Column {
  City = 'city',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Unit = 'unit',
  UpdatedAt = 'updated_at'
}

export type Targets_Set_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Targets_Update_Column {
  City = 'city',
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Unit = 'unit',
  UpdatedAt = 'updated_at'
}


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
  role?: Maybe<Scalars['String']>;
};

export type User_Roles_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
};

export type User_Roles_Min_Fields = {
   __typename?: 'user_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  role?: Maybe<Scalars['String']>;
};

export type User_Roles_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
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
  approved: Scalars['Boolean'];
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_role: Scalars['String'];
  display_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  lawyer_jobs: Array<Jobs>;
  lawyer_jobs_aggregate: Jobs_Aggregate;
  name?: Maybe<Scalars['String']>;
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
  approved?: Maybe<Boolean_Comparison_Exp>;
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  firebase_messaging_token?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  lawyer_jobs?: Maybe<Jobs_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
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
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  lawyer_jobs?: Maybe<Jobs_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
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
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Max_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
  stripe_customer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Users_Min_Fields = {
   __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Users_Min_Order_By = {
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
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
  approved?: Maybe<Order_By>;
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  firebase_messaging_token?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  lawyer_jobs_aggregate?: Maybe<Jobs_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
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

export type Users_Prepend_Input = {
  register_data?: Maybe<Scalars['jsonb']>;
};

export enum Users_Select_Column {
  Active = 'active',
  Approved = 'approved',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  FirebaseMessagingToken = 'firebase_messaging_token',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  Name = 'name',
  RegisterData = 'register_data',
  SecretToken = 'secret_token',
  SecretTokenExpiresAt = 'secret_token_expires_at',
  StripeCustomerId = 'stripe_customer_id',
  UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  approved?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firebase_messaging_token?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  Active = 'active',
  Approved = 'approved',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  FirebaseMessagingToken = 'firebase_messaging_token',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  Name = 'name',
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

export type ChatMessageMessageFragment = (
  { __typename?: 'messages' }
  & Pick<Messages, 'id' | 'created_at' | 'message'>
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

export type JobCardJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id'>
  & { target: Maybe<(
    { __typename?: 'targets' }
    & Pick<Targets, 'id' | 'name' | 'street' | 'unit' | 'city' | 'province'>
    & { postalCode: Targets['postal_code'] }
  )>, server: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export type JobDetailsPageJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id'>
  & { server: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )>, target: Maybe<(
    { __typename?: 'targets' }
    & Pick<Targets, 'id' | 'name'>
  )> }
);

export type JobDetailsPageUserFragment = (
  { __typename?: 'users' }
  & PageUserFragment
);

export type PageUserFragment = (
  { __typename?: 'users' }
  & Pick<Users, 'id' | 'firebase_messaging_token'>
);

export type ClaimJobMutationVariables = {
  jobId: Scalars['uuid'];
};


export type ClaimJobMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & Pick<Jobs_Mutation_Response, 'affected_rows'>
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

export type InsertAttemptMutationVariables = {
  jobId: Scalars['uuid'];
  attemptedAt: Scalars['timestamptz'];
  success: Scalars['Boolean'];
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

export type InsertTargetMutationVariables = {
  name: Scalars['String'];
  street: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  city: Scalars['String'];
  province: Scalars['String'];
};


export type InsertTargetMutation = (
  { __typename?: 'mutation_root' }
  & { insert_targets: Maybe<(
    { __typename?: 'targets_mutation_response' }
    & { returning: Array<(
      { __typename?: 'targets' }
      & Pick<Targets, 'id'>
    )> }
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

export type SetFirebaseMessagingTokenMutationVariables = {
  userId: Scalars['uuid'];
  token: Scalars['String'];
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
  unit?: Maybe<Scalars['String']>;
  street: Scalars['String'];
  province: Scalars['String'];
  postalCode: Scalars['String'];
  city: Scalars['String'];
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
  id: Scalars['uuid'];
  targetId: Scalars['uuid'];
};


export type SetJobTargetMutation = (
  { __typename?: 'mutation_root' }
  & { update_jobs: Maybe<(
    { __typename?: 'jobs_mutation_response' }
    & { returning: Array<(
      { __typename?: 'jobs' }
      & Pick<Jobs, 'id' | 'target_id'>
    )> }
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

export type JobInsertedQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobInsertedQuery = (
  { __typename?: 'query_root' }
  & { jobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'stripe_payment_intent_id'>
    & { lawyer: (
      { __typename?: 'users' }
      & Pick<Users, 'stripe_customer_id' | 'id'>
    ) }
  )> }
);

export type JobUpdatedQueryVariables = {};


export type JobUpdatedQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'firebase_messaging_token' | 'id'>
  )> }
);

export type IndexPageQueryVariables = {
  userId?: Maybe<Scalars['uuid']>;
};


export type IndexPageQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & PageUserFragment
  )> }
);

export type JobAttemptQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobAttemptQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & PageUserFragment
  )>, jobs_by_pk: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & { target: Maybe<(
      { __typename?: 'targets' }
      & Pick<Targets, 'id' | 'name'>
    )> }
  )> }
);

export type JobDetailsChatQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobDetailsChatQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & JobDetailsPageUserFragment
  )>, jobs_by_pk: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobDetailsPageJobFragment
  )> }
);

export type JobDetailsDocumentsQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobDetailsDocumentsQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & JobDetailsPageUserFragment
  )>, jobs_by_pk: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'pickup_required' | 'pickup_street' | 'pickup_unit' | 'pickup_postal_code' | 'pickup_city' | 'pickup_province'>
    & { documents: Array<(
      { __typename?: 'documents' }
      & Pick<Documents, 'id' | 'title' | 'url'>
    )> }
    & JobDetailsPageJobFragment
  )> }
);

export type JobDetialsQueryVariables = {
  jobId: Scalars['uuid'];
  userId?: Maybe<Scalars['uuid']>;
};


export type JobDetialsQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & JobDetailsPageUserFragment
  )>, jobs_by_pk: Maybe<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id' | 'description' | 'stripe_payment_intent_succeeded'>
    & { target: Maybe<(
      { __typename?: 'targets' }
      & Pick<Targets, 'id' | 'name' | 'street' | 'unit' | 'city' | 'province'>
      & { postalCode: Targets['postal_code'] }
    )>, server: Maybe<(
      { __typename?: 'users' }
      & Pick<Users, 'id' | 'name'>
    )>, attempts: Array<(
      { __typename?: 'attempts' }
      & Pick<Attempts, 'id' | 'attempted_at' | 'success'>
    )> }
    & JobDetailsPageJobFragment
  )> }
);

export type JobsAvailableQueryVariables = {
  userId?: Maybe<Scalars['uuid']>;
};


export type JobsAvailableQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & PageUserFragment
  )>, jobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobCardJobFragment
  )> }
);

export type JobsCreatePaymentQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobsCreatePaymentQuery = (
  { __typename?: 'query_root' }
  & { jobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'stripe_payment_intent_client_secret' | 'id'>
  )> }
);

export type JobsListJobFragment = (
  { __typename?: 'jobs' }
  & Pick<Jobs, 'id' | 'pickup_required'>
  & { target: Maybe<(
    { __typename?: 'targets' }
    & Pick<Targets, 'id' | 'name' | 'street' | 'city' | 'province'>
  )>, successfulAttempts: (
    { __typename?: 'attempts_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'attempts_aggregate_fields' }
      & Pick<Attempts_Aggregate_Fields, 'count'>
    )> }
  ), allAttempts: (
    { __typename?: 'attempts_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'attempts_aggregate_fields' }
      & Pick<Attempts_Aggregate_Fields, 'count'>
    )> }
  ), documents_aggregate: (
    { __typename?: 'documents_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'documents_aggregate_fields' }
      & Pick<Documents_Aggregate_Fields, 'count'>
    )> }
  ) }
);

export type JobsListQueryVariables = {
  userId: Scalars['uuid'];
  isLawyer: Scalars['Boolean'];
};


export type JobsListQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
    & PageUserFragment
  )>, lawyerJobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobsListJobFragment
    & JobCardJobFragment
  )>, serverJobs: Array<(
    { __typename?: 'jobs' }
    & Pick<Jobs, 'id'>
    & JobsListJobFragment
    & JobCardJobFragment
  )> }
);

export const ChatMessageMessageFragmentDoc = gql`
    fragment ChatMessageMessage on messages {
  id
  created_at
  message
  user {
    id
    name
  }
}
    `;
export const JobCardJobFragmentDoc = gql`
    fragment JobCardJob on jobs {
  id
  target {
    id
    name
    street
    unit
    postalCode: postal_code
    city
    province
  }
  server {
    id
  }
}
    `;
export const JobDetailsPageJobFragmentDoc = gql`
    fragment JobDetailsPageJob on jobs {
  id
  server {
    id
  }
  target {
    id
    name
  }
}
    `;
export const PageUserFragmentDoc = gql`
    fragment PageUser on users {
  id
  firebase_messaging_token
}
    `;
export const JobDetailsPageUserFragmentDoc = gql`
    fragment JobDetailsPageUser on users {
  ...PageUser
}
    ${PageUserFragmentDoc}`;
export const JobsListJobFragmentDoc = gql`
    fragment JobsListJob on jobs {
  id
  pickup_required
  target {
    id
    name
    street
    city
    province
  }
  successfulAttempts: attempts_aggregate(where: {success: {_eq: true}}) {
    aggregate {
      count
    }
  }
  allAttempts: attempts_aggregate {
    aggregate {
      count
    }
  }
  documents_aggregate {
    aggregate {
      count
    }
  }
}
    `;
export const ChatMessagesDocument = gql`
    subscription ChatMessages($jobId: uuid!) {
  messages(where: {job_id: {_eq: $jobId}}) {
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
export const InsertAttemptDocument = gql`
    mutation InsertAttempt($jobId: uuid!, $attemptedAt: timestamptz!, $success: Boolean!) {
  insert_attempts(objects: {attempted_at: $attemptedAt, job_id: $jobId, success: $success}) {
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
export const InsertTargetDocument = gql`
    mutation InsertTarget($name: String!, $street: String!, $unit: String, $postalCode: String!, $city: String!, $province: String!) {
  insert_targets(objects: {city: $city, name: $name, street: $street, unit: $unit, postal_code: $postalCode, province: $province}) {
    returning {
      id
    }
  }
}
    `;
export type InsertTargetMutationFn = ApolloReactCommon.MutationFunction<InsertTargetMutation, InsertTargetMutationVariables>;

/**
 * __useInsertTargetMutation__
 *
 * To run a mutation, you first call `useInsertTargetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertTargetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertTargetMutation, { data, loading, error }] = useInsertTargetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      street: // value for 'street'
 *      unit: // value for 'unit'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
 *      province: // value for 'province'
 *   },
 * });
 */
export function useInsertTargetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertTargetMutation, InsertTargetMutationVariables>) {
        return ApolloReactHooks.useMutation<InsertTargetMutation, InsertTargetMutationVariables>(InsertTargetDocument, baseOptions);
      }
export type InsertTargetMutationHookResult = ReturnType<typeof useInsertTargetMutation>;
export type InsertTargetMutationResult = ApolloReactCommon.MutationResult<InsertTargetMutation>;
export type InsertTargetMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertTargetMutation, InsertTargetMutationVariables>;
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
export const SetFirebaseMessagingTokenDocument = gql`
    mutation SetFirebaseMessagingToken($userId: uuid!, $token: String!) {
  update_users(_set: {firebase_messaging_token: $token}, where: {id: {_eq: $userId}}) {
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
    mutation SetJobPickupRequired($jobId: uuid!, $unit: String, $street: String!, $province: String!, $postalCode: String!, $city: String!) {
  update_jobs(where: {id: {_eq: $jobId}}, _set: {pickup_required: true, pickup_unit: $unit, pickup_street: $street, pickup_province: $province, pickup_postal_code: $postalCode, pickup_city: $city}) {
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
 *      unit: // value for 'unit'
 *      street: // value for 'street'
 *      province: // value for 'province'
 *      postalCode: // value for 'postalCode'
 *      city: // value for 'city'
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
    mutation SetJobStripePaymentIntent($jobId: uuid!, $stripePaymentIntentId: String!, $stripePaymentIntentClientSecret: String!) {
  update_jobs(where: {id: {_eq: $jobId}}, _set: {stripe_payment_intent_id: $stripePaymentIntentId, stripe_payment_intent_client_secret: $stripePaymentIntentClientSecret}) {
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
    mutation SetJobTarget($id: uuid!, $targetId: uuid!) {
  update_jobs(where: {id: {_eq: $id}}, _set: {target_id: $targetId}) {
    returning {
      id
      target_id
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
 *      id: // value for 'id'
 *      targetId: // value for 'targetId'
 *   },
 * });
 */
export function useSetJobTargetMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetJobTargetMutation, SetJobTargetMutationVariables>) {
        return ApolloReactHooks.useMutation<SetJobTargetMutation, SetJobTargetMutationVariables>(SetJobTargetDocument, baseOptions);
      }
export type SetJobTargetMutationHookResult = ReturnType<typeof useSetJobTargetMutation>;
export type SetJobTargetMutationResult = ApolloReactCommon.MutationResult<SetJobTargetMutation>;
export type SetJobTargetMutationOptions = ApolloReactCommon.BaseMutationOptions<SetJobTargetMutation, SetJobTargetMutationVariables>;
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
export const JobInsertedDocument = gql`
    query JobInserted($jobId: uuid!) {
  jobs(where: {id: {_eq: $jobId}}) {
    id
    stripe_payment_intent_id
    lawyer {
      stripe_customer_id
      id
    }
  }
}
    `;

/**
 * __useJobInsertedQuery__
 *
 * To run a query within a React component, call `useJobInsertedQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobInsertedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobInsertedQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *   },
 * });
 */
export function useJobInsertedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobInsertedQuery, JobInsertedQueryVariables>) {
        return ApolloReactHooks.useQuery<JobInsertedQuery, JobInsertedQueryVariables>(JobInsertedDocument, baseOptions);
      }
export function useJobInsertedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobInsertedQuery, JobInsertedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobInsertedQuery, JobInsertedQueryVariables>(JobInsertedDocument, baseOptions);
        }
export type JobInsertedQueryHookResult = ReturnType<typeof useJobInsertedQuery>;
export type JobInsertedLazyQueryHookResult = ReturnType<typeof useJobInsertedLazyQuery>;
export type JobInsertedQueryResult = ApolloReactCommon.QueryResult<JobInsertedQuery, JobInsertedQueryVariables>;
export const JobUpdatedDocument = gql`
    query JobUpdated {
  users(where: {role: {role: {_eq: "server"}}, firebase_messaging_token: {_is_null: false}}) {
    firebase_messaging_token
    id
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
export const IndexPageDocument = gql`
    query IndexPage($userId: uuid) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...PageUser
  }
}
    ${PageUserFragmentDoc}`;

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
  users(where: {id: {_eq: $userId}}) {
    id
    ...PageUser
  }
  jobs_by_pk(id: $jobId) {
    id
    target {
      id
      name
    }
  }
}
    ${PageUserFragmentDoc}`;

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
    query JobDetailsChat($jobId: uuid!, $userId: uuid) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...JobDetailsPageUser
  }
  jobs_by_pk(id: $jobId) {
    id
    ...JobDetailsPageJob
  }
}
    ${JobDetailsPageUserFragmentDoc}
${JobDetailsPageJobFragmentDoc}`;

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
 *      userId: // value for 'userId'
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
export const JobDetailsDocumentsDocument = gql`
    query JobDetailsDocuments($jobId: uuid!, $userId: uuid) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...JobDetailsPageUser
  }
  jobs_by_pk(id: $jobId) {
    id
    pickup_required
    pickup_street
    pickup_unit
    pickup_postal_code
    pickup_city
    pickup_province
    documents {
      id
      title
      url
    }
    ...JobDetailsPageJob
  }
}
    ${JobDetailsPageUserFragmentDoc}
${JobDetailsPageJobFragmentDoc}`;

/**
 * __useJobDetailsDocumentsQuery__
 *
 * To run a query within a React component, call `useJobDetailsDocumentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useJobDetailsDocumentsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJobDetailsDocumentsQuery({
 *   variables: {
 *      jobId: // value for 'jobId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useJobDetailsDocumentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JobDetailsDocumentsQuery, JobDetailsDocumentsQueryVariables>) {
        return ApolloReactHooks.useQuery<JobDetailsDocumentsQuery, JobDetailsDocumentsQueryVariables>(JobDetailsDocumentsDocument, baseOptions);
      }
export function useJobDetailsDocumentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JobDetailsDocumentsQuery, JobDetailsDocumentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JobDetailsDocumentsQuery, JobDetailsDocumentsQueryVariables>(JobDetailsDocumentsDocument, baseOptions);
        }
export type JobDetailsDocumentsQueryHookResult = ReturnType<typeof useJobDetailsDocumentsQuery>;
export type JobDetailsDocumentsLazyQueryHookResult = ReturnType<typeof useJobDetailsDocumentsLazyQuery>;
export type JobDetailsDocumentsQueryResult = ApolloReactCommon.QueryResult<JobDetailsDocumentsQuery, JobDetailsDocumentsQueryVariables>;
export const JobDetialsDocument = gql`
    query JobDetials($jobId: uuid!, $userId: uuid) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...JobDetailsPageUser
  }
  jobs_by_pk(id: $jobId) {
    id
    description
    stripe_payment_intent_succeeded
    target {
      id
      name
      street
      unit
      postalCode: postal_code
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
    }
    ...JobDetailsPageJob
  }
}
    ${JobDetailsPageUserFragmentDoc}
${JobDetailsPageJobFragmentDoc}`;

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
export const JobsAvailableDocument = gql`
    query JobsAvailable($userId: uuid) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...PageUser
  }
  jobs(where: {server_user_id: {_is_null: true}, stripe_payment_intent_succeeded: {_eq: true}}, order_by: {created_at: asc}) {
    id
    ...JobCardJob
  }
}
    ${PageUserFragmentDoc}
${JobCardJobFragmentDoc}`;

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
 *      userId: // value for 'userId'
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
export const JobsCreatePaymentDocument = gql`
    query JobsCreatePayment($jobId: uuid!) {
  jobs(where: {id: {_eq: $jobId}}) {
    stripe_payment_intent_client_secret
    id
  }
}
    `;

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
export const JobsListDocument = gql`
    query JobsList($userId: uuid!, $isLawyer: Boolean!) {
  users(where: {id: {_eq: $userId}}) {
    id
    ...PageUser
  }
  lawyerJobs: jobs @include(if: $isLawyer) {
    id
    ...JobsListJob
    ...JobCardJob
  }
  serverJobs: jobs(where: {server_user_id: {_eq: $userId}}) @skip(if: $isLawyer) {
    id
    ...JobsListJob
    ...JobCardJob
  }
}
    ${PageUserFragmentDoc}
${JobsListJobFragmentDoc}
${JobCardJobFragmentDoc}`;

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