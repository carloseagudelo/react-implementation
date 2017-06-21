import Reflux from 'reflux'

let DocumentAction = Reflux.createActions([
  'FetchDocuments',
  'SendFile',
  'ListUsers',
  'SendValidate',
  'ListDocuments',
  'SaveDocument'
])

export default DocumentAction