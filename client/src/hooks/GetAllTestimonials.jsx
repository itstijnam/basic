import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { baseUrl } from "../utils/baseUrl";
import { setTestimonials } from "../redux/serviceSlice";

const GetAllTestimonials = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllTestimonials = async () => {
            try {
                const res = await axios.get(`${baseUrl}/testimonials/all-testimonials`);
                if (res.data.success) {
                    dispatch(setTestimonials(res.data.testimonials))
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllTestimonials();
    }, []);
};

export default GetAllTestimonials;