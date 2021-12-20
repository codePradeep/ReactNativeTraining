
import React, { useEffect, useState } from "react";
import { useOrientation } from "../config/useOrientation";
import { sendGetRequest } from "../network/Network";
import Coursepage from "../views/course";
interface Coursemodelprops{
    navigation:any
}

const CourseModal = (props:Coursemodelprops) => {
    const {navigation} =props
    const orientation = useOrientation();
    const [isLoading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState([]);
    console.log(data)

    const getData = async () => {
        try {

            const response = await sendGetRequest('https://jsonplaceholder.typicode.com/photos?_limit=20');
            // const json = await response.json();
            setData(response);

            console.log('Data==>', response)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);

        }
    }

    useEffect(() => {

        getData();

    }, []);


    return (
    <Coursepage 
    navigation={navigation}
        isLoading={isLoading} 
        data={data} 
        orientation={orientation}
        item={{
        id: "",
        head: "",
        title: "",
        image: undefined,
        progress: 0
    }} />);
}

export default CourseModal;
