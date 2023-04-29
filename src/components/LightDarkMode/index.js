// Write your code here
import './index.css'

import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isTrue: true}

  OnChangeBackground = () => {
    this.setState(prev => ({isTrue: !prev.isTrue}))
  }

  render() {
    const {isTrue} = this.state

    const ChangeText = isTrue ? 'Light Mode' : 'Dark Mode'
    const modelClassNames = isTrue ? 'DarkMode' : 'LightMode'

    return (
      <div className="Main-Container">
        <div className={`SwitchToBgColor ${modelClassNames}`}>
          <h1>Click To Change Mode</h1>
          <button
            className="Color-Mode"
            type="button"
            onClick={this.OnChangeBackground}
          >
            {ChangeText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
