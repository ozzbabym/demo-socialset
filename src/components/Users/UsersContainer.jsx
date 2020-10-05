import React from 'react'
import { connect } from 'react-redux'
import { follow,  unfollow, setCurrentPage, toggleFollowingProgress,requestUsers } from '../../redux/users-reducer'
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getPageSize,getUsers,getTotalUsersCount,getCurrentPage,getIsFetching,getFollowingInProgress } from '../../redux/users-selectors';


class UsersContainerComponent extends React.Component {
  
    componentDidMount() {
      let {currentPage, pageSize}= this.props
      this.props.getUsers(currentPage,pageSize)
      
    }
    onPageChange=(pageNumber)=>{
      let {pageSize} = this.props
      this.props.getUsers(pageNumber,pageSize)

    }
    render() {
      
  
      return<>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount = {this.props.totalUsersCount} 
      pageSize={this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChange={this.onPageChange}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
     
      followingInProgress={this.props.followingInProgress}
      /> 
      </>
     
    }
  }

// let mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
    
// }

let mapStateToProps = (state) => {
  return{
      // users: getUsers(state),
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
  }
  
}


// export default withAuthRedirect(connect(mapStateToProps  ,{
//   follow,
//   unfollow,
//   setCurrentPage,
//   toggleFollowingProgress,
//   getUsers
// })(UsersContainerComponent)) 

export default compose(connect(mapStateToProps  ,{
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: requestUsers
}))(UsersContainerComponent)