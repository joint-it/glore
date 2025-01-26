import type en from '#/translations/en.json'

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}
}
