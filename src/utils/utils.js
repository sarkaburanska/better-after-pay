import { isNil, isEmpty } from 'ramda';

export const isNilOrEmpty = value => isNil(value) || isEmpty(value);
export const isNotNilOrEmpty = value => !isNilOrEmpty(value);
