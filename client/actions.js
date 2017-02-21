import {
  INCREMENT_R2D2,
  INCREMENT_BB8,
} from './constants'

export function incrementR2D2() {
  return {
    type: INCREMENT_R2D2,
  }
}

export function incrementBB8() {
  return {
    type: INCREMENT_BB8,
  }
}