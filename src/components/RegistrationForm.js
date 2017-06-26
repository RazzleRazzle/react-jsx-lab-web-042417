import React from 'react'

export default class RegistrationForm extends React.Component {
  render() {
    return(
        <form>
          <input type="text" name="text-field"/>
          <input type="password" name="password-field"/>
          <button type="submit">Submit</button>
        </form>
    )
  }
}
