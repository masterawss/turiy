import { getNearbyPlaces } from "api/HomeApi";
import { useMemo, useState } from "react";
import {toast} from 'react-toastify'
export const useCurrentPositionPlaces = ({current_position = {}, zoom=11}) => {

    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState(false)

    useMemo(() => {
        setLoading(true)
        getNearbyPlaces(current_position).then(places => {
            console.log(places);
            setPlaces(places || [])
        }).catch(e => {
            toast.error(e.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [current_position]);

    
    // useMemo(() => {
    // }, [current_position]);

    return [places, loading]
}
