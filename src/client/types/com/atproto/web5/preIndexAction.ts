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
const id = 'com.atproto.web5.preIndexAction'

export interface QueryParams {}

export interface InputSchema {
  /** Identifier supported by the server for the authenticating user. */
  did: string
  /** Ckb address (see: https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md) */
  ckbAddr?: string
  index: $Typed<CreateSession> | $Typed<DeleteAccount> | { $type: string }
}

export interface OutputSchema {
  did: string
  handle: string
  message: string
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
  $type?: 'com.atproto.web5.preIndexAction#createSession'
}

const hashCreateSession = 'createSession'

export function isCreateSession<V>(v: V) {
  return is$typed(v, id, hashCreateSession)
}

export function validateCreateSession<V>(v: V) {
  return validate<CreateSession & V>(v, id, hashCreateSession)
}

export interface DeleteAccount {
  $type?: 'com.atproto.web5.preIndexAction#deleteAccount'
}

const hashDeleteAccount = 'deleteAccount'

export function isDeleteAccount<V>(v: V) {
  return is$typed(v, id, hashDeleteAccount)
}

export function validateDeleteAccount<V>(v: V) {
  return validate<DeleteAccount & V>(v, id, hashDeleteAccount)
}
