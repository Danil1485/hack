import React from "react";
import axios from "axios";

interface Room{
    uuid: string,
    name: string,
    office: string,
    photo: string,
    status: number,
    description: string,
    calendarCode: string,
    access: number;
    capacity: number;

}

function Room(){
    return(
        <>
        </>
    )
}

export default Room