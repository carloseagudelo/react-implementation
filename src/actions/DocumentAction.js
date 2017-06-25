import Reflux from 'reflux'

let DocumentAction = Reflux.createActions([
  'FetchDocuments',
  'SendFile',
  'ListUsersFinished',
  'ListUsersPending',
  'SendValidate',
  'ListDocuments',
  'SaveDocument',
  'FinishValidate',
  'FinishLoad'
])

export default DocumentAction