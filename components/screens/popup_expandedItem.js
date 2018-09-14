import React, {Component} from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Popup from '../reusable/popup.js'
import Styles from '../styles.js'

class ExpandedItem extends Component {

  constructor(props){
    super(props)
    this.state = {
      user: true
    }
  }

  static navigationOptions = {
   header: null
 }

 onSubmit = async () => {
   // replace with id from the store
   let id = 1
   const deleteUser = await
    fetch(`https://keeptheglow.herokuapp.com/api/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
     }
   }).then(response => {
     console.log("user deleted:", response)
   })

 }

  render() {
    return (
      <Popup
        header='Feeling from store or props'
        content='Descripion from store or props'
        form={false}
      />
    )
  }
}

export default ExpandedItem