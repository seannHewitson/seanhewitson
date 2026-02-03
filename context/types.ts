export type Mode = 'light' | 'dark'

export type ThemeContext = {
  mode: Mode
  setMode: React.Dispatch<React.SetStateAction<Mode>>
}
