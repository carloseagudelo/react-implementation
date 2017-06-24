import Reflux from 'reflux'

let DocumentAction = Reflux.createActions([
  'FetchDocuments',
  'SendFile',
  'ListUsers',
  'SendValidate',
  'ListDocuments',
  'SaveDocument',
  'FinishValidate',
  'FinishLoad'
])

export default DocumentAction