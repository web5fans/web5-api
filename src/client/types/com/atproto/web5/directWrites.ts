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
const id = 'com.atproto.web5.directWrites'

export interface QueryParams {}

export interface InputSchema {
  /** The handle or DID of the repo (aka, current account). */
  repo: string
  /** Can be set to 'false' to skip Lexicon schema validation of record data across all operations, 'true' to require it, or leave unset to validate only for known Lexicons. */
  validate?: boolean
  writes: ($Typed<Create> | $Typed<Update> | $Typed<Delete>)[]
  /** If provided, the entire operation will fail if the current repo commit CID does not match this value. Used to prevent conflicting repo mutations. */
  swapCommit?: string
  /** DID PLC signing key to be included in PLC creation operation. */
  signingKey: string
  /** Ckb address (see: https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md) */
  ckbAddr?: string
  root: SignedRoot
}

export interface OutputSchema {}

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

export class InvalidSwapError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'InvalidSwap') return new InvalidSwapError(e)
  }

  return e
}

/** Operation which creates a new record. */
export interface Create {
  $type?: 'com.atproto.web5.directWrites#create'
  collection: string
  /** NOTE: maxLength is redundant with record-key format. Keeping it temporarily to ensure backwards compatibility. */
  rkey?: string
  value: { [_ in string]: unknown }
}

const hashCreate = 'create'

export function isCreate<V>(v: V) {
  return is$typed(v, id, hashCreate)
}

export function validateCreate<V>(v: V) {
  return validate<Create & V>(v, id, hashCreate)
}

/** Operation which updates an existing record. */
export interface Update {
  $type?: 'com.atproto.web5.directWrites#update'
  collection: string
  rkey: string
  value: { [_ in string]: unknown }
}

const hashUpdate = 'update'

export function isUpdate<V>(v: V) {
  return is$typed(v, id, hashUpdate)
}

export function validateUpdate<V>(v: V) {
  return validate<Update & V>(v, id, hashUpdate)
}

/** Operation which deletes an existing record. */
export interface Delete {
  $type?: 'com.atproto.web5.directWrites#delete'
  collection: string
  rkey: string
}

const hashDelete = 'delete'

export function isDelete<V>(v: V) {
  return is$typed(v, id, hashDelete)
}

export function validateDelete<V>(v: V) {
  return validate<Delete & V>(v, id, hashDelete)
}

export interface SignedRoot {
  $type?: 'com.atproto.web5.directWrites#signedRoot'
  did: string
  rev: string
  data: string
  prev?: string
  version: number
  signedBytes: string
}

const hashSignedRoot = 'signedRoot'

export function isSignedRoot<V>(v: V) {
  return is$typed(v, id, hashSignedRoot)
}

export function validateSignedRoot<V>(v: V) {
  return validate<SignedRoot & V>(v, id, hashSignedRoot)
}
