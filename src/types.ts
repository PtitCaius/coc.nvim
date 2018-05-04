export type Filter = 'word' | 'fuzzy' | 'remote'

// options for init source
export interface SourceOption {
  name: string
  shortcut?: string
  priority: number
  filetypes?: string[]
  engross?: boolean | number
  filter?: Filter
}

// option on complete & should_complete
export interface CompleteOption {
  bufnr: string
  line: number
  col: number
  id: string
  input: string
  filetype: string
  word: string
}

export interface CompleteOptionVim {
  word: string
  lnum: number
  bufnr: number
  col: number
  filetype: string
  input: string
}

export interface VimCompleteItem {
  word: string
  abbr?: string
  menu?: string
  info?: string
  kind?: string
  icase?: number
  dup?: number
  empty?: number
  user_data?: string
}

export interface CompleteResult {
  items: VimCompleteItem[]
  offsetLeft?: number
  offsetRight?: number
}

export interface Config {
  fuzzyMatch: boolean
  keywordsRegex: RegExp
  timeout: number
  noTrace: boolean
  sources: string[]
  [index: string]: any
}
