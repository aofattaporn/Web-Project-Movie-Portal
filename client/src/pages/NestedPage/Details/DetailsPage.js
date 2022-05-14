import  components  from "../../../components";
const { Fragment } = require("react")

const DetailsPage =()=>{
   return (
      <Fragment>
         <components.DetailsTap></components.DetailsTap>
         <components.CommentTap></components.CommentTap>
      </Fragment>
   )
}

export default DetailsPage;