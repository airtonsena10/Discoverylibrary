/* eslint-disable no-use-before-define */
import { API } from '../_api'

export interface VolumeBooks {
  kind: string
  totalItems: number
  items: Item[]
}

export interface Item {
  kind: Kind
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  searchInfo?: SearchInfo
}

export enum AccessViewStatus {
  FullPublicDomain = 'FULL_PUBLIC_DOMAIN',
  Sample = 'SAMPLE',
}

export enum Country {
  Br = 'BR',
}

export enum TextToSpeechPermission {
  Allowed = 'ALLOWED',
}

export enum Viewability {
  AllPages = 'ALL_PAGES',
  Partial = 'PARTIAL',
}

export enum Kind {
  BooksVolume = 'books#volume',
}

export interface SaleInfoListPrice {
  amount: number
  currencyCode: CurrencyCode
}

export enum CurrencyCode {
  Brl = 'BRL',
}

export enum Saleability {
  ForSale = 'FOR_SALE',
  Free = 'FREE',
  NotForSale = 'NOT_FOR_SALE',
}

export interface SearchInfo {
  textSnippet: string
}

export interface VolumeInfo {
  title: string
  subtitle?: string
  authors: string[]
  description?: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printType: PrintType
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
  language: Language
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface IndustryIdentifier {
  type: Type
  identifier: string
}

export enum Type {
  Isbn10 = 'ISBN_10',
  Isbn13 = 'ISBN_13',
  Other = 'OTHER',
}

export enum Language {
  En = 'en',
}

export enum MaturityRating {
  NotMature = 'NOT_MATURE',
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}

export enum PrintType {
  Book = 'BOOK',
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export const getbooks = async (search: string) => {
  try {
    const data = await API.get<VolumeBooks>(`volumes?q=${search}`)
    return data
  } catch (error) {
    console.log('ERROR getbooks ----> ', error)
    return null
  }
}
