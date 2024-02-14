import { ChangeEventHandler } from "react"

export interface InputType {
    value: string
    onChange: ChangeEventHandler<HTMLInputElement>
}