import React from "react";


// class UsersAPIComponent extends React.Component {
//   componentDidMount() {
//     axios
//       .get(
//         `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
//       )
//       .then((response) => {
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
//       });
//   }
//   onPageChange=(pageNumber)=>{
    
//         this.props.setCurrentPage(pageNumber);
//         axios
//         .get(
//           `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`
//         )
//         .then((response) => {
//           this.props.setUsers(response.data.items);
//         });
//   }
//   render() {
    

//     return <Users totalUsersCount = {this.props.totalUsersCount} 
//     pageSize={this.props.pageSize}
//     currentPage = {this.props.currentPage}
//     onPageChange={this.onPageChange}
//     users={this.props.users}
//     follow={this.props.follow}
//     unfollow={this.props.unfollow}
//     /> 
   
//   }
// }
// export default UsersAPIComponent;

// [
//     {
//       id: 1,
//       photoUrl: "https://pbs.twimg.com/media/D9y1QChXYAM3sAi.jpg",
//       followed: false,
//       fullName: "Ivan",
//       status: "i am boss",
//       location: { city: "Moscow", country: "Russia" },
//     },
//     {
//       id: 2,
//       photoUrl: "https://pbs.twimg.com/media/D9y1QChXYAM3sAi.jpg",
//       followed: true,
//       fullName: "Sasha",
//       status: "i am boss too",
//       location: { city: "Kiev", country: "Ukraine" },
//     },
//     {
//       id: 3,
//       photoUrl: "https://pbs.twimg.com/media/D9y1QChXYAM3sAi.jpg",
//       followed: false,
//       fullName: "Dima",
//       status: "i am boss too",
//       location: { city: "Minsk", country: "Belarus" },
//     },
//   ]);
