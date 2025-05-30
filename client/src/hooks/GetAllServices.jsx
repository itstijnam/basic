import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { baseUrl } from "../utils/baseUrl";
import { setServices } from "../redux/serviceSlice";

const useGetAllServices = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllServices = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/service/get-services`);
                if (res.data.success) {
                    dispatch(setServices(res.data.services))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllServices();
    }, []);
};

export default useGetAllServices;