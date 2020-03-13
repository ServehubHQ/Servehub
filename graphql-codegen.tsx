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
  city?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  job: Jobs;
  job_id: Scalars['uuid'];
  pickup: Scalars['Boolean'];
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  unit?: Maybe<Scalars['String']>;
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
  city?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  job?: Maybe<Jobs_Bool_Exp>;
  job_id?: Maybe<Uuid_Comparison_Exp>;
  pickup?: Maybe<Boolean_Comparison_Exp>;
  postal_code?: Maybe<String_Comparison_Exp>;
  province?: Maybe<String_Comparison_Exp>;
  street?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

export enum Documents_Constraint {
  DocumentsPkey = 'documents_pkey'
}

export type Documents_Insert_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job?: Maybe<Jobs_Obj_Rel_Insert_Input>;
  job_id?: Maybe<Scalars['uuid']>;
  pickup?: Maybe<Scalars['Boolean']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Max_Fields = {
   __typename?: 'documents_max_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Max_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export type Documents_Min_Fields = {
   __typename?: 'documents_min_fields';
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export type Documents_Min_Order_By = {
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
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
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  job?: Maybe<Jobs_Order_By>;
  job_id?: Maybe<Order_By>;
  pickup?: Maybe<Order_By>;
  postal_code?: Maybe<Order_By>;
  province?: Maybe<Order_By>;
  street?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

export enum Documents_Select_Column {
  City = 'city',
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Pickup = 'pickup',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Title = 'title',
  Unit = 'unit',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type Documents_Set_Input = {
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  job_id?: Maybe<Scalars['uuid']>;
  pickup?: Maybe<Scalars['Boolean']>;
  postal_code?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

export enum Documents_Update_Column {
  City = 'city',
  CreatedAt = 'created_at',
  Id = 'id',
  JobId = 'job_id',
  Pickup = 'pickup',
  PostalCode = 'postal_code',
  Province = 'province',
  Street = 'street',
  Title = 'title',
  Unit = 'unit',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type Jobs = {
   __typename?: 'jobs';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  lawyer: Users;
  lawyer_user_id: Scalars['uuid'];
  server?: Maybe<Users>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  target?: Maybe<Targets>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
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
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lawyer?: Maybe<Users_Bool_Exp>;
  lawyer_user_id?: Maybe<Uuid_Comparison_Exp>;
  server?: Maybe<Users_Bool_Exp>;
  server_user_id?: Maybe<Uuid_Comparison_Exp>;
  stripe_payment_intent_client_secret?: Maybe<String_Comparison_Exp>;
  stripe_payment_intent_id?: Maybe<String_Comparison_Exp>;
  target?: Maybe<Targets_Bool_Exp>;
  target_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Jobs_Constraint {
  JobsPkey = 'jobs_pkey'
}

export type Jobs_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer?: Maybe<Users_Obj_Rel_Insert_Input>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  server?: Maybe<Users_Obj_Rel_Insert_Input>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  target?: Maybe<Targets_Obj_Rel_Insert_Input>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Fields = {
   __typename?: 'jobs_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Jobs_Min_Fields = {
   __typename?: 'jobs_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Jobs_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
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
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lawyer?: Maybe<Users_Order_By>;
  lawyer_user_id?: Maybe<Order_By>;
  server?: Maybe<Users_Order_By>;
  server_user_id?: Maybe<Order_By>;
  stripe_payment_intent_client_secret?: Maybe<Order_By>;
  stripe_payment_intent_id?: Maybe<Order_By>;
  target?: Maybe<Targets_Order_By>;
  target_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Jobs_Select_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
  TargetId = 'target_id',
  UpdatedAt = 'updated_at'
}

export type Jobs_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lawyer_user_id?: Maybe<Scalars['uuid']>;
  server_user_id?: Maybe<Scalars['uuid']>;
  stripe_payment_intent_client_secret?: Maybe<Scalars['String']>;
  stripe_payment_intent_id?: Maybe<Scalars['String']>;
  target_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Jobs_Update_Column {
  CreatedAt = 'created_at',
  Description = 'description',
  Id = 'id',
  LawyerUserId = 'lawyer_user_id',
  ServerUserId = 'server_user_id',
  StripePaymentIntentClientSecret = 'stripe_payment_intent_client_secret',
  StripePaymentIntentId = 'stripe_payment_intent_id',
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

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  delete_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  delete_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  delete_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  delete_documents?: Maybe<Documents_Mutation_Response>;
  delete_jobs?: Maybe<Jobs_Mutation_Response>;
  delete_roles?: Maybe<Roles_Mutation_Response>;
  delete_targets?: Maybe<Targets_Mutation_Response>;
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  delete_users?: Maybe<Users_Mutation_Response>;
  insert_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  insert_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  insert_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  insert_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  insert_documents?: Maybe<Documents_Mutation_Response>;
  insert_jobs?: Maybe<Jobs_Mutation_Response>;
  insert_roles?: Maybe<Roles_Mutation_Response>;
  insert_targets?: Maybe<Targets_Mutation_Response>;
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  insert_users?: Maybe<Users_Mutation_Response>;
  update_auth_auth_providers?: Maybe<Auth_Auth_Providers_Mutation_Response>;
  update_auth_refresh_tokens?: Maybe<Auth_Refresh_Tokens_Mutation_Response>;
  update_auth_user_accounts?: Maybe<Auth_User_Accounts_Mutation_Response>;
  update_auth_user_providers?: Maybe<Auth_User_Providers_Mutation_Response>;
  update_documents?: Maybe<Documents_Mutation_Response>;
  update_jobs?: Maybe<Jobs_Mutation_Response>;
  update_roles?: Maybe<Roles_Mutation_Response>;
  update_targets?: Maybe<Targets_Mutation_Response>;
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  update_users?: Maybe<Users_Mutation_Response>;
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
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  default_role: Scalars['String'];
  display_name: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_anonymous: Scalars['Boolean'];
  refresh_tokens: Array<Auth_Refresh_Tokens>;
  refresh_tokens_aggregate: Auth_Refresh_Tokens_Aggregate;
  register_data?: Maybe<Scalars['jsonb']>;
  role: Roles;
  secret_token: Scalars['uuid'];
  secret_token_expires_at: Scalars['timestamptz'];
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  user_accounts: Array<Auth_User_Accounts>;
  user_accounts_aggregate: Auth_User_Accounts_Aggregate;
  user_providers: Array<Auth_User_Providers>;
  user_providers_aggregate: Auth_User_Providers_Aggregate;
  user_roles: Array<User_Roles>;
  user_roles_aggregate: User_Roles_Aggregate;
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
  avatar_url?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  default_role?: Maybe<String_Comparison_Exp>;
  display_name?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_anonymous?: Maybe<Boolean_Comparison_Exp>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Bool_Exp>;
  register_data?: Maybe<Jsonb_Comparison_Exp>;
  role?: Maybe<Roles_Bool_Exp>;
  secret_token?: Maybe<Uuid_Comparison_Exp>;
  secret_token_expires_at?: Maybe<Timestamptz_Comparison_Exp>;
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
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  refresh_tokens?: Maybe<Auth_Refresh_Tokens_Arr_Rel_Insert_Input>;
  register_data?: Maybe<Scalars['jsonb']>;
  role?: Maybe<Roles_Obj_Rel_Insert_Input>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
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
  avatar_url?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  default_role?: Maybe<Order_By>;
  display_name?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_anonymous?: Maybe<Order_By>;
  refresh_tokens_aggregate?: Maybe<Auth_Refresh_Tokens_Aggregate_Order_By>;
  register_data?: Maybe<Order_By>;
  role?: Maybe<Roles_Order_By>;
  secret_token?: Maybe<Order_By>;
  secret_token_expires_at?: Maybe<Order_By>;
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
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
  RegisterData = 'register_data',
  SecretToken = 'secret_token',
  SecretTokenExpiresAt = 'secret_token_expires_at',
  StripeCustomerId = 'stripe_customer_id',
  UpdatedAt = 'updated_at'
}

export type Users_Set_Input = {
  active?: Maybe<Scalars['Boolean']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  default_role?: Maybe<Scalars['String']>;
  display_name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_anonymous?: Maybe<Scalars['Boolean']>;
  register_data?: Maybe<Scalars['jsonb']>;
  secret_token?: Maybe<Scalars['uuid']>;
  secret_token_expires_at?: Maybe<Scalars['timestamptz']>;
  stripe_customer_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum Users_Update_Column {
  Active = 'active',
  AvatarUrl = 'avatar_url',
  CreatedAt = 'created_at',
  DefaultRole = 'default_role',
  DisplayName = 'display_name',
  Email = 'email',
  Id = 'id',
  IsAnonymous = 'is_anonymous',
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

export type InsertDocumentMutationVariables = {
  jobId: Scalars['uuid'];
  title: Scalars['String'];
  pickup: Scalars['Boolean'];
  url?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  province?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['String']>;
};


export type InsertDocumentMutation = (
  { __typename: 'mutation_root' }
  & { insert_documents: Maybe<(
    { __typename?: 'documents_mutation_response' }
    & { returning: Array<(
      { __typename?: 'documents' }
      & Pick<Documents, 'city' | 'created_at' | 'id' | 'pickup' | 'postal_code' | 'province' | 'street' | 'unit'>
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

export type SetRoleMutationVariables = {
  role: Scalars['String'];
  userId: Scalars['uuid'];
};


export type SetRoleMutation = (
  { __typename?: 'mutation_root' }
  & { insert_user_roles: Maybe<(
    { __typename?: 'user_roles_mutation_response' }
    & Pick<User_Roles_Mutation_Response, 'affected_rows'>
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
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'stripe_customer_id' | 'id'>
  )> }
);

export type JobsCreateDocumentsQueryVariables = {
  jobId: Scalars['uuid'];
};


export type JobsCreateDocumentsQuery = (
  { __typename: 'query_root' }
  & { documents: Array<(
    { __typename?: 'documents' }
    & Pick<Documents, 'id' | 'pickup' | 'title' | 'url' | 'street'>
  )> }
);


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
export const InsertDocumentDocument = gql`
    mutation InsertDocument($jobId: uuid!, $title: String!, $pickup: Boolean!, $url: String, $city: String, $postalCode: String, $province: String, $street: String, $unit: String) {
  __typename
  insert_documents(objects: {job_id: $jobId, pickup: $pickup, url: $url, title: $title, city: $city, postal_code: $postalCode, province: $province, street: $street, unit: $unit}) {
    returning {
      city
      created_at
      id
      pickup
      postal_code
      province
      street
      unit
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
 *      pickup: // value for 'pickup'
 *      url: // value for 'url'
 *      city: // value for 'city'
 *      postalCode: // value for 'postalCode'
 *      province: // value for 'province'
 *      street: // value for 'street'
 *      unit: // value for 'unit'
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
export const SetRoleDocument = gql`
    mutation SetRole($role: String!, $userId: uuid!) {
  insert_user_roles(objects: [{role: $role, user_id: $userId}]) {
    affected_rows
  }
}
    `;
export type SetRoleMutationFn = ApolloReactCommon.MutationFunction<SetRoleMutation, SetRoleMutationVariables>;

/**
 * __useSetRoleMutation__
 *
 * To run a mutation, you first call `useSetRoleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetRoleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setRoleMutation, { data, loading, error }] = useSetRoleMutation({
 *   variables: {
 *      role: // value for 'role'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSetRoleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SetRoleMutation, SetRoleMutationVariables>) {
        return ApolloReactHooks.useMutation<SetRoleMutation, SetRoleMutationVariables>(SetRoleDocument, baseOptions);
      }
export type SetRoleMutationHookResult = ReturnType<typeof useSetRoleMutation>;
export type SetRoleMutationResult = ApolloReactCommon.MutationResult<SetRoleMutation>;
export type SetRoleMutationOptions = ApolloReactCommon.BaseMutationOptions<SetRoleMutation, SetRoleMutationVariables>;
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
  users(where: {id: {_eq: $jobId}}) {
    stripe_customer_id
    id
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
export const JobsCreateDocumentsDocument = gql`
    query JobsCreateDocuments($jobId: uuid!) {
  __typename
  documents(where: {job_id: {_eq: $jobId}}) {
    id
    pickup
    title
    url
    street
  }
}
    `;

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