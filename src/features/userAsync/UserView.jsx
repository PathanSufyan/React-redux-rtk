import {useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'
import "../userAsync/UserView.css"
const UserView = () => {

    const user = useSelector( state => state.userReducer)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUsers())
    },[])

  return (
    <div>
        <h2>List of users</h2>
        {user.loading && <div>Loading ...</div>}
        {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
        {!user.loading && user.users.length ? (
            // <ul>
            //     {
            //         user.users.map( user => (
            //             <li key={user.id}>{user.name}</li>
            //         ))
            //     }
            // </ul>
            <table id="table_container" >
                {/* style="width:1000px height: 1000px   border-collapse: collapse;" */}
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.users.map(user => (
                            <tr key={user.id}>
                             <td >{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.address.city}</td>
                            </tr>
                           
                        ))
                    }
                </tbody>
            </table>
        ) : null}
    </div>
  )
}

export default UserView