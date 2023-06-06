import styles from './IndexForm.module.css'
import { useFormik } from 'formik'
import { RiLinkM } from 'react-icons/ri'
import AliasContainer from './AliasContainer/AliasContainer';
import axios from 'axios';
import { useAlias } from "./../../context/AliasContext";
import { useResponse } from 'context/ResponseContext';
import { useAuth } from 'context/AuthContext';
import { useEffect } from 'react';

const IndexForm = ({ handleOpen, token }: { handleOpen: () => void, token?: string | boolean }) => {

    const { isAuth } = useAuth();
    const { onChangeMessage, onChangeWarn, onChangeErrors, errors } = useResponse();

    const onSubmit = async (values: { url: string, alias: string }) => {
        const instance = axios.create({
            baseURL: 'http://localhost:4001/api',
            withCredentials: true,
            headers: {
                "Authorization": `Bearer ${isAuth && token}`
            }
        })

        instance.post('/url',
            {
                originalUrl: values.url,
                alias: values.alias
            },
            {
                validateStatus: function (status) {
                    return status <= 302;
                }
            })
            .then(function (res) {
                if (res.status === 302) {
                    onChangeWarn(res.data.message)
                } else {
                    onChangeMessage(res.data.message)
                }
                onChangeAlias(res.data.hash)
                handleOpen()
            })
            .catch(function (res) {
                onChangeErrors([res.response.data.errors])
            })
    }

    const formik = useFormik({
        initialValues: {
            url: '',
            alias: ''
        },
        onSubmit: onSubmit
    });

    const { onChangeAlias } = useAlias();

    return (
        <div className={styles.index}>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder='https://dribbble.com/shots/5953452'
                    name='url'
                    onChange={formik.handleChange}
                    value={formik.values.url}
                />
                <div className={styles.formIcon}><RiLinkM /></div>
                <button type="submit">Try now</button>
                <AliasContainer alias={formik.values.alias} handleChange={formik.handleChange} />
            </form>
        </div>
    )
}

export default IndexForm
