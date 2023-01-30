import React, { useState, useEffect } from 'react'
import Env from '../config/env.config'
import { strings as commonStrings } from '../lang/common'
import { strings } from '../lang/sign-in'
import * as UserService from '../services/UserService'
import Header from '../components/Header'
import Error from '../components/Error'
import {
    Paper,
    FormControl,
    InputLabel,
    Input,
    Button,
    Link
} from '@mui/material'

import '../assets/css/signin.css'

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [visible, setVisible] = useState(false)
    const [blacklisted, setBlacklisted] = useState(false)
    const [stayConnected, setStayConnected] = useState(false)

    const handleOnChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleOnPasswordKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = { email, password, stayConnected }

        UserService.signin(data)
            .then(res => {
                if (res.status === 200) {
                    if (res.data.blacklisted) {
                        UserService.signout(false)
                        setError(false)
                        setBlacklisted(true)
                    } else {
                        setError(false)

                        const params = new URLSearchParams(window.location.search)

                        if (params.has('u')) {
                            window.location.href = '/user' + window.location.search
                        } else if (params.has('c')) {
                            window.location.href = '/supplier' + window.location.search
                        } else if (params.has('cr')) {
                            window.location.href = '/car' + window.location.search
                        } else if (params.has('b')) {
                            window.location = '/booking' + window.location.search
                        } else {
                            window.location.href = '/'
                        }
                    }
                } else {
                    setError(true)
                    setBlacklisted(false)
                }
            }).catch(() => {
                setError(true)
                setBlacklisted(false)
            })
    }

    useEffect(() => {
        const queryLanguage = UserService.getQueryLanguage()

        if (Env.LANGUAGES.includes(queryLanguage)) {
            strings.setLanguage(queryLanguage)
        } else {
            const language = UserService.getLanguage()
            strings.setLanguage(language)
        }

        const currentUser = UserService.getCurrentUser()

        if (currentUser) {
            UserService.validateAccessToken().then(status => {
                if (status === 200) {
                    UserService.getUser(currentUser.id).then(user => {
                        if (user) {
                            window.location.href = '/' + window.location.search
                        } else {
                            UserService.signout()
                        }
                    }).catch(err => {
                        UserService.signout()
                    })
                }
            }).catch(err => {
                UserService.signout()
            })
        } else {
            setVisible(true)
        }
    }, [])

    return (
        <div>
            <Header />
            {visible &&
                <div className='signin'>
                    <Paper className='signin-form' elevation={10}>
                        <form onSubmit={handleSubmit}>
                            <h1 className="signin-form-title">{strings.SIGN_IN_HEADING}</h1>
                            <FormControl fullWidth margin="dense">
                                <InputLabel htmlFor="email">{commonStrings.EMAIL}</InputLabel>
                                <Input
                                    id="email"
                                    type="text"
                                    name="Email"
                                    onChange={handleOnChangeEmail}
                                    autoComplete="email"
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth margin="dense">
                                <InputLabel htmlFor="password">{commonStrings.PASSWORD}</InputLabel>
                                <Input
                                    id="password"
                                    name="Password"
                                    onChange={handleOnChangePassword}
                                    onKeyDown={handleOnPasswordKeyDown}
                                    autoComplete="password"
                                    type="password"
                                    required
                                />
                            </FormControl>

                            <div className='stay-connected'>
                                <input type='checkbox' onChange={(e) => {
                                    setStayConnected(e.currentTarget.checked)
                                }} />
                                <label onClick={(e) => {
                                    const checkbox = e.currentTarget.previousSibling
                                    const checked = !checkbox.checked
                                    checkbox.checked = checked
                                    setStayConnected(checked)
                                }}>{strings.STAY_CONNECTED}</label>
                            </div>

                            <div className='forgot-password'>
                                <Link href='/forgot-password'>{strings.RESET_PASSWORD}</Link>
                            </div>

                            <div className='signin-buttons'>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    size="small"
                                    className='btn-primary'
                                >
                                    {strings.SIGN_IN}
                                </Button>
                            </div>
                            <div className="form-error">
                                {error && <Error message={strings.ERROR_IN_SIGN_IN} />}
                                {blacklisted && <Error message={strings.IS_BLACKLISTED} />}
                            </div>
                        </form>
                    </Paper>
                </div>}
        </div>
    )
}

export default SignIn