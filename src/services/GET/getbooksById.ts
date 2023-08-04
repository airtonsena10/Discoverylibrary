/* eslint-disable no-use-before-define */
import { API } from '../_api'

export interface Book {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
}

export interface Epub {
  isAvailable: boolean
}

export interface PDF {
  isAvailable: boolean
  acsTokenLink: string
}

export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
}

export interface VolumeInfo {
  title: string
  authors: string[]
  description: string
  readingModes: ReadingModes
  pageCount: number
  printedPageCount: number
  dimensions: Dimensions
  printType: string
  contentVersion: string
  imageLinks: ImageLinks
  language: string
}

export interface Dimensions {
  height: string
  width: string
  thickness: string
}

export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
  small: string
  medium: string
}

export interface IndustryIdentifier {
  type: string
  identifier: string
}

export interface ReadingModes {
  text: boolean
  image: boolean
}

export const getbooksById = async (id: string) => {
  try {
    const data = await API.get<Book>(`volumes/${id}`)
    return data
  } catch (error) {
    console.log('ERROR getbooksById ----> ', error)
    return null
  }
}
