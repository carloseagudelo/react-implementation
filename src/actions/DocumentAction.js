import Reflux from 'reflux'

let DocumentAction = Reflux.createActions([
  'FetchDocuments',
  'SendFile',
  'ListUsers',
  'SendValidate'
])

export default DocumentAction