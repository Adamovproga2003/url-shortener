import { toast } from 'react-toastify';

export const showErrors = (values: string[], onClose: any) => {
    values.map(error => toast.error(error, { onClose }));
}

export const showSuccess = (value: string, onClose: any) => {
    toast.success(value, { onClose });
}

export const showWarn = (value: string, onClose: any) => {
    toast.warn(value, { onClose });
}