import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dropdownView: false
    }
  }

  toggleDropdown = () => {
    this.setState({dropdownView: !this.state.dropdownView})
  }


  render() {
    return (
      <div className='App'>
        <header className='main-header'>
        <h4>Start Bootstrap</h4>
          <nav className='desktop-menu'>
            <span>Services</span>
            <span>Portfolio</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact</span>
          </nav>

        <button className='dropdown' onClick={this.toggleDropdown}>Menu</button>
        {this.state.dropdownView
        ? (
          <nav className='mobile-menu'>
            <span>Services</span>
            <span>Portfolio</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact</span>
          </nav>
        )
        :null}
        </header>


        <div className='image-holder'>
          <div className='main-container'>
            <h5>Welcome To our Studio!</h5>
            <h1>It's Nice To Meet You</h1>
            <button className='more-btn'>Tell Me More</button>
          </div>
        </div>

        <div className='bottom-page'>
          <ul>Services</ul>
          <span> Lorem ipsum dolor sit amet consectetur.</span>
          <ul>Portfolio</ul>
          <ul>About</ul>
          <ul>Our Amazing Team</ul>
          <ul>Contact Us</ul>
        </div>


        </div>
    )
  }
}

export default App;

