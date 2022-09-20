import { AbstractControl } from "@angular/forms";

export interface IControls {
  [key: string]: AbstractControl
}

export interface IBoardItem {
  id: number | string
  title: string
}
