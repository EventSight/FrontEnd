import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import * as OCActions from "../store/actions/OCActions";
import {OCLogos} from "../assets/OClogo";


const Sidebar = (props)=>{

    useEffect(()=>{
        props.fetchAllOC()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    let logos = [];

    if(props.OCList !== null){
        logos = props.OCList.filter((OC)=>{
            return OC.members.includes(props.sid) || OC.followers.includes(props.sid)
        })
    }

    return <div className="Sidebar">
        {logos.filter((OC)=>OC.name==="General Organising Committee").map((OC, index)=>{
           return <div key={index} className="SidebarCard" >
            <Link to={"/oc-page/"+OC.name}><img className="SidebarCardImg" src = {OCLogos[OC.name]} alt={OC.name}/> </Link>
            </div>
        })} 
        {logos.filter((OC)=>OC.name!=="General Organising Committee").map((OC, index)=>{
           return <div key={index} className="SidebarCard" >
            <Link to={"/oc-page/"+OC.name}><img className="SidebarCardImg" src = {OCLogos[OC.name]} alt={OC.name}/> </Link>
            </div>
        })} 
    </div>
}

const mapStateToProps = (state)=>{
    return {
        sid : state.user.sid,
        OCList : state.OC.OCList
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        fetchAllOC : ()=>dispatch(OCActions.fetchAllOC())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Sidebar);