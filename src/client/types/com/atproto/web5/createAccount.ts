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
const id = 'com.atproto.web5.createAccount'

export type QueryParams = {}

export interface InputSchema {
  /** Requested handle for the account. */
  handle: string
  /** DID PLC signing key to be included in PLC creation operation. */
  signingKey: string
  inviteCode?: string
  /** Initial account password. May need to meet instance-specific password strength requirements. */
  password?: string
  /** Ckb address (see: https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md) */
  ckbAddr: string
  root: SignedRoot
}

/** Account login session returned on successful account creation. */
export interface OutputSchema {
  accessJwt: string
  refreshJwt: string
  handle: string
  /** The DID of the new account. */
  did: string
  /** Complete DID document. */
  didDoc?: { [_ in string]: unknown }
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

export class InvalidHandleError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class HandleNotAvailableError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class UnsupportedDomainError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class UnresolvableDidError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class IncompatibleDidDocError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export class InvalidSignatureError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers, { cause: src })
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === 'InvalidHandle') return new InvalidHandleError(e)
    if (e.error === 'HandleNotAvailable') return new HandleNotAvailableError(e)
    if (e.error === 'UnsupportedDomain') return new UnsupportedDomainError(e)
    if (e.error === 'UnresolvableDid') return new UnresolvableDidError(e)
    if (e.error === 'IncompatibleDidDoc') return new IncompatibleDidDocError(e)
    if (e.error === 'InvalidSignature') return new InvalidSignatureError(e)
  }

  return e
}

export interface SignedRoot {
  $type?: 'com.atproto.web5.createAccount#signedRoot'
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
