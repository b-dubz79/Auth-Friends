import React from 'react'
import { axiosWithAuth } from '../Utils/axiosWithAuth'

class FriendsList extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        friends: [],
        
        addFriend: {
            name: '',
            age: '',
            email: ''
        }
    }
}

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            console.log(res);
            this.setState({
                friends: res.data
            })
        }).catch(err => console.log(err))
    }

    submit = () => {
        axiosWithAuth()
        .post('/api/friends', this.state.addFriend)
        .then(res => console.log('!!!!!', res))
        // res => this.setState(res.friends)
        .catch(err => console.log(err))
    }

    handleChange = e => {
        console.log('!!!!', e.target.value)
        this.setState({
           friends: this.state.friends,
        addFriend: {...this.state.addFriend,
        [e.target.name]: e.target.value}
    })
    }


    render(){
        return(
        <div>
            <form onSubmit={this.submit}>
                <input
                
                type='text'
                name='name'
                value={this.state.addFriend.name}
                onChange={this.handleChange}
                />
                 <input
                type='text'
                name='age'
                value={this.state.addFriend.age}
                onChange={this.handleChange}
                />
                 <input
                type='text'
                name='email'
                value={this.state.addFriend.email}
                onChange={this.handleChange}
                />
                 
                <button type='submit'>Add a buddy</button>
            </form>
            <p>Friends!  Yay!</p>
            {this.state.friends.map(friend => {
                return(
                    <div>
                        <h2>{friend.name}</h2>
                        <h3>{friend.email}</h3>
                        <h3>{friend.age}</h3>
                    </div>
                )
            })}

            
        </div>
    )
    }
}
 
export default FriendsList