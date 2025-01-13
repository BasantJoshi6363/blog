import { toast } from "react-toastify"
export function toastifySeccess(message) {
    toast.success(message)
}

export function toastifyError(message) {
    toast.error(message)
}