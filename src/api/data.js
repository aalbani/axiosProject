import axios from 'axios'

export default {

  getZip (zip, cb) {
    axios.get('http://ZiptasticAPI.com/' + zip)
    .then(response => {
      cb(response.data)
    })
        .catch(error => {
          console.log(error)
          return error
        })
  },
  postData (obj, cb) {
    axios.post('https://jsonplaceholder.typicode.com/posts', obj)
    .then(response => {
      cb(response.data)
    }).catch(error => {
      cb(error)
      console.log(error)
    })
  }

}
