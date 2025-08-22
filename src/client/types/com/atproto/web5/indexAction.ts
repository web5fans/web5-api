/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { HeadersMap, XRPCError } from '@atproto/xrpc'
import { type ValidationResult, BlobRef } from '@atproto/lexicon'
import { CID } from 'multiformats/cid'
import { validate as _validate } from '../../../../lexicons'
import {
  type $Typed,
  is$typed as _is$typed,
  type OmitKey,
} from '../../../../util'

const is$typed = _is$typed,
  validate = _validate
const id = 'com.atproto.web5.indexAction'

export interface QueryParams {}

export interface InputSchema {
  /** Identifier supported by the server for the authenticating user. */
  did: string
  /** DID PLC signing key to be included in PLC creation operation. */
  signingKey: string
  message: string
  signedBytes: string
  /** Ckb address (see: https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md) */
  ckbAddr?: string
  index: $Typed<CreateSession> | $Typed<DeleteAccount> | { $type: string }
}

export interface OutputSchema {
  result:
    | $Typed<CreateSessionResult>
    | $Typed<DeleteAccountResult>
    | { $type: string }
}

export interface CallOptions {
  signal?: AbortSignal
  headers?: HeadersMap
  qp?: QueryParams
  encoding?: 'application/json'
}

export interface Response {
  success: boolean
  headers: HeadersMap
  data: OutputSchema
}

export class AccountTakedownError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'AccountTakedown') return new AccountTakedownError(e)
  }

  return e
}

export interface CreateSession {
  $type?: 'com.atproto.web5.indexAction#createSession'
}

const hashCreateSession = 'createSession'

export function isCreateSession<V>(v: V) {
  return is$typed(v, id, hashCreateSession)
}

export function validateCreateSession<V>(v: V) {
  return validate<CreateSession & V>(v, id, hashCreateSession)
}

export interface DeleteAccount {
  $type?: 'com.atproto.web5.indexAction#deleteAccount'
}

const hashDeleteAccount = 'deleteAccount'

export function isDeleteAccount<V>(v: V) {
  return is$typed(v, id, hashDeleteAccount)
}

export function validateDeleteAccount<V>(v: V) {
  return validate<DeleteAccount & V>(v, id, hashDeleteAccount)
}

export interface CreateSessionResult {
  $type?: 'com.atproto.web5.indexAction#createSessionResult'
  accessJwt: string
  refreshJwt: string
  handle: string
  did: string
  didDoc?: { [_ in string]: unknown }
  email?: string
  emailConfirmed?: boolean
  emailAuthFactor?: boolean
  active?: boolean
  /** If active=false, this optional field indicates a possible reason for why the account is not active. If active=false and no status is supplied, then the host makes no claim for why the repository is no longer being hosted. */
  status?: 'takendown' | 'suspended' | 'deactivated' | (string & {})
}

const hashCreateSessionResult = 'createSessionResult'

export function isCreateSessionResult<V>(v: V) {
  return is$typed(v, id, hashCreateSessionResult)
}

export function validateCreateSessionResult<V>(v: V) {
  return validate<CreateSessionResult & V>(v, id, hashCreateSessionResult)
}

export interface DeleteAccountResult {
  $type?: 'com.atproto.web5.indexAction#deleteAccountResult'
}

const hashDeleteAccountResult = 'deleteAccountResult'

export function isDeleteAccountResult<V>(v: V) {
  return is$typed(v, id, hashDeleteAccountResult)
}

export function validateDeleteAccountResult<V>(v: V) {
  return validate<DeleteAccountResult & V>(v, id, hashDeleteAccountResult)
}
