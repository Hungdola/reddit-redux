import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios"

export const updateUser = async (user, dispatch) => {
    dispatch(updateStart()) //nghĩa là khi mình dùng function này thì nó sẽ chạy updateStart trc
    try {
        const res = await axios.post("/v1/update", user) //ta có post là vì ở backend ta đặt là app.post
        dispatch(updateSuccess(res.data))
    } catch (err) {
        dispatch(updateError())
    }
}