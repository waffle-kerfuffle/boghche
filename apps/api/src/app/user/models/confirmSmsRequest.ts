export class ConfirmSmsRequest {
  telno: string
  code: string
  date: Date = new Date()
  wasSuccessful: boolean = false
}