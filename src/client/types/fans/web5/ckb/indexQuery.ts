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
const id = 'fans.web5.ckb.indexQuery'

export type QueryParams = {}

export interface InputSchema {
  index?:
    | $Typed<FirstItem>
    | $Typed<SecondItem>
    | $Typed<ThirdItem>
    | $Typed<FourthItem>
    | { $type: string }
}

export interface OutputSchema {
  result:
    | $Typed<FirstItemResult>
    | $Typed<SecondItemResult>
    | $Typed<ThirdItemResult>
    | $Typed<FourthItemResult>
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

export interface FirstItem {
  $type?: 'fans.web5.ckb.indexQuery#firstItem'
}

const hashFirstItem = 'firstItem'

export function isFirstItem<V>(v: V) {
  return is$typed(v, id, hashFirstItem)
}

export function validateFirstItem<V>(v: V) {
  return validate<FirstItem & V>(v, id, hashFirstItem)
}

export interface SecondItem {
  $type?: 'fans.web5.ckb.indexQuery#secondItem'
}

const hashSecondItem = 'secondItem'

export function isSecondItem<V>(v: V) {
  return is$typed(v, id, hashSecondItem)
}

export function validateSecondItem<V>(v: V) {
  return validate<SecondItem & V>(v, id, hashSecondItem)
}

export interface ThirdItem {
  $type?: 'fans.web5.ckb.indexQuery#thirdItem'
  /** Identifier supported by the server for the authenticating user. */
  did: string
}

const hashThirdItem = 'thirdItem'

export function isThirdItem<V>(v: V) {
  return is$typed(v, id, hashThirdItem)
}

export function validateThirdItem<V>(v: V) {
  return validate<ThirdItem & V>(v, id, hashThirdItem)
}

export interface FourthItem {
  $type?: 'fans.web5.ckb.indexQuery#fourthItem'
  /** Identifier supported by the server for the authenticating user. */
  did: string
}

const hashFourthItem = 'fourthItem'

export function isFourthItem<V>(v: V) {
  return is$typed(v, id, hashFourthItem)
}

export function validateFourthItem<V>(v: V) {
  return validate<FourthItem & V>(v, id, hashFourthItem)
}

export interface FirstItemResult {
  $type?: 'fans.web5.ckb.indexQuery#firstItemResult'
  result: number
}

const hashFirstItemResult = 'firstItemResult'

export function isFirstItemResult<V>(v: V) {
  return is$typed(v, id, hashFirstItemResult)
}

export function validateFirstItemResult<V>(v: V) {
  return validate<FirstItemResult & V>(v, id, hashFirstItemResult)
}

export interface SecondItemResult {
  $type?: 'fans.web5.ckb.indexQuery#secondItemResult'
  result: number
}

const hashSecondItemResult = 'secondItemResult'

export function isSecondItemResult<V>(v: V) {
  return is$typed(v, id, hashSecondItemResult)
}

export function validateSecondItemResult<V>(v: V) {
  return validate<SecondItemResult & V>(v, id, hashSecondItemResult)
}

export interface ThirdItemResult {
  $type?: 'fans.web5.ckb.indexQuery#thirdItemResult'
  result: number
}

const hashThirdItemResult = 'thirdItemResult'

export function isThirdItemResult<V>(v: V) {
  return is$typed(v, id, hashThirdItemResult)
}

export function validateThirdItemResult<V>(v: V) {
  return validate<ThirdItemResult & V>(v, id, hashThirdItemResult)
}

export interface FourthItemResult {
  $type?: 'fans.web5.ckb.indexQuery#fourthItemResult'
  result: string
}

const hashFourthItemResult = 'fourthItemResult'

export function isFourthItemResult<V>(v: V) {
  return is$typed(v, id, hashFourthItemResult)
}

export function validateFourthItemResult<V>(v: V) {
  return validate<FourthItemResult & V>(v, id, hashFourthItemResult)
}
