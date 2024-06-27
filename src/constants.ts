import { Percent, V2_FACTORY_ADDRESSES } from '@uniswap/sdk-core'
import JSBI from 'jsbi'

/**
 * @deprecated use FACTORY_ADDRESS_MAP instead
 */
export const FACTORY_ADDRESS = '0x61b781d983f5D2134946dF130E9B62962C71b2C0'

export const FACTORY_ADDRESS_MAP: { [chainId: number]: string } = V2_FACTORY_ADDRESSES

export const INIT_CODE_HASH = '0x8615843ab28b4b86b2382dca22cf14f0a6ba9e52cb006531eb574042a5b54a46'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
export const BASIS_POINTS = JSBI.BigInt(10000)

export const ZERO_PERCENT = new Percent(ZERO)
export const ONE_HUNDRED_PERCENT = new Percent(ONE)
